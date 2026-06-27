const profile = {
  name: "Quenton Dillings",
  location: "Houston, TX",
  linkedin: "https://www.linkedin.com/in/quenton-dillings",
  headline: "IT Support Specialist | Help Desk | Desktop Support | Cybersecurity Foundations",
  targetRoles: [
    "Help Desk Technician",
    "IT Support Specialist",
    "Desktop Support Technician",
    "Technical Support Specialist",
    "Junior SOC Analyst",
    "Network Support Technician",
    "Data Center Technician",
    "Field IT Technician"
  ],
  certifications: [
    "CompTIA A+",
    "CompTIA Tech+",
    "Google IT Support Professional Certificate",
    "Google Cybersecurity Certificate",
    "Google Foundations of Cybersecurity",
    "Google Bits and Bytes of Computer Networking",
    "CompTIA Security+ in progress"
  ],
  education: [
    "Lone Star College — Cybersecurity degree program, Expected May 2027",
    "NPower — IT and Professional Development training"
  ],
  strengths: [
    "customer-facing technical support",
    "hardware and software troubleshooting",
    "Windows, Linux, and endpoint support fundamentals",
    "networking fundamentals: DHCP, DNS, TCP/IP, VPN, VLANs",
    "access control, incident documentation, and escalation",
    "technical communication with non-technical users",
    "cybersecurity foundations, SIEM concepts, MFA, and endpoint security awareness",
    "hands-on labs with Cisco Packet Tracer, Linux VMs, and automation projects"
  ],
  experience: [
    {
      company: "Admiral Security",
      role: "Security Officer",
      dates: "2024 – Present",
      location: "Houston, TX",
      bullets: [
        "Support secure daily operations for 100+ employees, visitors, vendors, and staff by verifying access, resolving entry concerns, and maintaining a professional customer-facing presence.",
        "Resolve 15+ access, authorization, and user-support issues weekly while documenting incidents, communicating clearly, and escalating concerns when appropriate.",
        "Apply troubleshooting, attention to detail, and policy-following skills to identify problems, verify information, and support safe, reliable operations.",
        "Communicate with leadership, team members, and non-technical users to keep daily operations organized and reduce confusion during support or access-related issues."
      ]
    },
    {
      company: "Academy Sports + Outdoors",
      role: "Sales Associate",
      dates: "2021 – 2024",
      location: "Houston, TX",
      bullets: [
        "Assisted 60+ customers daily in a fast-paced environment by listening to needs, explaining options clearly, and resolving questions with professionalism.",
        "Supported inventory accuracy, front-end workflows, and team coordination while maintaining strong service quality during high-volume shifts.",
        "Built communication, patience, and problem-solving skills that transfer directly into help desk, desktop support, and technical support roles."
      ]
    }
  ],
  projects: [
    {
      name: "SpringTech Career Assistant",
      tags: ["automation", "career", "front-end", "JavaScript"],
      bullets: [
        "Built a browser-based career assistant that converts IT job descriptions into ATS keywords, resume drafts, cover letters, recruiter messages, and interview prep.",
        "Implemented a static HTML, CSS, and JavaScript application with localStorage job tracking and downloadable text output.",
        "Designed the project as a live portfolio tool to demonstrate practical automation, technical writing, and front-end development skills."
      ]
    },
    {
      name: "SpringBot / Spring Virtual Office",
      tags: ["automation", "AI", "Python", "FastAPI", "Discord"],
      bullets: [
        "Developed automation-focused assistant projects with command workflows, user interaction features, and support-style responses.",
        "Practiced API structure, route design, prompt logic, and deployment concepts using Python/FastAPI and browser-based interfaces.",
        "Used the project to demonstrate problem-solving, automation thinking, documentation, and technical support workflow design."
      ]
    },
    {
      name: "Cisco Packet Tracer Networking Labs",
      tags: ["network", "DHCP", "DNS", "VLAN", "routing"],
      bullets: [
        "Configured practice networks using DHCP, DNS, IP addressing, wireless security, routing concepts, VLANs, and SOHO-style network layouts.",
        "Built troubleshooting confidence around connectivity, addressing, segmentation, and basic network service behavior.",
        "Documented network configurations and practiced explaining technical issues in clear, support-friendly language."
      ]
    },
    {
      name: "Linux and Virtualization Lab",
      tags: ["Linux", "virtualization", "Kali", "Oracle VM", "security"],
      bullets: [
        "Built hands-on Linux lab environments using virtualization to practice command-line navigation, system configuration, and troubleshooting.",
        "Practiced cybersecurity fundamentals through safe lab-based exploration of tools, permissions, logs, and network behavior.",
        "Strengthened readiness for support roles that require comfort with operating systems, troubleshooting steps, and technical documentation."
      ]
    },
    {
      name: "Endpoint Hardware Troubleshooting",
      tags: ["desktop", "hardware", "endpoint", "support"],
      bullets: [
        "Built and upgraded desktop hardware components, including GPU, storage, memory, and power supply planning.",
        "Applied troubleshooting habits around drivers, display settings, storage, performance, compatibility, and user-facing hardware issues.",
        "Connected hands-on personal hardware experience to desktop support, endpoint support, and field technician responsibilities."
      ]
    }
  ]
};

