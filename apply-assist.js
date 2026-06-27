const assistButton = document.querySelector("#apply-assist");
const openApplyButton = document.querySelector("#open-apply");
const assistStatus = document.querySelector("#assist-status");
const jobUrlInput = document.querySelector("#job-url");

function getApplyAssistData() {
  return {
    jobTitle: document.querySelector("#job-title")?.value.trim() || "",
    company: document.querySelector("#company")?.value.trim() || "",
    jobUrl: jobUrlInput?.value.trim() || "",
    jobDescription: document.querySelector("#job-description")?.value.trim() || "",
    notes: document.querySelector("#notes")?.value.trim() || ""
  };
}

function setApplyAssistStatus(message) {
  if (assistStatus) assistStatus.textContent = message;
}

function isWebLink(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function saveApplyAssistJob(status) {
  const data = getApplyAssistData();
  const savedJobs = JSON.parse(localStorage.getItem("springtechSavedJobs") || "[]");

  savedJobs.unshift({
    jobTitle: data.jobTitle,
    company: data.company,
    jobDescription: data.jobDescription,
    notes: data.notes,
    jobUrl: data.jobUrl,
    status,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem("springtechSavedJobs", JSON.stringify(savedJobs.slice(0, 20)));
}

function buildPackage() {
  const form = document.querySelector("#career-form");
  if (!form) return;
  form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
}

function downloadGeneratedPackage() {
  const downloadButton = document.querySelector("#download-output");
  if (downloadButton) downloadButton.click();
}

function openApplyPage() {
  const data = getApplyAssistData();

  if (!data.jobUrl) {
    setApplyAssistStatus("Add the apply link first.");
    return;
  }

  if (!isWebLink(data.jobUrl)) {
    setApplyAssistStatus("Use a full apply link that starts with https://");
    return;
  }

  window.open(data.jobUrl, "_blank", "noopener,noreferrer");
  setApplyAssistStatus("Apply page opened. Use the generated package to complete the application accurately.");
}

function runApplyAssist() {
  const data = getApplyAssistData();

  if (!data.jobTitle && !data.jobDescription) {
    setApplyAssistStatus("Add a job title or paste the job description first.");
    return;
  }

  buildPackage();
  saveApplyAssistJob("Package ready");

  setTimeout(() => {
    downloadGeneratedPackage();
    if (data.jobUrl) openApplyPage();
    setApplyAssistStatus("Package built, downloaded, and saved. Review the application before you send it.");
  }, 250);
}

if (assistButton) assistButton.addEventListener("click", runApplyAssist);
if (openApplyButton) openApplyButton.addEventListener("click", openApplyPage);

const saveJobButton = document.querySelector("#save-job");
if (saveJobButton) {
  saveJobButton.addEventListener("click", () => {
    setTimeout(() => {
      const data = getApplyAssistData();
      const savedJobs = JSON.parse(localStorage.getItem("springtechSavedJobs") || "[]");
      if (savedJobs.length) {
        savedJobs[0].jobUrl = data.jobUrl;
        savedJobs[0].status = savedJobs[0].status || "Saved";
        localStorage.setItem("springtechSavedJobs", JSON.stringify(savedJobs));
      }
      setApplyAssistStatus("Saved to tracker.");
    }, 100);
  });
}

document.addEventListener("click", (event) => {
  const loadButton = event.target.closest("[data-load-job]");
  if (!loadButton) return;

  setTimeout(() => {
    const index = Number(loadButton.dataset.loadJob);
    const savedJobs = JSON.parse(localStorage.getItem("springtechSavedJobs") || "[]");
    const job = savedJobs[index];
    if (jobUrlInput && job) jobUrlInput.value = job.jobUrl || "";
  }, 50);
});
