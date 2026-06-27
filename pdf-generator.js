/* SpringTech PDF generator — jsPDF-based, recruiter-facing layout.
   Falls back to a plain-text download if jsPDF fails to load (offline). */

const resumePdfButton = document.querySelector("#download-resume-pdf");
const coverLetterPdfButton = document.querySelector("#download-cover-letter-pdf");

function slugFileName(value) {
  return String(value || "springtech-file")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "springtech-file";
}

function jsPdfReady() {
  return !!(window.jspdf && window.jspdf.jsPDF);
}

/* ---------- Structured PDF rendering ----------
   We render from the same text the app already builds, but we detect
   structure (ALL-CAPS section headers, "- " bullets, the name line) and
   style each differently so the output looks like a real document. */

const PAGE = { w: 612, h: 792, mL: 56, mR: 56, top: 64, bottom: 56 };

function isSectionHeader(line) {
  const t = line.trim();
  if (t.length < 3 || t.length > 60) return false;
  // ALL CAPS (letters + spaces/&/numbers), e.g. PROFESSIONAL SUMMARY
  return /^[A-Z0-9][A-Z0-9 &/+(),.-]+$/.test(t) && /[A-Z]/.test(t) && t === t.toUpperCase();
}

function renderStructuredPdf(doc, title, body, opts) {
  const o = opts || {};
  let y = PAGE.top;
  const usableW = PAGE.w - PAGE.mL - PAGE.mR;

  const newPageIfNeeded = (needed) => {
    if (y + needed > PAGE.h - PAGE.bottom) {
      doc.addPage();
      y = PAGE.top;
    }
  };

  const writeWrapped = (text, { size, style, color, gap, indent }) => {
    doc.setFont("helvetica", style || "normal");
    doc.setFontSize(size);
    doc.setTextColor(color || "#1a1a1a");
    const x = PAGE.mL + (indent || 0);
    const lines = doc.splitTextToSize(text, usableW - (indent || 0));
    lines.forEach((ln) => {
      newPageIfNeeded(size + 2);
      doc.text(ln, x, y);
      y += size + 2;
    });
    y += gap || 0;
  };

  // Header band: candidate name + title
  doc.setFillColor("#0f1c2e");
  doc.rect(0, 0, PAGE.w, 46, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor("#ffffff");
  doc.text(o.headerName || "Quenton Dillings", PAGE.mL, 29);
  if (o.headerRight) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor("#9fb4cc");
    doc.text(o.headerRight, PAGE.w - PAGE.mR, 29, { align: "right" });
  }
  y = 70;

  // Document title (e.g. "Help Desk Technician — Resume")
  writeWrapped(title, { size: 13, style: "bold", color: "#0f1c2e", gap: 6 });
  // gold divider
  doc.setDrawColor("#c8a24a");
  doc.setLineWidth(1.2);
  doc.line(PAGE.mL, y, PAGE.w - PAGE.mR, y);
  y += 14;

  const rawLines = String(body).replace(/\r/g, "").split("\n");
  // The resume/cover text begins with name + contact + title, but the header
  // band already shows the name and contact. Drop those leading duplicates so
  // the document doesn't repeat them.
  if (o.dropLeadingIdentity) {
    while (rawLines.length) {
      const first = rawLines[0].trim();
      if (!first) { rawLines.shift(); continue; }
      const isName = first === (o.headerName || "Quenton Dillings");
      const isContact = /linkedin\.com|add phone\/email|houston, tx/i.test(first) && first.length < 120;
      if (isName || isContact) { rawLines.shift(); continue; }
      break; // keep the title line and everything after
    }
  }
  rawLines.forEach((line) => {
    const t = line.replace(/\s+$/g, "");
    if (!t.trim()) { y += 5; return; }

    if (isSectionHeader(t)) {
      y += 6;
      newPageIfNeeded(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor("#0f1c2e");
      doc.text(t.trim(), PAGE.mL, y);
      y += 4;
      doc.setDrawColor("#d9dee6");
      doc.setLineWidth(0.6);
      doc.line(PAGE.mL, y, PAGE.w - PAGE.mR, y);
      y += 11;
      return;
    }

    if (/^[-•]\s+/.test(t)) {
      const txt = t.replace(/^[-•]\s+/, "");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor("#c8a24a");
      newPageIfNeeded(12);
      doc.text("•", PAGE.mL + 4, y);
      writeWrapped(txt, { size: 9.5, style: "normal", color: "#26303d", gap: 1, indent: 16 });
      return;
    }

    // Pipe-delimited contact / meta line directly under a name
    writeWrapped(t.trim(), { size: 9.5, style: "normal", color: "#26303d", gap: 1 });
  });

  // Footer on every page
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor("#9aa3ad");
    doc.text("Generated with SpringTech Career Assistant — review before submitting.", PAGE.mL, PAGE.h - 30);
    doc.text(`${i} / ${pageCount}`, PAGE.w - PAGE.mR, PAGE.h - 30, { align: "right" });
  }
}