const keywordBank = [
  "Active Directory",
  "Azure AD",
  "Entra ID",
  "Microsoft 365",
  "Office 365",
  "Windows 10",
  "Windows 11",
  "macOS",
  "Linux",
  "Kali Linux",
  "ticketing",
  "ServiceNow",
  "Zendesk",
  "Jira",
  "hardware",
  "software",
  "VPN",
  "DNS",
  "DHCP",
  "TCP/IP",
  "LAN",
  "WAN",
  "Wi-Fi",
  "troubleshooting",
  "desktop support",
  "help desk",
  "technical support",
  "endpoint",
  "endpoint support",
  "imaging",
  "documentation",
  "customer service",
  "incident response",
  "incident management",
  "access control",
  "permissions",
  "MFA",
  "SSO",
  "CrowdStrike",
  "Falcon",
  "SIEM",
  "SOC",
  "security",
  "cybersecurity",
  "vulnerability",
  "remote support",
  "SLA",
  "escalation",
  "printer",
  "mobile device",
  "asset management",
  "inventory",
  "deployment",
  "data center",
  "racking",
  "cabling",
  "cloud",
  "AWS",
  "Azure",
  "identity",
  "IAM",
  "NIST",
  "CMMC",
  "compliance",
  "SQL",
  "server",
  "networking"
];

const roleProfiles = {
  security: {
    label: "Cybersecurity / SOC Support",
    title: "Junior SOC Analyst | IT Support | Cybersecurity Foundations",
    focus: "security operations, incident documentation, endpoint security awareness, access control, MFA, SIEM concepts, and user support",
    skills: ["SIEM concepts", "CrowdStrike/Falcon awareness", "MFA", "incident response", "access control", "documentation", "Linux", "networking fundamentals"],
    projectTags: ["security", "Linux", "network", "automation"]
  },
  desktop: {
    label: "Desktop / Endpoint Support",
    title: "Desktop Support Technician | IT Support Specialist | Endpoint Support",
    focus: "desktop support, endpoint troubleshooting, hardware/software support, Windows support, documentation, and customer service",
    skills: ["Windows support", "hardware troubleshooting", "software troubleshooting", "ticket documentation", "endpoint support", "customer service", "access support", "escalation"],
    projectTags: ["desktop", "hardware", "endpoint", "automation"]
  },
  network: {
    label: "Network Support",
    title: "Network Support Technician | IT Support Specialist | Help Desk",
    focus: "network troubleshooting, DHCP, DNS, TCP/IP, VPN support, wireless basics, documentation, and user communication",
    skills: ["DHCP", "DNS", "TCP/IP", "VPN", "LAN/WAN", "Wi-Fi", "Packet Tracer", "documentation", "troubleshooting"],
    projectTags: ["network", "DHCP", "DNS", "VLAN", "routing"]
  },
  cloud: {
    label: "Cloud / Identity Support",
    title: "Cloud Support | IT Support Specialist | Identity & Access Support",
    focus: "identity support, access management, cloud fundamentals, Microsoft 365, MFA, documentation, and troubleshooting",
    skills: ["Microsoft 365", "Azure/Entra ID awareness", "MFA", "identity support", "permissions", "documentation", "customer support", "troubleshooting"],
    projectTags: ["automation", "security", "front-end", "AI"]
  },
  dataCenter: {
    label: "Data Center / Field IT",
    title: "Data Center Technician | Field IT Technician | IT Support",
    focus: "hardware support, cabling awareness, documentation, physical troubleshooting, inventory, reliability, and operational discipline",
    skills: ["hardware support", "asset tracking", "documentation", "networking fundamentals", "troubleshooting", "inventory", "safety", "escalation"],
    projectTags: ["hardware", "network", "endpoint", "Linux"]
  },
  implementation: {
    label: "Technical Implementation / Support",
    title: "Technical Support Specialist | Implementation Support | IT Support",
    focus: "customer-facing technical support, requirements gathering, documentation, troubleshooting, implementation support, and clear communication",
    skills: ["requirements gathering", "documentation", "customer support", "troubleshooting", "workflow support", "technical writing", "escalation", "training users"],
    projectTags: ["automation", "front-end", "career", "AI"]
  },
  general: {
    label: "General IT Support",
    title: "IT Support Specialist | Help Desk Technician | Technical Support",
    focus: "help desk support, troubleshooting, ticket documentation, customer service, endpoint support, and technical communication",
    skills: ["troubleshooting", "ticket documentation", "customer service", "hardware/software support", "Windows support", "networking fundamentals", "access control", "incident documentation"],
    projectTags: ["automation", "network", "desktop", "Linux"]
  }
};

