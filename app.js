const profile = {
  name: "Quenton Dillings",
  targetRoles: [
    "Help Desk Technician",
    "IT Support Specialist",
    "Desktop Support Technician",
    "Technical Support Specialist",
    "Junior SOC Analyst"
  ],
  strengths: [
    "CompTIA A+ certified",
    "Google IT Support and Google Cybersecurity training",
    "customer-facing support experience",
    "access control and incident documentation",
    "hardware/software troubleshooting",
    "networking, Linux, and Packet Tracer labs",
    "clear communication with non-technical users"
  ],
  metrics: [
    "supported 100+ employees, visitors, and staff members in daily operations",
    "resolved 15+ access or user support issues weekly",
    "assisted 60+ customers daily in a fast-paced environment",
    "documented incidents, escalations, and support details with accuracy"
  ]
};

const keywordBank = [
  "Active Directory",
  "Azure AD",
  "Microsoft 365",
  "Windows 10",
  "Windows 11",
  "macOS",
  "Linux",
  "ticketing",
  "ServiceNow",
  "Zendesk",
  "hardware",
  "software",
  "VPN",
  "DNS",
  "DHCP",
  "TCP/IP",
  "LAN",
  "WAN",
  "troubleshooting",
  "desktop support",
  "help desk",
  "endpoint",
  "imaging",
  "documentation",
  "customer service",
  "incident response",
  "access control",
  "permissions",
  "MFA",
  "CrowdStrike",
  "SIEM",
  "security",
  "vulnerability",
  "remote support"
];

const form = document.querySelector("#career-form");
const output = document.querySelector("#output");
const outputTitle = document.querySelector("#output-title");
const saveJobButton = document.querySelector("#save-job");
const clearButton = document.querySelector("#clear-form");
const copyButton = document.querySelector("#copy-output");
const savedJobs = document.querySelector("#saved-jobs");

function getFormData() {
  return {
    jobTitle: document.querySelector("#job-title").value.trim(),
    company: document.querySelector("#company").value.trim(),
    jobDescription: document.querySelector("#job-description").value.trim(),
    notes: document.querySelector("#notes").value.trim()
  };
}

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9+#.\s-]/gi, " ");
}

function extractKeywords(jobDescription) {
  const normalized = normalizeText(jobDescription);
  const matches = keywordBank.filter((keyword) => normalized.includes(keyword.toLowerCase()));
  return [...new Set(matches)].slice(0, 18);
}

function getRoleFocus(jobTitle, jobDescription) {
  const text = `${jobTitle} ${jobDescription}`.toLowerCase();

  if (text.includes("soc") || text.includes("security") || text.includes("incident response")) {
    return "security operations, incident documentation, endpoint awareness, user support, and cybersecurity fundamentals";
  }

  if (text.includes("desktop") || text.includes("hardware") || text.includes("endpoint")) {
    return "desktop support, endpoint troubleshooting, hardware/software support, imaging, documentation, and customer service";
  }

  if (text.includes("network") || text.includes("vpn") || text.includes("dns") || text.includes("dhcp")) {
    return "network troubleshooting, VPN support, TCP/IP basics, DNS/DHCP understanding, documentation, and user communication";
  }

  return "help desk support, troubleshooting, ticket documentation, customer service, and technical communication";
}

function buildElevatorPitch(data, keywords) {
  const role = data.jobTitle || "this IT support role";
  const company = data.company || "your team";

  return `I’m ${profile.name}, an IT support and cybersecurity-focused candidate with CompTIA A+, Google IT Support, and Google Cybersecurity training. I bring customer-facing support experience, hands-on troubleshooting practice, and strong documentation habits. For ${company}'s ${role}, I can help users resolve issues faster, communicate clearly with non-technical staff, and support secure, reliable day-to-day operations${keywords.length ? ` across tools and concepts like ${keywords.slice(0, 6).join(", ")}` : ""}.`;
}