function downloadPdfFile(text, title, filename, opts) {
  if (!jsPdfReady()) {
    // Offline fallback: plain text so the user is never blocked.
    const blob = new Blob([`${title}\n\n${text}`], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename.replace(/\.pdf$/, ".txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setPdfStatus("jsPDF unavailable (offline). Downloaded a .txt version instead.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  renderStructuredPdf(doc, title, text, opts || {});
  doc.save(filename);
}

function getGeneratedDocuments() {
  if (typeof getFormData !== "function" || typeof extractKeywords !== "function" || typeof getRoleProfile !== "function") {
    return null;
  }
  const data = getFormData();
  if (!data.jobTitle && !data.jobDescription) return null;

  const keywords = extractKeywords(data.jobDescription || "");
  const roleProfile = getRoleProfile(data);
  const resumeText = buildResumeDraft(data, roleProfile, keywords);
  const coverLetterText = buildCoverLetter(data, roleProfile, keywords);
  const company = data.company || "Company";
  const role = data.jobTitle || roleProfile.title;
  return { data, resumeText, coverLetterText, company, role };
}

function setPdfStatus(message) {
  const status = document.querySelector("#assist-status");
  if (status) status.textContent = message;
}

function contactLineForHeader() {
  return "Houston, TX  •  linkedin.com/in/quenton-dillings";
}

function downloadResumePdf() {
  const docs = getGeneratedDocuments();
  if (!docs) { setPdfStatus("Add a job title or job description before creating PDFs."); return; }
  const filename = `${slugFileName(`${docs.company}-${docs.role}`)}-resume.pdf`;
  downloadPdfFile(docs.resumeText, `${docs.role} — Resume`, filename, {
    headerName: "Quenton Dillings",
    headerRight: contactLineForHeader(),
    dropLeadingIdentity: true
  });
}

function downloadCoverLetterPdf() {
  const docs = getGeneratedDocuments();
  if (!docs) { setPdfStatus("Add a job title or job description before creating PDFs."); return; }
  const filename = `${slugFileName(`${docs.company}-${docs.role}`)}-cover-letter.pdf`;
  downloadPdfFile(docs.coverLetterText, `${docs.role} — Cover Letter`, filename, {
    headerName: "Quenton Dillings",
    headerRight: contactLineForHeader(),
    dropLeadingIdentity: true
  });
}

function downloadApplicationPdfs() {
  const docs = getGeneratedDocuments();
  if (!docs) return;
  downloadResumePdf();
  setTimeout(downloadCoverLetterPdf, 350);
  setPdfStatus("Resume PDF and cover letter PDF created. Review both before submitting.");
}

if (resumePdfButton) resumePdfButton.addEventListener("click", downloadResumePdf);
if (coverLetterPdfButton) coverLetterPdfButton.addEventListener("click", downloadCoverLetterPdf);