const form = document.querySelector("#career-form");
const output = document.querySelector("#output");
const outputTitle = document.querySelector("#output-title");
const saveJobButton = document.querySelector("#save-job");
const clearButton = document.querySelector("#clear-form");
const copyButton = document.querySelector("#copy-output");
const downloadButton = document.querySelector("#download-output");
const savedJobs = document.querySelector("#saved-jobs");
let currentOutputText = "";

function getFormData() {
  return {
    jobTitle: document.querySelector("#job-title").value.trim(),
    company: document.querySelector("#company").value.trim(),
    jobDescription: document.querySelector("#job-description").value.trim(),
    notes: document.querySelector("#notes").value.trim(),
    jobUrl: (document.querySelector("#job-url")?.value || "").trim()
  };
}

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9+#.\s/-]/gi, " ");
}

function extractKeywords(jobDescription) {
  const normalized = normalizeText(jobDescription);
  const matches = keywordBank.filter((keyword) => normalized.includes(keyword.toLowerCase()));

  const repeatedWords = normalized
    .split(/\s+/)
    .filter((word) => word.length > 4)
    .filter((word) => !["about", "their", "there", "where", "which", "would", "could", "should", "using", "with", "from", "this", "that", "will", "have", "your", "role", "work", "team", "support"].includes(word));

  const counts = repeatedWords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  const repeatedKeywords = Object.entries(counts)
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([word]) => word.replace(/\b\w/g, (letter) => letter.toUpperCase()));

  return [...new Set([...matches, ...repeatedKeywords])].slice(0, 24);
}

function detectRoleType(jobTitle, jobDescription) {
  const title = (jobTitle || "").toLowerCase();
  const text = `${jobTitle} ${jobDescription}`.toLowerCase();

  // Title is the strongest signal — check specific roles before the generic
  // "support technician/specialist" catch-all, since those phrases overlap.
  if (/soc analyst|security analyst|cyber|incident response/.test(title)) return "security";
  if (/network/.test(title)) return "network";
  if (/data center|datacenter/.test(title)) return "dataCenter";
  if (/desktop support|field (it|service|technician)|deskside/.test(title)) return "desktop";
  if (/help desk|service desk|technical support|it support|support technician|support specialist/.test(title)) {
    return "general";
  }

  // Fall back to description, but require *genuine* security focus, not a
  // single "Security+ preferred" mention, before classifying as SOC.
  const securityHits = (text.match(/\bsoc\b|siem|crowdstrike|falcon|incident response|threat|vulnerability management|security operations|nist|cmmc/g) || []).length;
  if (securityHits >= 2) return "security";

  if (/desktop|endpoint|hardware|printer|imaging|field technician/.test(text)) return "desktop";
  if (/network|vpn|dns|dhcp|tcp\/ip|\blan\b|\bwan\b|vlan|router|switch|wireless/.test(text)) return "network";
  if (/data center|datacenter|rack|cabling|server room|infrastructure technician/.test(text)) return "dataCenter";
  if (/\bcloud\b|azure|aws|entra|identity|\biam\b/.test(text)) return "cloud";
  if (/implementation|onboarding|requirements gathering|configure|deployment|training users/.test(text)) return "implementation";

  return "general";
}

function getRoleProfile(data) {
  return roleProfiles[detectRoleType(data.jobTitle, data.jobDescription)] || roleProfiles.general;
}

function formatList(items, prefix = "- ") {
  return items.map((item) => `${prefix}${item}`).join("\n");
}

function getMatchedProfileStrengths(keywords, roleProfile) {
  const keywordText = keywords.join(" ").toLowerCase();
  const strengthMatches = profile.strengths.filter((strength) => {
    const words = strength.toLowerCase().split(/\W+/).filter((word) => word.length > 4);
    return words.some((word) => keywordText.includes(word));
  });

  return [...new Set([...strengthMatches, ...roleProfile.skills])].slice(0, 12);
}

function chooseProjects(roleProfile) {
  const selected = profile.projects.filter((project) => project.tags.some((tag) => roleProfile.projectTags.includes(tag)));
  return selected.length ? selected.slice(0, 3) : profile.projects.slice(0, 3);
}

function calculateFitScore(keywords, roleProfile) {
  const allProfileTerms = [...profile.strengths, ...profile.certifications, ...roleProfile.skills, ...profile.projects.flatMap((project) => project.tags)].join(" ").toLowerCase();
  const matches = keywords.filter((keyword) => allProfileTerms.includes(keyword.toLowerCase().split(" ")[0]));
  const gaps = getSkillGaps(keywords, allProfileTerms);

  // Score on the *ratio* of matched keywords, not a flat per-match bonus, so
  // a strong-fit posting and a weak-fit posting actually separate.
  const total = keywords.length || 1;
  const ratio = matches.length / total; // 0..1
  // Floor of 40 (you always bring transferable support skills), ceiling 96.
  let score = Math.round(40 + ratio * 56);
  if (keywords.length < 4) score = Math.min(score, 70); // thin posting = low confidence
  score = Math.max(40, Math.min(96, score));

  return {
    score,
    matches: [...new Set(matches)].slice(0, 10),
    gaps
  };
}

