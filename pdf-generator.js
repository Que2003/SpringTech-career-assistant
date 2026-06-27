const resumePdfButton = document.querySelector("#download-resume-pdf");
const coverLetterPdfButton = document.querySelector("#download-cover-letter-pdf");

function pdfSafeText(value) {
  return String(value || "")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2022/g, "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, " ");
}

function slugFileName(value) {
  return String(value || "springtech-file")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "springtech-file";
}

function escapePdfString(value) {
  return pdfSafeText(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapLine(line, maxChars = 92) {
  const words = pdfSafeText(line).split(/\s+/).filter(Boolean);
  const wrapped = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      wrapped.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) wrapped.push(current);
  return wrapped.length ? wrapped : [""];
}

function textToLines(text) {
  const lines = [];
  pdfSafeText(text).split("\n").forEach((line) => {
    if (!line.trim()) {
      lines.push("");
      return;
    }
    lines.push(...wrapLine(line));
  });
  return lines;
}

function makePdfDocument(title, bodyText) {
  const pageWidth = 612;
  const pageHeight = 792;
  const marginLeft = 54;
  const startY = 740;
  const lineHeight = 14;
  const linesPerPage = 48;
  const lines = textToLines(`${title}\n\n${bodyText}`);
  const pages = [];

  for (let index = 0; index < lines.length; index += linesPerPage) {
    pages.push(lines.slice(index, index + linesPerPage));
  }

  if (!pages.length) pages.push([title]);

  const objects = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };

  const catalogId = addObject("__CATALOG__");
  const pagesId = addObject("__PAGES__");
  const fontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const pageIds = [];

  pages.forEach((pageLines) => {
    const contentLines = ["BT", "/F1 10 Tf", `${marginLeft} ${startY} Td`, "14 TL"];
    pageLines.forEach((line) => {
      contentLines.push(`(${escapePdfString(line)}) Tj`);
      contentLines.push("T*");
    });
    contentLines.push("ET");

    const stream = contentLines.join("\n");
    const contentId = addObject(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    const pageId = addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`);
    pageIds.push(pageId);
  });

  objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n% SpringTech Career Assistant\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return pdf;
}

function downloadPdfFile(text, title, filename) {
  const pdf = makePdfDocument(title, text);
  const blob = new Blob([pdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
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
  const role = data.jobTitle || "Target Role";

  return { data, resumeText, coverLetterText, company, role };
}

function setPdfStatus(message) {
  const status = document.querySelector("#assist-status");
  if (status) status.textContent = message;
}

function downloadResumePdf() {
  const docs = getGeneratedDocuments();
  if (!docs) {
    setPdfStatus("Add a job title or job description before creating PDFs.");
    return;
  }

  const filename = `${slugFileName(`${docs.company}-${docs.role}`)}-resume.pdf`;
  downloadPdfFile(docs.resumeText, `${docs.role} Resume - Quenton Dillings`, filename);
}

function downloadCoverLetterPdf() {
  const docs = getGeneratedDocuments();
  if (!docs) {
    setPdfStatus("Add a job title or job description before creating PDFs.");
    return;
  }

  const filename = `${slugFileName(`${docs.company}-${docs.role}`)}-cover-letter.pdf`;
  downloadPdfFile(docs.coverLetterText, `${docs.role} Cover Letter - Quenton Dillings`, filename);
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

const packageForm = document.querySelector("#career-form");
if (packageForm) {
  packageForm.addEventListener("submit", () => {
    setTimeout(downloadApplicationPdfs, 500);
  });
}
