const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const HTML_PATH = path.join(__dirname, '..', 'presentation', 'slides.html');
const PDF_PATH = path.join(__dirname, '..', 'presentation', 'Swetha_Portfolio_Presentation.pdf');

function getBase64(filename) {
  const file = path.join(__dirname, '..', 'presentation', 'screenshots', filename);
  if (fs.existsSync(file)) {
    const data = fs.readFileSync(file);
    return `data:image/png;base64,${data.toString('base64')}`;
  }
  return '';
}

const heroImg = getBase64('01_hero.png');
const projectsImg = getBase64('04_projects.png');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Swetha N. — Personal Developer Portfolio Website</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@500;600;700;800&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #05070d;
      font-family: 'Inter', sans-serif;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
    }

    .slide {
      width: 1920px;
      height: 1080px;
      padding: 70px 90px;
      background: #f8fafc;
      color: #0f172a;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .slide-header {
      margin-bottom: 28px;
    }

    .eyebrow {
      display: inline-block;
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #4f46e5;
      margin-bottom: 10px;
    }

    .slide-title {
      font-family: 'Outfit', sans-serif;
      font-size: 42px;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.15;
      margin-bottom: 8px;
    }

    .slide-subtitle {
      font-size: 19px;
      color: #475569;
      font-weight: 400;
    }

    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      padding: 32px;
      position: relative;
      box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.04);
    }

    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #64748b;
      font-family: 'JetBrains Mono', monospace;
      padding-top: 18px;
      border-top: 1px solid #e2e8f0;
    }

    /* SLIDE 1: COVER (EXPANSIVE KEYNOTE HERO) */
    .s1-hero {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 24px;
      padding: 60px 70px;
      box-shadow: 0 12px 30px -5px rgba(15, 23, 42, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100% - 40px);
    }

    .s1-pill {
      display: inline-flex;
      align-items: center;
      padding: 8px 18px;
      background: #f5f3ff;
      border: 1px solid #c7d2fe;
      border-radius: 9999px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #4f46e5;
      margin-bottom: 24px;
      width: fit-content;
    }

    .s1-h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 58px;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.1;
      margin-bottom: 18px;
    }

    .s1-sub {
      font-size: 21px;
      color: #475569;
      line-height: 1.5;
      max-width: 1200px;
    }

    .s1-divider {
      height: 1px;
      background: #e2e8f0;
      margin: 36px 0;
    }

    .s1-meta-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .s1-meta-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 24px;
      position: relative;
      overflow: hidden;
    }

    .s1-meta-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
    }

    .s1-mc1::before { background: #4f46e5; }
    .s1-mc2::before { background: #2563eb; }
    .s1-mc3::before { background: #059669; }
    .s1-mc4::before { background: #9333ea; }

    .s1-meta-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }

    .s1-mc1 .s1-meta-tag { color: #4f46e5; }
    .s1-mc2 .s1-meta-tag { color: #2563eb; }
    .s1-mc3 .s1-meta-tag { color: #059669; }
    .s1-mc4 .s1-meta-tag { color: #9333ea; }

    .s1-meta-val1 {
      font-family: 'Outfit', sans-serif;
      font-size: 19px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .s1-meta-val2 {
      font-size: 14px;
      color: #64748b;
      line-height: 1.4;
    }

    /* SLIDE 2: THE IDEA & OBJECTIVE */
    .s2-problem {
      background: #eef2ff;
      border: 1.5px solid #4f46e5;
      border-radius: 20px;
      padding: 30px 40px;
      margin-bottom: 30px;
    }

    .s2-prob-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      color: #4f46e5;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }

    .s2-prob-title {
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 6px;
    }

    .s2-prob-desc {
      font-size: 17px;
      color: #334155;
    }

    .s2-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    .s2-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      padding: 32px;
      position: relative;
      box-shadow: 0 6px 20px -4px rgba(15, 23, 42, 0.04);
    }

    .s2-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      border-radius: 18px 18px 0 0;
    }

    .s2-c1::before { background: #4f46e5; }
    .s2-c2::before { background: #059669; }
    .s2-c3::before { background: #2563eb; }

    .s2-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .s2-h {
      font-family: 'Outfit', sans-serif;
      font-size: 21px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 10px;
    }

    .s2-p {
      font-size: 15px;
      color: #475569;
      line-height: 1.55;
    }

    /* SLIDE 3: JOURNEY & UX */
    .s3-flow {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 14px;
      margin-bottom: 36px;
    }

    .s3-step {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 22px 16px;
      text-align: center;
      box-shadow: 0 4px 12px -2px rgba(15, 23, 42, 0.03);
    }

    .s3-step.active {
      border-color: #4f46e5;
      background: #f5f3ff;
    }

    .s3-step-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #2563eb;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .s3-step-name {
      font-family: 'Outfit', sans-serif;
      font-size: 17px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .s3-step-sub {
      font-size: 12px;
      color: #64748b;
    }

    .s3-ux-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    /* SLIDE 4: TECH QUADRANTS */
    .s4-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 28px;
    }

    .s4-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-left: 5px solid #4f46e5;
      border-radius: 18px;
      padding: 32px 36px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 6px 20px -4px rgba(15, 23, 42, 0.04);
    }

    .s4-c1 { border-left-color: #059669; }
    .s4-c2 { border-left-color: #2563eb; }
    .s4-c3 { border-left-color: #4f46e5; }
    .s4-c4 { border-left-color: #9333ea; }

    .s4-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .s4-title {
      font-family: 'Outfit', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 12px;
    }

    .s4-list {
      list-style: none;
    }

    .s4-list li {
      font-size: 15px;
      color: #475569;
      margin-bottom: 8px;
      position: relative;
      padding-left: 18px;
      line-height: 1.45;
    }

    .s4-list li::before {
      content: "•";
      color: #94a3b8;
      position: absolute;
      left: 0;
      font-weight: bold;
    }

    /* SLIDE 5: VISUAL PROOF */
    .s5-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }

    .s5-item {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.04);
    }

    .s5-img {
      width: 100%;
      height: 480px;
      object-fit: cover;
      object-position: top;
      border-radius: 12px;
      border: 1px solid #cbd5e1;
    }

    .s5-cap {
      padding-top: 18px;
    }

    .s5-title {
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 6px;
    }

    .s5-desc {
      font-size: 15px;
      color: #64748b;
      line-height: 1.45;
    }

    /* SLIDE 6: OUTCOMES & ROADMAP */
    .s6-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }

    .s6-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: 38px;
      box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .s6-h {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-bottom: 22px;
    }

    .s6-item {
      margin-bottom: 20px;
    }

    .s6-item-t {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .s6-item-d {
      font-size: 15px;
      color: #475569;
      line-height: 1.45;
    }

    /* SLIDE 7: DEDICATED THANK YOU */
    .s7-hero {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 24px;
      padding: 55px 70px;
      box-shadow: 0 12px 30px -5px rgba(15, 23, 42, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100% - 40px);
      text-align: center;
      align-items: center;
    }

    .s7-pill {
      display: inline-flex;
      align-items: center;
      padding: 8px 20px;
      background: #f5f3ff;
      border: 1px solid #c7d2fe;
      border-radius: 9999px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #4f46e5;
      margin-bottom: 20px;
    }

    .s7-title {
      font-family: 'Outfit', sans-serif;
      font-size: 64px;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.1;
      margin-bottom: 12px;
    }

    .s7-sub {
      font-size: 20px;
      color: #475569;
      line-height: 1.5;
    }

    .s7-divider {
      width: 80%;
      height: 1px;
      background: #e2e8f0;
      margin: 30px 0;
    }

    .s7-banner {
      width: 100%;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      padding: 24px;
      margin-bottom: 30px;
    }

    .s7-name {
      font-family: 'Outfit', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .s7-coll {
      font-size: 16px;
      color: #2563eb;
      font-weight: 600;
    }

    .s7-connect-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .s7-connect-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 22px;
      text-align: left;
      position: relative;
      overflow: hidden;
    }

    .s7-connect-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
    }

    .s7-cc1::before { background: #059669; }
    .s7-cc2::before { background: #4f46e5; }
    .s7-cc3::before { background: #2563eb; }

    .s7-ctag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      margin-bottom: 6px;
    }

    .s7-cc1 .s7-ctag { color: #059669; }
    .s7-cc2 .s7-ctag { color: #4f46e5; }
    .s7-cc3 .s7-ctag { color: #2563eb; }

    .s7-cval1 {
      font-family: 'Outfit', sans-serif;
      font-size: 17px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .s7-cval2 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #64748b;
    }
  </style>
</head>
<body>

  <!-- ==================== SLIDE 1 ==================== -->
  <div class="slide">
    <div class="s1-hero">
      <div>
        <div class="s1-pill">ACADEMIC CAPSTONE &amp; TECHNICAL EVALUATION</div>
        <h1 class="s1-h1">Personal Developer Portfolio Website</h1>
        <p class="s1-sub">A production-grade digital platform engineered with semantic web standards, applied RAG intelligence, and human-centered design principles.</p>
      </div>

      <div>
        <div class="s1-divider"></div>
        <div class="s1-meta-grid">
          <div class="s1-meta-card s1-mc1">
            <div class="s1-meta-tag">PRESENTER</div>
            <div class="s1-meta-val1">Swetha N.</div>
            <div class="s1-meta-val2">B.E. Computer Science &amp; Design (Class of 2028)</div>
          </div>
          <div class="s1-meta-card s1-mc2">
            <div class="s1-meta-tag">INSTITUTION</div>
            <div class="s1-meta-val1">Rajalakshmi Eng. College</div>
            <div class="s1-meta-val2">Chennai · CGPA: 8.65</div>
          </div>
          <div class="s1-meta-card s1-mc3">
            <div class="s1-meta-tag">CORE DOMAINS</div>
            <div class="s1-meta-val1">Backend &amp; Applied AI</div>
            <div class="s1-meta-val2">RAG · Spring Boot · Django · Systems</div>
          </div>
          <div class="s1-meta-card s1-mc4">
            <div class="s1-meta-tag">PRODUCTION CDN</div>
            <div class="s1-meta-val1">Verified Edge Platform</div>
            <div class="s1-meta-val2">my-portfolio-...vercel.app</div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 1 of 7</span>
    </div>
  </div>

  <!-- ==================== SLIDE 2 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">Core Philosophy</span>
        <h2 class="slide-title">The Problem &amp; The Purpose</h2>
        <p class="slide-subtitle">Moving beyond flat resumes to establish verified engineering credibility.</p>
      </div>

      <div class="s2-problem">
        <div class="s2-prob-tag">THE PROBLEM</div>
        <div class="s2-prob-title">Static PDF resumes fail to convey live engineering craftsmanship, interactive problem-solving, or system design.</div>
        <div class="s2-prob-desc">Developers need an authentic digital platform that proves capability through live code, production internship outcomes, and architectural depth.</div>
      </div>

      <div class="s2-grid">
        <div class="s2-card s2-c1">
          <div class="s2-num" style="color: #6366f1;">01</div>
          <div class="s2-h">Showcase Production Engineering</div>
          <p class="s2-p">Highlight genuine enterprise experience from Zoho Corporation — specifically OpenAPI RAG workflows, vector embeddings, and backend services.</p>
        </div>
        <div class="s2-card s2-c2">
          <div class="s2-num" style="color: #059669;">02</div>
          <div class="s2-h">Prove Algorithmic Fluency</div>
          <p class="s2-p">Provide verified credentials through 500+ LeetCode problems solved across Trees, Graphs, Dynamic Programming, and Competitive Hackathons.</p>
        </div>
        <div class="s2-card s2-c3">
          <div class="s2-num" style="color: #2563eb;">03</div>
          <div class="s2-h">Deliver Thoughtful Ergonomics</div>
          <p class="s2-p">Execute a zero-framework, accessible web experience (&lt;50ms load time) with persistent dark/light theming and human-centered design.</p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 2 of 7</span>
    </div>
  </div>

  <!-- ==================== SLIDE 3 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">User Journey &amp; Architecture</span>
        <h2 class="slide-title">Website Structure &amp; Visitor Flow</h2>
        <p class="slide-subtitle">How a technical reviewer or recruiter moves through the portfolio seamlessly.</p>
      </div>

      <div class="s3-flow">
        <div class="s3-step active">
          <div class="s3-step-num">01</div>
          <div class="s3-step-name">Hero</div>
          <div class="s3-step-sub">First Impression &amp; Role</div>
        </div>
        <div class="s3-step">
          <div class="s3-step-num">02</div>
          <div class="s3-step-name">About</div>
          <div class="s3-step-sub">Academic &amp; Philosophy</div>
        </div>
        <div class="s3-step">
          <div class="s3-step-num">03</div>
          <div class="s3-step-name">Skills</div>
          <div class="s3-step-sub">6 Concrete Domains</div>
        </div>
        <div class="s3-step active">
          <div class="s3-step-num">04</div>
          <div class="s3-step-name">Projects</div>
          <div class="s3-step-sub">7 Verified Case Studies</div>
        </div>
        <div class="s3-step active">
          <div class="s3-step-num">05</div>
          <div class="s3-step-name">Experience</div>
          <div class="s3-step-sub">Zoho SWE &amp; LeetCode</div>
        </div>
        <div class="s3-step">
          <div class="s3-step-num">06</div>
          <div class="s3-step-name">Resume</div>
          <div class="s3-step-sub">PDF &amp; Summary Badges</div>
        </div>
        <div class="s3-step">
          <div class="s3-step-num">07</div>
          <div class="s3-step-name">Contact</div>
          <div class="s3-step-sub">Validated Form</div>
        </div>
      </div>

      <div class="s3-ux-grid">
        <div class="card" style="border-top: 4px solid #0284c7;">
          <h3 style="font-family: 'Outfit'; font-size: 20px; color: #0f172a; margin-bottom: 12px;">Editorial Dark Theme &amp; Zero Flash</h3>
          <p style="font-size: 15px; color: #475569; line-height: 1.55;">
            A refined midnight palette (#090D16) paired with an inline localStorage theme-engine prevents white flashes on reload while offering dark/light comfort.
          </p>
        </div>
        <div class="card" style="border-top: 4px solid #4f46e5;">
          <h3 style="font-family: 'Outfit'; font-size: 20px; color: #0f172a; margin-bottom: 12px;">Evidence-Based Competencies</h3>
          <p style="font-size: 15px; color: #475569; line-height: 1.55;">
            Replaced arbitrary skill percentage bars with categorized, tangible toolsets and verifiable milestone counts (500+ LeetCode problems solved).
          </p>
        </div>
        <div class="card" style="border-top: 4px solid #059669;">
          <h3 style="font-family: 'Outfit'; font-size: 20px; color: #0f172a; margin-bottom: 12px;">Frictionless Recruiter Conversion</h3>
          <p style="font-size: 15px; color: #475569; line-height: 1.55;">
            Quick-view modals allow rapid project inspection without leaving context. One-click resume download and client-validated contact channels facilitate direct outreach.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 3 of 7</span>
    </div>
  </div>

  <!-- ==================== SLIDE 4 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">Engineering Stack</span>
        <h2 class="slide-title">Technology &amp; Implementation Flow</h2>
        <p class="slide-subtitle">A disciplined, zero-framework stack prioritizing speed, accessibility, and reliability.</p>
      </div>

      <div class="s4-grid">
        <div class="s4-card s4-c1">
          <div class="s4-tag" style="color: #059669;">01 · STRUCTURE</div>
          <div class="s4-title">Semantic HTML5</div>
          <ul class="s4-list">
            <li>ARIA landmark architecture (&lt;header&gt;, &lt;main&gt;, &lt;nav&gt;, &lt;section&gt;)</li>
            <li>Accessibility-first keyboard skip-link navigation</li>
            <li>OpenGraph &amp; Twitter meta tags for rich social indexing</li>
          </ul>
        </div>
        <div class="s4-card s4-c2">
          <div class="s4-tag" style="color: #2563eb;">02 · STYLING</div>
          <div class="s4-title">Vanilla CSS3 System</div>
          <ul class="s4-list">
            <li>CSS Custom Properties (:root) for instant theme variables</li>
            <li>Modern CSS Grid &amp; Flexbox for multi-device responsiveness</li>
            <li>Subtle glassmorphic backdrops and fluid clamp() typography</li>
          </ul>
        </div>
        <div class="s4-card s4-c3">
          <div class="s4-tag" style="color: #4f46e5;">03 · INTERACTIVITY</div>
          <div class="s4-title">Vanilla JavaScript (ES6+)</div>
          <ul class="s4-list">
            <li>Zero external framework bloat — pure browser native code</li>
            <li>Theme persistence controller with localStorage synchronization</li>
            <li>Active scroll-spy navigation listener &amp; Quick View modal logic</li>
          </ul>
        </div>
        <div class="s4-card s4-c4">
          <div class="s4-tag" style="color: #9333ea;">04 · INFRASTRUCTURE</div>
          <div class="s4-title">Git, GitHub &amp; Vercel</div>
          <ul class="s4-list">
            <li>Production version control on GitHub main branch</li>
            <li>Automated continuous deployment via Vercel Edge CDN</li>
            <li>Zero build-step pipeline ensuring instantaneous deployments</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 4 of 7</span>
    </div>
  </div>

  <!-- ==================== SLIDE 5 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">Visual Proof</span>
        <h2 class="slide-title">The Implemented Website</h2>
        <p class="slide-subtitle">Genuine high-resolution captures showing the live design system in action.</p>
      </div>

      <div class="s5-grid">
        <div class="s5-item">
          <img class="s5-img" src="${heroImg}" alt="Hero &amp; Multi-Project View">
          <div class="s5-cap">
            <div class="s5-title">Hero &amp; Selected Work Overview</div>
            <p class="s5-desc">Balanced personal introduction, role pill, live status indicator, and multi-project quick cards with direct action buttons.</p>
          </div>
        </div>

        <div class="s5-item">
          <img class="s5-img" src="${projectsImg}" alt="Featured Projects Showcase">
          <div class="s5-cap">
            <div class="s5-title">Featured Projects Showcase</div>
            <p class="s5-desc">Deep engineering breakdowns: Zoho OpenAPI RAG Assistant, Healthcare EHR Companion, and Smart SMS Django Messaging Platform.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 5 of 7</span>
    </div>
  </div>

  <!-- ==================== SLIDE 6 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">Project Summary</span>
        <h2 class="slide-title">Outcomes &amp; Future Roadmap</h2>
        <p class="slide-subtitle">Verified deliverables, technical evaluation, and future engineering trajectory.</p>
      </div>

      <div class="s6-grid">
        <div class="s6-card" style="border-top: 4px solid #059669;">
          <div>
            <div class="s6-h" style="color: #059669;">VERIFIED PROJECT OUTCOMES</div>
            <div class="s6-item">
              <div class="s6-item-t">✓ Production-Ready Deployment</div>
              <div class="s6-item-d">Successfully hosted on Vercel Edge with zero downtime, instant SSL, and worldwide CDN distribution.</div>
            </div>
            <div class="s6-item">
              <div class="s6-item-t">✓ Zero-Dependency Architecture</div>
              <div class="s6-item-d">Pure HTML5, CSS3, and ES6+ delivering sub-50ms render speed without heavy client bundle overhead.</div>
            </div>
            <div class="s6-item">
              <div class="s6-item-t">✓ Dual-Theme Precision</div>
              <div class="s6-item-d">Flawless dark and light modes with localStorage persistence and zero layout shift.</div>
            </div>
            <div class="s6-item">
              <div class="s6-item-t">✓ Authentic Technical Depth</div>
              <div class="s6-item-d">Seamlessly integrates real Zoho Corporation RAG internship contributions and 500+ LeetCode milestones.</div>
            </div>
          </div>
        </div>

        <div class="s6-card" style="border-top: 4px solid #4f46e5;">
          <div>
            <div class="s6-h" style="color: #4f46e5;">FUTURE ENGINEERING ROADMAP</div>
            <div class="s6-item">
              <div class="s6-item-t">→ Live LeetCode &amp; GitHub Sync</div>
              <div class="s6-item-d">Dynamic automated pipeline refreshing solved DSA milestones and live repo activity.</div>
            </div>
            <div class="s6-item">
              <div class="s6-item-t">→ Interactive Semantic RAG Playground</div>
              <div class="s6-item-d">In-browser live demonstration of OpenAPI and YAML semantic vector retrieval with LangChain.</div>
            </div>
            <div class="s6-item">
              <div class="s6-item-t">→ Automated Lighthouse CI Gates</div>
              <div class="s6-item-d">Continuous integration checks enforcing 98+ accessibility, performance, and SEO scores on commits.</div>
            </div>
            <div class="s6-item">
              <div class="s6-item-t">→ Ambient WebGL Micro-Interactions</div>
              <div class="s6-item-d">Subtle GPU-accelerated interactive canvas shaders for featured project case studies.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 6 of 7</span>
    </div>
  </div>

  <!-- ==================== SLIDE 7 ==================== -->
  <div class="slide">
    <div class="s7-hero">
      <div>
        <div class="s7-pill">CAPSTONE EVALUATION &amp; CONCLUSION</div>
        <h1 class="s7-title">Thank You!</h1>
        <p class="s7-sub">Open for Technical Questions, Architectural Discussions &amp; Feedback</p>
      </div>

      <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
        <div class="s7-divider"></div>
        <div class="s7-banner">
          <div class="s7-name">Swetha N. &nbsp;·&nbsp; B.E. Computer Science and Design (Class of 2028)</div>
          <div class="s7-coll">Rajalakshmi Engineering College, Chennai &nbsp;·&nbsp; CGPA: 8.65</div>
        </div>

        <div class="s7-connect-grid">
          <div class="s7-connect-card s7-cc1">
            <div class="s7-ctag">LIVE DEPLOYMENT</div>
            <div class="s7-cval1">Vercel Edge Platform</div>
            <div class="s7-cval2">my-portfolio-...vercel.app</div>
          </div>
          <div class="s7-connect-card s7-cc2">
            <div class="s7-ctag">GITHUB REPOSITORY</div>
            <div class="s7-cval1">swethanagaraj2007</div>
            <div class="s7-cval2">github.com/swethanagaraj2007</div>
          </div>
          <div class="s7-connect-card s7-cc3">
            <div class="s7-ctag">PROFESSIONAL CONNECT</div>
            <div class="s7-cval1">LinkedIn Network</div>
            <div class="s7-cval2">linkedin.com/in/swetha-n-005697334</div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 7 of 7</span>
    </div>
  </div>

</body>
</html>`;

fs.writeFileSync(HTML_PATH, htmlContent);
console.log('Slides HTML written to:', HTML_PATH);

async function exportPDF() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: PDF_PATH,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });

  await browser.close();
  console.log('PDF presentation successfully generated at:', PDF_PATH);
}

exportPDF().catch(err => {
  console.error('PDF export failed:', err);
  process.exit(1);
});