function getSkillGaps(keywords, profileTerms) {
  const gaps = keywords.filter((keyword) => !profileTerms.includes(keyword.toLowerCase().split(" ")[0]));
  return [...new Set(gaps)].slice(0, 6);
}

function buildProfessionalSummary(data, roleProfile, keywords) {
  const role = data.jobTitle || roleProfile.title;
  const topKeywords = keywords.length ? keywords.slice(0, 6).join(", ") : roleProfile.skills.slice(0, 6).join(", ");

  return `IT support and cybersecurity-focused professional targeting ${role} opportunities. Background includes customer-facing support, access control, incident documentation, troubleshooting, and hands-on technical labs across Windows/Linux, networking, endpoint support, and security fundamentals. Certified in CompTIA A+, CompTIA Tech+, Google IT Support, and Google Cybersecurity, with practical experience supporting 100+ daily occupants/users and resolving 15+ weekly access or support-related issues. Prepared to support ${roleProfile.focus}, with strengths aligned to ${topKeywords}.`;
}

function buildElevatorPitch(data, roleProfile, keywords) {
  const role = data.jobTitle || roleProfile.title;
  const company = data.company || "your team";
  const keywordLine = keywords.length ? ` I noticed the role emphasizes ${keywords.slice(0, 6).join(", ")}, which lines up with my support background and hands-on labs.` : "";

  return `I’m ${profile.name}, an IT support and cybersecurity-focused candidate with CompTIA A+, Google IT Support, Google Cybersecurity, and hands-on lab experience in networking, Linux, endpoint support, and automation. I’ve supported fast-paced operations, documented incidents, resolved access/support issues, and communicated clearly with non-technical users. For ${company}'s ${role}, I can bring dependable troubleshooting, strong customer service, and a growth mindset around ${roleProfile.focus}.${keywordLine}`;
}

function buildSkillsSection(roleProfile, keywords) {
  const matched = [...new Set([...keywords.slice(0, 12), ...roleProfile.skills, ...profile.strengths.slice(0, 6)])].slice(0, 24);
  return matched.join(" | ");
}

function buildExperienceSection(roleProfile, keywords) {
  const keywordLine = keywords.length ? keywords.slice(0, 8).join(", ") : roleProfile.skills.slice(0, 8).join(", ");

  return profile.experience.map((job) => {
    const tailoredOpening = job.company === "Admiral Security"
      ? `- Translated security operations experience into IT support value by supporting users, verifying access, documenting incidents, escalating issues, and maintaining reliable daily operations aligned with ${roleProfile.focus}.`
      : `- Applied customer service, problem-solving, communication, and fast-paced support skills that transfer directly to ${roleProfile.label.toLowerCase()} environments.`;

    const tailoredKeywordBullet = `- Connected experience to job requirements involving ${keywordLine} through clear communication, documentation, troubleshooting mindset, and user-focused support.`;

    return `${job.role} — ${job.company} | ${job.location} | ${job.dates}\n${tailoredOpening}\n${formatList(job.bullets)}\n${tailoredKeywordBullet}`;
  }).join("\n\n");
}

function buildProjectsSection(roleProfile) {
  return chooseProjects(roleProfile).map((project) => {
    return `${project.name}\n${formatList(project.bullets)}`;
  }).join("\n\n");
}

function buildResumeDraft(data, roleProfile, keywords) {
  const title = data.jobTitle || roleProfile.title;

  return `${profile.name}\n${profile.location} | ${profile.linkedin} | Add phone/email before submitting\n${title}\n\nPROFESSIONAL SUMMARY\n${buildProfessionalSummary(data, roleProfile, keywords)}\n\nTECHNICAL SKILLS\n${buildSkillsSection(roleProfile, keywords)}\n\nCERTIFICATIONS\n${formatList(profile.certifications)}\n\nEDUCATION\n${formatList(profile.education)}\n\nPROFESSIONAL EXPERIENCE\n${buildExperienceSection(roleProfile, keywords)}\n\nPROJECTS\n${buildProjectsSection(roleProfile)}\n\nATS KEYWORDS TO MIRROR FROM THE JOB POST\n${formatList(keywords.length ? keywords : roleProfile.skills)}`;
}