function buildResumeBullets(data, focus, keywords) {
  const keywordLine = keywords.length ? keywords.slice(0, 8).join(", ") : "ticketing, troubleshooting, documentation, user support, hardware/software support";

  return [
    `Delivered customer-facing technical support by diagnosing user issues, documenting details clearly, and escalating problems when needed across ${focus}.`,
    `Supported daily operations for 100+ employees, visitors, and staff while resolving access, authorization, and user-support concerns with professionalism.`,
    `Resolved 15+ access and support-related issues weekly while maintaining accurate incident notes, communication logs, and follow-up details.`,
    `Applied hands-on IT lab experience with networking, Linux, security fundamentals, and endpoint troubleshooting to strengthen readiness for ${data.jobTitle || "IT support"} responsibilities.`,
    `Matched job requirements involving ${keywordLine} with a strong customer service background and a growing technical support skill set.`
  ];
}

function buildCoverLetter(data, focus, keywords) {
  const company = data.company || "your organization";
  const jobTitle = data.jobTitle || "the IT support position";
  const keywordSentence = keywords.length
    ? `The posting stood out because it emphasizes ${keywords.slice(0, 6).join(", ")}, which matches the type of technical foundation I have been building.`
    : "The posting stood out because it values troubleshooting, communication, documentation, and reliable support.";

  return `Dear Hiring Manager,

I’m excited to apply for the ${jobTitle} role at ${company}. My background combines customer-facing support, CompTIA A+ knowledge, Google IT Support and Cybersecurity training, and hands-on practice with troubleshooting, networking, Linux, and documentation. ${keywordSentence}

In my current and previous roles, I have supported fast-paced operations, helped people resolve problems clearly, documented incidents, and stayed calm when issues needed quick attention. I understand that strong IT support is not only about technical knowledge. It is also about listening, explaining things clearly, following process, and making users feel supported.

I would bring a dependable work ethic, strong communication, and a growth mindset to ${company}. I am ready to contribute to user support, troubleshooting, ticket documentation, access-related support, and secure day-to-day operations.

Sincerely,
${profile.name}`;
}

function buildInterviewAnswers(data, focus) {
  const role = data.jobTitle || "this role";

  return `Tell me about yourself:
I’m ${profile.name}, and I’m focused on building a career in IT support and cybersecurity. I have CompTIA A+, Google IT Support, and Google Cybersecurity training, plus customer-facing experience where I’ve supported daily operations, solved user issues, documented incidents, and communicated with people clearly. I’m interested in ${role} because it connects my technical foundation with my strength in helping people solve problems.

Why should we hire you?
You should hire me because I bring the right mix of customer service, troubleshooting mindset, documentation habits, and technical growth. I’ve supported fast-paced environments, handled access-related issues, and built IT skills through labs and certifications. I’m dependable, coachable, and ready to contribute while continuing to grow.

STAR answer for handling a difficult user:
Situation: A user or visitor needed help with an access or support issue during a busy operation.
Task: I needed to resolve the issue professionally while keeping the process secure and documented.
Action: I listened to the problem, verified the details, followed the correct procedure, communicated clearly, and escalated when needed.
Result: The issue was handled without disrupting operations, and the details were documented for accountability and follow-up.`;
}

function buildAtsChecklist(keywords) {
  const base = [
    "Troubleshooting",
    "Ticket documentation",
    "Customer service",
    "Hardware/software support",
    "Windows support",
    "Networking fundamentals",
    "Access control",
    "Incident documentation"
  ];

  const merged = [...new Set([...keywords, ...base])];
  return merged.map((keyword) => `- ${keyword}`).join("\n");
}

function buildStudyPlan(data) {
  const text = `${data.jobTitle} ${data.jobDescription}`.toLowerCase();

  if (text.includes("security") || text.includes("soc")) {
    return [
      "Review Security+ domains: threats, architecture, operations, governance, and incident response.",
      "Practice SIEM alert triage: identify source, destination, event type, user, timeline, and severity.",
      "Build a mini incident report from a sample phishing or malware alert.",
      "Add CrowdStrike, MFA, access control, and endpoint security language to your resume where honest."
    ];
  }

  if (text.includes("desktop") || text.includes("help desk") || text.includes("support")) {
    return [
      "Practice Windows troubleshooting: user profiles, printers, display, updates, drivers, and permissions.",
      "Review Microsoft 365 basics: password reset, MFA, Outlook, OneDrive, Teams, and user support.",
      "Write 3 ticket examples using issue, troubleshooting steps, resolution, and escalation notes.",
      "Practice explaining technical fixes in simple language for non-technical users."
    ];
  }

  return [
    "Review the job description and pull out 8 to 12 repeated keywords.",
    "Match each requirement to one resume bullet, project, certification, or customer support example.",
    "Prepare one STAR story for troubleshooting, one for teamwork, and one for handling pressure.",
    "Create a short follow-up message after applying or interviewing."
  ];
}

