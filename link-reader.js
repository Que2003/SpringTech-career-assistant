const linkOnlyButton = document.querySelector("#link-only-assist");

function setLinkReaderStatus(message) {
  const status = document.querySelector("#assist-status");
  if (status) status.textContent = message;
}

function titleCase(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function getUrlValue() {
  return document.querySelector("#job-url")?.value.trim() || "";
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}

function inferFromLink(url) {
  const hostParts = url.hostname.replace(/^www\./, "").split(".");
  const company = titleCase(hostParts[0].replace(/[-_]/g, " ")) || "Company";
  const pathWords = url.pathname
    .split(/[\/\-_]+/)
    .map((part) => part.replace(/\d+/g, ""))
    .filter((part) => part.length > 2)
    .filter((part) => !["job", "jobs", "careers", "career", "apply", "position", "opening", "requisition", "posting", "details"].includes(part.toLowerCase()));

  const guessedTitle = titleCase(pathWords.slice(-7).join(" ")) || "IT Support Role";
  return { company, guessedTitle };
}

function textFromHtml(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  doc.querySelectorAll("script, style, noscript, svg").forEach((node) => node.remove());
  const title = doc.querySelector("title")?.textContent || "";
  const body = doc.body?.innerText || html;
  return `${title}\n${body}`.replace(/\n{3,}/g, "\n\n").trim();
}

function cleanPostingText(text) {
  return text
    .replace(/\t/g, " ")
    .replace(/ {2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n")
    .slice(0, 14000);
}

function looksLikeJobDescription(text) {
  const lowered = text.toLowerCase();
  const signals = [
    "responsibilities",
    "qualifications",
    "requirements",
    "job description",
    "what you will do",
    "about the role",
    "experience",
    "skills",
    "apply"
  ];
  return text.length > 600 && signals.filter((signal) => lowered.includes(signal)).length >= 2;
}

async function fetchPublicPostingText(url) {
  const targets = [
    url.href,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url.href)}`
  ];

  for (const target of targets) {
    try {
      const response = await fetch(target, { method: "GET" });
      if (!response.ok) continue;
      const raw = await response.text();
      const text = raw.includes("<html") || raw.includes("<!DOCTYPE") ? textFromHtml(raw) : raw;
      const cleaned = cleanPostingText(text);
      if (looksLikeJobDescription(cleaned)) return cleaned;
    } catch {
      // Some job boards block browser reading. The user can still paste the description manually.
    }
  }

  return "";
}

function findLikelyTitle(text, fallback) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length >= 6 && line.length <= 90);

  const priority = lines.find((line) => /support|help desk|desktop|technician|analyst|engineer|specialist|administrator|cyber|security|network|data center/i.test(line));
  return priority || fallback;
}

function findLikelyCompany(text, fallback) {
  const companyMatch = text.match(/(?:company|employer|organization)\s*[:\-]\s*([A-Za-z0-9&.,'\- ]{2,60})/i);
  return companyMatch ? companyMatch[1].trim() : fallback;
}

function fillField(selector, value, overwrite = false) {
  const field = document.querySelector(selector);
  if (!field || !value) return;
  if (overwrite || !field.value.trim()) field.value = value;
}

function openLinkInNewTab(url) {
  window.open(url.href, "_blank", "noopener,noreferrer");
}

async function runLinkOnlyMode() {
  const value = getUrlValue();
  const url = safeUrl(value);

  if (!url) {
    setLinkReaderStatus("Paste a full job link first, starting with https://");
    return;
  }

  const inferred = inferFromLink(url);
  fillField("#company", inferred.company);
  fillField("#job-title", inferred.guessedTitle);

  setLinkReaderStatus("Reading the job description from the link. If the site allows reading, the package will build automatically.");
  const postingText = await fetchPublicPostingText(url);

  if (postingText) {
    fillField("#company", findLikelyCompany(postingText, inferred.company), true);
    fillField("#job-title", findLikelyTitle(postingText, inferred.guessedTitle), true);
    fillField("#job-description", postingText, true);
    setLinkReaderStatus("Job description found. Building the tailored package from the link now.");

    if (typeof runApplyAssist === "function") {
      runApplyAssist();
    }
    return;
  }

  openLinkInNewTab(url);
  setLinkReaderStatus("This job board blocked automatic reading. The posting opened in a new tab. Copy the description back here and click Build package only.");
}

if (linkOnlyButton) {
  linkOnlyButton.addEventListener("click", runLinkOnlyMode);}
}