function buildCoverLetter(data, roleProfile, keywords) {
  const company = data.company || "your organization";
  const jobTitle = data.jobTitle || roleProfile.title;
  const keywordSentence = keywords.length
    ? `The posting stood out because it emphasizes ${keywords.slice(0, 7).join(", ")}, which connects well with my support background, certifications, and hands-on labs.`
    : `The posting stood out because it values ${roleProfile.focus}.`;

  return `Dear Hiring Manager,\n\nI’m excited to apply for the ${jobTitle} role at ${company}. My background combines customer-facing support, CompTIA A+, Google IT Support, Google Cybersecurity, hands-on networking/Linux practice, endpoint troubleshooting, and strong documentation habits. ${keywordSentence}\n\nIn my current role, I support daily operations for 100+ employees, visitors, vendors, and staff while resolving access and support-related issues, documenting incidents, and communicating clearly with non-technical users. I also bring customer service experience from Academy Sports + Outdoors, where I assisted 60+ customers daily in a fast-paced environment.\n\nWhat makes me a strong fit is my ability to stay calm, follow process, document clearly, and keep learning technical skills that directly support IT operations. I am ready to contribute to ${roleProfile.focus} while continuing to grow with the team.\n\nThank you for your time and consideration. I would appreciate the opportunity to discuss how my support experience, certifications, and hands-on projects can benefit ${company}.\n\nSincerely,\n${profile.name}`;
}

function buildRecruiterMessage(data, roleProfile) {
  const companyPhrase = data.company ? ` at ${data.company}` : "";
  const role = data.jobTitle || roleProfile.title;

  return `Hello, I recently came across the ${role} opportunity${companyPhrase} and wanted to reach out directly. I’m building my career in IT support and cybersecurity, with CompTIA A+, Google IT Support, Google Cybersecurity, customer-facing support experience, and hands-on labs in networking, Linux, endpoints, and automation. I believe my troubleshooting mindset, documentation habits, and ability to communicate clearly with users would make me a strong asset to the team. Thank you for your time, and I’d be grateful for the opportunity to be considered.`;
}

function buildLinkedInPost(data, roleProfile) {
  const role = data.jobTitle || roleProfile.title;

  return `I’m continuing to build hands-on projects that connect my IT support and cybersecurity training to real career workflows.\n\nMy SpringTech Career Assistant helps turn job descriptions into ATS keywords, resume drafts, cover letters, recruiter messages, interview prep, and study plans for roles like ${role}.\n\nThis project reflects my interest in technical support, troubleshooting, automation, documentation, and helping users solve problems more efficiently.\n\n${profile.linkedin}`;
}

function buildInterviewAnswers(data, roleProfile) {
  const role = data.jobTitle || roleProfile.title;

  return `Tell me about yourself:\nI’m ${profile.name}, and I’m focused on building a career in IT support and cybersecurity. I have CompTIA A+, Google IT Support, Google Cybersecurity, and hands-on practice with networking, Linux, endpoints, Packet Tracer, and automation projects. My background includes customer-facing support, access control, incident documentation, and helping people solve problems clearly and professionally. I’m interested in ${role} because it connects my technical foundation with my strength in supporting users and keeping operations reliable.\n\nWhy should we hire you?\nYou should hire me because I bring the right mix of customer service, troubleshooting mindset, documentation habits, and technical growth. I’ve supported 100+ daily employees, visitors, vendors, and staff, resolved 15+ weekly access/support issues, and assisted 60+ customers daily in a fast-paced environment. I’m dependable, coachable, and ready to contribute to ${roleProfile.focus}.\n\nSTAR answer — handling a difficult user or support issue:\nSituation: A user or visitor needed help with an access or support issue during a busy operation.\nTask: I needed to resolve the issue professionally while keeping the process secure, documented, and easy to understand.\nAction: I listened to the problem, verified the details, followed the correct procedure, communicated clearly, and escalated when needed.\nResult: The issue was handled without disrupting operations, and the details were documented for accountability and follow-up.\n\nQuestion to ask the interviewer:\nWhat tools, ticketing systems, or support workflows does your team use most often, and what would success look like in the first 90 days?`;
}