function generateOutput(data) {
  const keywords = extractKeywords(data.jobDescription);
  const focus = getRoleFocus(data.jobTitle, data.jobDescription);
  const bullets = buildResumeBullets(data, focus, keywords).map((bullet) => `- ${bullet}`).join("\n");
  const studyPlan = buildStudyPlan(data).map((item) => `- ${item}`).join("\n");

  return `SPRINGTECH CAREER ASSISTANT
${data.company || "Company"} | ${data.jobTitle || "Target role"}

1) RECRUITER-READY PITCH
${buildElevatorPitch(data, keywords)}

2) BEST ATS KEYWORDS TO USE
${buildAtsChecklist(keywords)}

3) RESUME BULLET IDEAS
${bullets}

4) COVER LETTER DRAFT
${buildCoverLetter(data, focus, keywords)}

5) INTERVIEW ANSWERS
${buildInterviewAnswers(data, focus)}

6) STUDY PLAN BEFORE APPLYING / INTERVIEWING
${studyPlan}

7) QUICK FOLLOW-UP MESSAGE
Hello, I recently applied for the ${data.jobTitle || "open IT role"} position${data.company ? ` at ${data.company}` : ""}. I’m very interested in the opportunity and believe my customer support background, CompTIA A+ knowledge, IT support training, and troubleshooting mindset would allow me to be a strong asset to the team. Thank you for your time and consideration.`;
}

function setOutput(text, title = "Generated career package") {
  output.classList.remove("empty");
  output.textContent = text;
  outputTitle.textContent = title;
}

function readSavedJobs() {
  return JSON.parse(localStorage.getItem("springtechSavedJobs") || "[]");
}

function writeSavedJobs(jobs) {
  localStorage.setItem("springtechSavedJobs", JSON.stringify(jobs));
}

function renderSavedJobs() {
  const jobs = readSavedJobs();

  if (!jobs.length) {
    savedJobs.innerHTML = `<div class="panel step-card"><p>No saved jobs yet. Paste a job post and click Save job.</p></div>`;
    return;
  }

  savedJobs.innerHTML = jobs
    .map(
      (job, index) => `
      <article class="saved-job">
        <div>
          <strong>${job.jobTitle || "Untitled role"}</strong>
          <p>${job.company || "No company added"} • Saved ${job.date}</p>
        </div>
        <button class="button ghost small" data-delete-job="${index}" type="button">Remove</button>
      </article>`
    )
    .join("");

  document.querySelectorAll("[data-delete-job]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.deleteJob);
      const nextJobs = readSavedJobs().filter((_, jobIndex) => jobIndex !== index);
      writeSavedJobs(nextJobs);
      renderSavedJobs();
    });
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = getFormData();

  if (!data.jobDescription && !data.jobTitle) {
    setOutput("Add at least a job title or job description first.", "Add job details");
    return;
  }

  setOutput(generateOutput(data));
});

saveJobButton.addEventListener("click", () => {
  const data = getFormData();

  if (!data.jobTitle && !data.company && !data.jobDescription) {
    setOutput("Add a job title, company, or job description before saving.", "Nothing to save yet");
    return;
  }

  const jobs = readSavedJobs();
  jobs.unshift({
    jobTitle: data.jobTitle,
    company: data.company,
    jobDescription: data.jobDescription,
    date: new Date().toLocaleDateString()
  });

  writeSavedJobs(jobs.slice(0, 12));
  renderSavedJobs();
  setOutput("Job saved to your browser tracker.", "Saved");
});

clearButton.addEventListener("click", () => {
  form.reset();
  output.classList.add("empty");
  output.textContent = "Paste a job description and click Generate. Your tailored application notes will appear here.";
  outputTitle.textContent = "Ready when you are";
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(output.textContent);
    copyButton.textContent = "Copied";
    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1200);
  } catch (error) {
    setOutput("Copy failed. Select the generated text manually and copy it.", "Copy unavailable");
  }
});

renderSavedJobs();
