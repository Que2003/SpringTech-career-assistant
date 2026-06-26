# SpringTech Career Assistant

A lightweight career-assistant web app built for IT support, cybersecurity, help desk, desktop support, and technical support job applications.

## What it does

- Generates a recruiter-ready elevator pitch
- Creates tailored resume bullet ideas from a job description
- Drafts a cover letter framework
- Builds interview answers using a structured STAR format
- Extracts ATS keywords from job descriptions
- Tracks saved job opportunities in the browser
- Provides a simple certification/study roadmap for IT support and cybersecurity roles

## Built for

This project is designed around Quenton Dillings' career path: IT support, help desk, desktop support, cybersecurity foundations, customer support, troubleshooting, access control, documentation, and technical communication.

## Tech stack

- HTML
- CSS
- JavaScript
- Browser localStorage
- GitHub Actions
- GitHub Pages
- No paid API required

## How to run locally

1. Clone the repository:

```bash
git clone https://github.com/Que2003/SpringTech-career-assistant.git
cd SpringTech-career-assistant
```

2. Open `index.html` in a browser.

Or run a simple local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Automatic deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

Every time code is pushed to the `main` branch, GitHub Actions will package the static site and deploy it to GitHub Pages.

The workflow can also be triggered manually from the **Actions** tab using **Run workflow**.

If GitHub Pages has not been enabled yet, open repository **Settings > Pages** and set the source to **GitHub Actions**. After that, future updates deploy automatically.

## Portfolio note

Use this project to show employers that you can build practical tools, organize user workflows, write clean documentation, and apply IT/cybersecurity career knowledge to a real product.