function buildStudyPlan(data, roleProfile) {
  const roleType = detectRoleType(data.jobTitle, data.jobDescription);

  const plans = {
    security: [
      "Review Security+ domains: threats, architecture, operations, governance, and incident response.",
      "Practice SIEM alert triage: identify source, destination, user, event type, severity, timeline, and next action.",
      "Prepare one example that connects access control, MFA, incident documentation, and escalation.",
      "Review CrowdStrike/Falcon concepts, endpoint alerts, suspicious activity, and basic incident reporting."
    ],
    desktop: [
      "Practice Windows troubleshooting: user profiles, printers, display, updates, drivers, permissions, and application issues.",
      "Review Microsoft 365 support: password reset, MFA, Outlook, OneDrive, Teams, licensing, and basic account issues.",
      "Write three ticket examples using issue, impact, troubleshooting steps, resolution, and escalation notes.",
      "Prepare a hardware troubleshooting story using your desktop upgrade and endpoint experience."
    ],
    network: [
      "Review DHCP, DNS, TCP/IP, VPN, LAN/WAN, Wi-Fi, and basic routing/switching concepts.",
      "Practice explaining Packet Tracer labs in simple language for a non-technical interviewer.",
      "Prepare a connectivity troubleshooting workflow: physical layer, IP, DNS, gateway, firewall/VPN, escalation.",
      "Review common commands: ipconfig, ping, tracert/traceroute, nslookup, netstat, and basic Linux networking commands."
    ],
    cloud: [
      "Review Microsoft 365, MFA, permissions, identity basics, Azure/Entra ID concepts, and account support workflows.",
      "Prepare an access management story from your current role that shows verification, documentation, and escalation.",
      "Review shared responsibility, least privilege, password reset, account lockout, and group/role access concepts.",
      "Practice explaining identity and access concepts without overcomplicating them."
    ],
    dataCenter: [
      "Review hardware basics: rack/stack concepts, cables, ports, power, storage, RAM, GPUs, and server room safety.",
      "Prepare a story about desktop hardware upgrades and troubleshooting steps.",
      "Review networking basics and documentation habits for inventory, tickets, escalation, and maintenance notes.",
      "Practice explaining reliability, attention to detail, physical security, and shift readiness."
    ],
    implementation: [
      "Practice gathering requirements from a non-technical user and turning them into clear next steps.",
      "Prepare a customer support story that shows patience, documentation, follow-up, and ownership.",
      "Review configuration, onboarding, training, implementation, and post-go-live support language.",
      "Create a checklist for discovery, setup, testing, user communication, and escalation."
    ],
    general: [
      "Review the job description and pull out 8–12 repeated keywords.",
      "Match each requirement to one resume bullet, project, certification, or customer support example.",
      "Prepare one STAR story for troubleshooting, one for teamwork, and one for handling pressure.",
      "Practice explaining technical fixes in simple language for non-technical users."
    ]
  };

  return plans[roleType] || plans.general;
}

function buildApplicationChecklist(data, fit) {
  const gaps = fit.gaps.length ? fit.gaps : ["No major keyword gaps found from the pasted job text."];
  const extra = data.notes ? [`Use this note in the application: ${data.notes}`] : [];

  return [
    "Review the generated resume and remove anything that does not match your real experience.",
    "Add your phone/email manually before submitting. They are not hard-coded into this public site for privacy.",
    "Mirror the strongest ATS keywords naturally in the summary, skills, and top 3 bullets.",
    "Keep the resume to one page if applying to help desk, desktop support, or technical support roles.",
    "Save the job description and the version of the resume used for that application.",
    ...extra,
    `Keyword gaps to review before applying: ${gaps.join(", ")}`
  ];
}

function buildFitSummary(data, roleProfile, keywords) {
  const fit = calculateFitScore(keywords, roleProfile);
  const matchedText = fit.matches.length ? fit.matches.join(", ") : roleProfile.skills.slice(0, 6).join(", ");
  const gapsText = fit.gaps.length ? fit.gaps.join(", ") : "No major gaps found from the pasted text";

  return {
    fit,
    text: `Estimated fit: ${fit.score}/100\nRole category: ${roleProfile.label}\nStrong matches: ${matchedText}\nPossible gaps to review: ${gapsText}`
  };
}

function generateOutput(data) {
  const keywords = extractKeywords(data.jobDescription);
  const roleProfile = getRoleProfile(data);
  const fitSummary = buildFitSummary(data, roleProfile, keywords);
  const studyPlan = buildStudyPlan(data, roleProfile);
  const checklist = buildApplicationChecklist(data, fitSummary.fit);

  return `SPRINGTECH CAREER ASSISTANT — FULL APPLICATION PACKAGE\n${data.company || "Company not entered"} | ${data.jobTitle || roleProfile.title}\n\nIMPORTANT PRIVACY NOTE\nThis public website does not hard-code your phone number or email. Add them manually before submitting a real application.\n\n1) FIT SNAPSHOT\n${fitSummary.text}\n\n2) RECRUITER-READY PITCH\n${buildElevatorPitch(data, roleProfile, keywords)}\n\n3) FULL TAILORED RESUME DRAFT\n${buildResumeDraft(data, roleProfile, keywords)}\n\n4) COVER LETTER DRAFT\n${buildCoverLetter(data, roleProfile, keywords)}\n\n5) RECRUITER / HIRING MANAGER MESSAGE\n${buildRecruiterMessage(data, roleProfile)}\n\n6) LINKEDIN PROJECT POST\n${buildLinkedInPost(data, roleProfile)}\n\n7) INTERVIEW ANSWERS\n${buildInterviewAnswers(data, roleProfile)}\n\n8) STUDY PLAN BEFORE APPLYING / INTERVIEWING\n${formatList(studyPlan)}\n\n9) APPLICATION CHECKLIST\n${formatList(checklist)}\n\n10) APPLICATION INTELLIGENCE\n${typeof buildAnalyzerReport === "function" ? buildAnalyzerReport(data) : "Analyzer module not loaded."}\n\n11) QUICK FOLLOW-UP MESSAGE\nHello, I recently applied for the ${data.jobTitle || "open IT role"} position${data.company ? ` at ${data.company}` : ""}. I’m very interested in the opportunity and believe my customer support background, CompTIA A+ knowledge, IT support training, cybersecurity foundation, and troubleshooting mindset would allow me to be a strong asset to the team. Thank you for your time and consideration.`;
}

function setOutput(text, title = "Generated career package") {
  currentOutputText = text;
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

const STATUS_OPTIONS = ["Saved", "Package Ready", "Applied", "Interviewing", "Followed Up", "Rejected", "Offer"];

function nextActionFor(job) {
  switch (job.status) {
    case "Saved": return "Build the package, then apply.";
    case "Package Ready": return "Add phone/email and submit the application.";
    case "Applied": return job.followUpDate ? `Follow up on ${job.followUpDate}.` : "Set a follow-up date (3–5 business days out).";
    case "Interviewing": return "Run the 24-hour study plan and prep STAR stories.";
    case "Followed Up": return "Wait for reply; line up the next application meanwhile.";
    case "Rejected": return "Log one lesson learned and move on.";
    case "Offer": return "Review pay, schedule, and start date before accepting.";
    default: return "Review and choose a status.";
  }
}

function fitBadgeClass(score) {
  if (score >= 80) return "fit-high";
  if (score >= 60) return "fit-mid";
  return "fit-low";
}

function updateJob(id, patch) {
  const jobs = readSavedJobs().map((j) => (String(j.id) === String(id) ? { ...j, ...patch } : j));
  writeSavedJobs(jobs);
}

function downloadText(filename, text, mime) {
  const blob = new Blob([text], { type: (mime || "text/plain") + ";charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function exportSavedJobsCsv() {
  const jobs = readSavedJobs();
  if (!jobs.length) return;
  const headers = ["Company", "Role", "Status", "Fit", "Saved", "FollowUp", "Link", "Notes"];
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const rows = jobs.map((j) => [j.company, j.jobTitle, j.status, j.fitScore, j.date, j.followUpDate, j.jobUrl, j.notes].map(esc).join(","));
  downloadText("springtech-applications.csv", [headers.join(","), ...rows].join("\n"), "text/csv");
}

function renderSavedJobs() {
  const jobs = readSavedJobs();

  if (!jobs.length) {
    savedJobs.innerHTML = `<div class="panel step-card"><p>No saved jobs yet. Paste a job post and click Save to tracker.</p></div>`;
    return;
  }

  const toolbar = `
    <div class="tracker-toolbar">
      <span>${jobs.length} saved ${jobs.length === 1 ? "job" : "jobs"}</span>
      <button class="button secondary small" id="export-csv" type="button">Export all (CSV)</button>
    </div>`;

  const cards = jobs.map((job) => {
    const id = job.id;
    const options = STATUS_OPTIONS.map((s) => `<option value="${s}" ${s === job.status ? "selected" : ""}>${s}</option>`).join("");
    const fit = typeof job.fitScore === "number" ? job.fitScore : "—";
    const safeTitle = (job.jobTitle || "Untitled role").replace(/</g, "&lt;");
    const safeCompany = (job.company || "No company").replace(/</g, "&lt;");
    const safeNotes = (job.notes || "").replace(/</g, "&lt;");
    return `
      <article class="saved-job" data-id="${id}">
        <div class="saved-job-head">
          <div>
            <strong>${safeTitle}</strong>
            <p>${safeCompany} • Saved ${job.date}</p>
          </div>
          <span class="fit-badge ${fitBadgeClass(job.fitScore || 0)}">Fit ${fit}</span>
        </div>

        <div class="saved-job-controls">
          <label>Status
            <select data-status="${id}">${options}</select>
          </label>
          <label>Follow-up
            <input type="date" data-followup="${id}" value="${job.followUpDate || ""}" />
          </label>
        </div>

        <p class="next-action"><strong>Next:</strong> ${nextActionFor(job)}</p>

        <textarea class="saved-notes" data-notes="${id}" rows="2" placeholder="Notes for this application...">${safeNotes}</textarea>

        <div class="saved-job-actions">
          <button class="button ghost small" data-load-job="${id}" type="button">Load</button>
          ${job.jobUrl ? `<button class="button ghost small" data-open-job="${id}" type="button">Open link</button>` : ""}
          ${job.resumeVersion ? `<button class="button ghost small" data-resume-job="${id}" type="button">Resume .txt</button>` : ""}
          <button class="button ghost small danger" data-delete-job="${id}" type="button">Remove</button>
        </div>
      </article>`;
  }).join("");

  savedJobs.innerHTML = toolbar + cards;

  document.querySelector("#export-csv")?.addEventListener("click", exportSavedJobsCsv);

  savedJobs.querySelectorAll("[data-status]").forEach((sel) => {
    sel.addEventListener("change", () => {
      updateJob(sel.dataset.status, { status: sel.value });
      renderSavedJobs();
    });
  });

  savedJobs.querySelectorAll("[data-followup]").forEach((inp) => {
    inp.addEventListener("change", () => {
      updateJob(inp.dataset.followup, { followUpDate: inp.value });
      renderSavedJobs();
    });
  });

  savedJobs.querySelectorAll("[data-notes]").forEach((area) => {
    area.addEventListener("change", () => updateJob(area.dataset.notes, { notes: area.value }));
  });

  savedJobs.querySelectorAll("[data-open-job]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const job = readSavedJobs().find((j) => String(j.id) === btn.dataset.openJob);
      if (job?.jobUrl) window.open(job.jobUrl, "_blank", "noopener,noreferrer");
    });
  });

  savedJobs.querySelectorAll("[data-resume-job]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const job = readSavedJobs().find((j) => String(j.id) === btn.dataset.resumeJob);
      if (job?.resumeVersion) {
        const name = `${(job.company || "company")}-${(job.jobTitle || "role")}-resume`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        downloadText(`${name}.txt`, job.resumeVersion);
      }
    });
  });

  savedJobs.querySelectorAll("[data-delete-job]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextJobs = readSavedJobs().filter((j) => String(j.id) !== button.dataset.deleteJob);
      writeSavedJobs(nextJobs);
      renderSavedJobs();
    });
  });

  savedJobs.querySelectorAll("[data-load-job]").forEach((button) => {
    button.addEventListener("click", () => {
      const job = readSavedJobs().find((j) => String(j.id) === button.dataset.loadJob);
      if (!job) return;
      document.querySelector("#job-title").value = job.jobTitle || "";
      document.querySelector("#company").value = job.company || "";
      document.querySelector("#job-description").value = job.jobDescription || "";
      document.querySelector("#notes").value = job.notes || "";
      if (document.querySelector("#job-url")) document.querySelector("#job-url").value = job.jobUrl || "";
      setOutput(generateOutput(getFormData()), "Loaded saved job package");
      window.location.hash = "workspace";
    });
  });
}

function makeFileName(data) {
  const company = data.company || "company";
  const role = data.jobTitle || "application-package";
  return `${company}-${role}-springtech-package.txt`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = getFormData();

  if (!data.jobDescription && !data.jobTitle) {
    setOutput("Add at least a job title or job description first.", "Add job details");
    return;
  }

  setOutput(generateOutput(data), "Full application package ready");
});

saveJobButton.addEventListener("click", () => {
  const data = getFormData();

  if (!data.jobTitle && !data.company && !data.jobDescription) {
    setOutput("Add a job title, company, or job description before saving.", "Nothing to save yet");
    return;
  }

  const keywords = extractKeywords(data.jobDescription);
  const roleProfile = getRoleProfile(data);
  const fit = calculateFitScore(keywords, roleProfile);

  const jobs = readSavedJobs();
  jobs.unshift({
    id: Date.now(),
    jobTitle: data.jobTitle,
    company: data.company,
    jobUrl: data.jobUrl,
    jobDescription: data.jobDescription,
    notes: data.notes,
    status: "Saved",
    fitScore: fit.score,
    followUpDate: "",
    resumeVersion: data.jobDescription || data.jobTitle ? buildResumeDraft(data, roleProfile, keywords) : "",
    date: new Date().toLocaleDateString()
  });

  writeSavedJobs(jobs.slice(0, 50));
  renderSavedJobs();
  setOutput("Job saved to your tracker with its own tailored resume version. Set a status and follow-up date below.", "Saved");
});

clearButton.addEventListener("click", () => {
  form.reset();
  currentOutputText = "";
  output.classList.add("empty");
  output.textContent = "Paste a job description and click Build full package. Your tailored resume, cover letter, keywords, recruiter message, and interview prep will appear here.";
  outputTitle.textContent = "Ready when you are";
});

copyButton.addEventListener("click", async () => {
  if (!currentOutputText) {
    setOutput("Generate a package first, then copy it.", "Nothing to copy yet");
    return;
  }

  try {
    await navigator.clipboard.writeText(currentOutputText);
    copyButton.textContent = "Copied";
    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1200);
  } catch (error) {
    setOutput("Copy failed. Select the generated text manually and copy it.", "Copy unavailable");
  }
});

if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    if (!currentOutputText) {
      setOutput("Generate a package first, then download it.", "Nothing to download yet");
      return;
    }

    const data = getFormData();
    const blob = new Blob([currentOutputText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = makeFileName(data);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

renderSavedJobs();
