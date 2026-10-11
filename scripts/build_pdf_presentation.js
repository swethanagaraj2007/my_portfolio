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
      color: #94a3b8;
      -webkit-font-smoothing: antialiased;
    }

    .slide {
      width: 1920px;
      height: 1080px;
      padding: 80px 100px;
      background: #0b0f19;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .slide-header {
      margin-bottom: 30px;
    }

    .eyebrow {
      display: inline-block;
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6366f1;
      margin-bottom: 12px;
    }

    .slide-title {
      font-family: 'Outfit', sans-serif;
      font-size: 44px;
      font-weight: 800;
      color: #f8fafc;
      line-height: 1.15;
      margin-bottom: 8px;
    }

    .slide-subtitle {
      font-size: 20px;
      color: #94a3b8;
      font-weight: 400;
    }

    .card {
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 18px;
      padding: 36px;
      position: relative;
    }

    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #64748b;
      font-family: 'JetBrains Mono', monospace;
      padding-top: 20px;
      border-top: 1px solid #1a2234;
    }

    /* SLIDE 1: COVER */
    .s1-grid {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 50px;
      height: 100%;
      align-items: center;
    }

    .s1-left {
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 24px;
      padding: 60px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .s1-h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 54px;
      font-weight: 800;
      color: #f8fafc;
      line-height: 1.1;
      margin-top: 16px;
      margin-bottom: 20px;
    }

    .s1-sub {
      font-size: 20px;
      color: #94a3b8;
      line-height: 1.5;
    }

    .s1-meta {
      border-top: 1px solid #1f2937;
      padding-top: 28px;
    }

    .s1-name {
      font-family: 'Outfit', sans-serif;
      font-size: 26px;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 6px;
    }

    .s1-detail {
      font-size: 16px;
      color: #94a3b8;
      line-height: 1.4;
    }

    .s1-college {
      font-size: 16px;
      color: #38bdf8;
      font-weight: 500;
      margin-top: 4px;
    }

    .s1-right {
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 24px;
      padding: 16px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .s1-img {
      width: 100%;
      height: 760px;
      object-fit: cover;
      border-radius: 16px;
      border: 1px solid #243046;
    }

    .s1-badge {
      background: #182135;
      border: 1px solid #10b981;
      border-radius: 12px;
      padding: 14px;
      text-align: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      font-weight: 600;
      color: #10b981;
      margin-top: 14px;
    }

    /* SLIDE 2: THE IDEA & OBJECTIVE */
    .s2-problem {
      background: #111827;
      border: 1px solid #6366f1;
      border-radius: 20px;
      padding: 36px 44px;
      margin-bottom: 36px;
    }

    .s2-prob-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      color: #38bdf8;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }

    .s2-prob-title {
      font-family: 'Outfit', sans-serif;
      font-size: 26px;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 8px;
    }

    .s2-prob-desc {
      font-size: 18px;
      color: #94a3b8;
    }

    .s2-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }

    .s2-card {
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 18px;
      padding: 36px;
      position: relative;
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

    .s2-c1::before { background: #6366f1; }
    .s2-c2::before { background: #10b981; }
    .s2-c3::before { background: #38bdf8; }

    .s2-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .s2-h {
      font-family: 'Outfit', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 12px;
    }

    .s2-p {
      font-size: 16px;
      color: #94a3b8;
      line-height: 1.55;
    }

    /* SLIDE 3: JOURNEY & UX */
    .s3-flow {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 16px;
      margin-bottom: 40px;
    }

    .s3-step {
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 14px;
      padding: 24px 18px;
      text-align: center;
    }

    .s3-step.active {
      border-color: #6366f1;
      background: #182135;
    }

    .s3-step-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #38bdf8;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .s3-step-name {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 4px;
    }

    .s3-step-sub {
      font-size: 13px;
      color: #94a3b8;
    }

    .s3-ux-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }

    /* SLIDE 4: TECH QUADRANTS */
    .s4-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 32px;
      height: 100%;
    }

    .s4-card {
      background: #111827;
      border: 1px solid #1f2937;
      border-left: 5px solid #6366f1;
      border-radius: 18px;
      padding: 36px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .s4-c1 { border-left-color: #10b981; }
    .s4-c2 { border-left-color: #38bdf8; }
    .s4-c3 { border-left-color: #6366f1; }
    .s4-c4 { border-left-color: #a855f7; }

    .s4-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .s4-title {
      font-family: 'Outfit', sans-serif;
      font-size: 26px;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 14px;
    }

    .s4-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 16px;
      color: #cbd5e1;
    }

    .s4-list li::before {
      content: "• ";
      color: #64748b;
    }

    /* SLIDE 5: VISUAL SHOWCASE */
    .s5-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      height: 100%;
    }

    .s5-item {
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 20px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .s5-img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 12px;
      border: 1px solid #243046;
    }

    .s5-cap {
      margin-top: 18px;
    }

    .s5-title {
      font-family: 'Outfit', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #38bdf8;
      margin-bottom: 6px;
    }

    .s5-desc {
      font-size: 16px;
      color: #94a3b8;
      line-height: 1.4;
    }

    /* SLIDE 6: CONCLUSION */
    .s6-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      height: 100%;
    }

    .s6-card {
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 20px;
      padding: 44px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .s6-h {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-bottom: 24px;
    }

    .s6-item {
      margin-bottom: 24px;
    }

    .s6-item-t {
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: #f8fafc;
      margin-bottom: 4px;
    }

    .s6-item-d {
      font-size: 16px;
      color: #94a3b8;
      line-height: 1.45;
    }

    .s6-thx {
      background: #182135;
      border: 1px solid #6366f1;
      border-radius: 16px;
      padding: 30px;
      text-align: center;
      margin-top: auto;
    }

    .s6-thx-h {
      font-family: 'Outfit', sans-serif;
      font-size: 34px;
      font-weight: 800;
      color: #f8fafc;
      margin-bottom: 6px;
    }

    .s6-thx-name {
      font-size: 18px;
      font-weight: 600;
      color: #38bdf8;
      margin-bottom: 2px;
    }

    .s6-thx-coll {
      font-size: 14px;
      color: #64748b;
    }
  </style>
</head>
<body>

  <!-- ==================== SLIDE 1 ==================== -->
  <div class="slide">
    <div class="s1-grid">
      <div class="s1-left">
        <div>
          <span class="eyebrow">Portfolio & Capstone Review</span>
          <h1 class="s1-h1">Personal Developer<br>Portfolio Website</h1>
          <p class="s1-sub">A digital showcase bridging Computer Science fundamentals with human-centered design.</p>
        </div>

        <div class="s1-meta">
          <div class="s1-name">Swetha N.</div>
          <div class="s1-detail">B.E. Computer Science and Design (Class of 2028)</div>
          <div class="s1-college">Rajalakshmi Engineering College, Chennai</div>
        </div>
      </div>

      <div class="s1-right">
        <img class="s1-img" src="${heroImg}" alt="Portfolio Hero View">
        <div class="s1-badge">● Live Production: my-portfolio-nine-psi-98.vercel.app</div>
      </div>
    </div>
  </div>

  <!-- ==================== SLIDE 2 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">Core Philosophy</span>
        <h2 class="slide-title">The Problem & The Purpose</h2>
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
          <div class="s2-num" style="color: #10b981;">02</div>
          <div class="s2-h">Prove Algorithmic Fluency</div>
          <p class="s2-p">Provide verified credentials through 500+ LeetCode problems solved across Trees, Graphs, Dynamic Programming, and Competitive Hackathons.</p>
        </div>
        <div class="s2-card s2-c3">
          <div class="s2-num" style="color: #38bdf8;">03</div>
          <div class="s2-h">Deliver Thoughtful Ergonomics</div>
          <p class="s2-p">Execute a zero-framework, accessible web experience (&lt;50ms load time) with persistent dark/light theming and human-centered design.</p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 2 of 6</span>
    </div>
  </div>

  <!-- ==================== SLIDE 3 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">User Journey & Architecture</span>
        <h2 class="slide-title">Website Structure & Visitor Flow</h2>
        <p class="slide-subtitle">How a technical reviewer or recruiter moves through the portfolio seamlessly.</p>
      </div>

      <div class="s3-flow">
        <div class="s3-step active">
          <div class="s3-step-num">01</div>
          <div class="s3-step-name">Hero</div>
          <div class="s3-step-sub">First Impression & Role</div>
        </div>
        <div class="s3-step">
          <div class="s3-step-num">02</div>
          <div class="s3-step-name">About</div>
          <div class="s3-step-sub">Academic & Philosophy</div>
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
          <div class="s3-step-sub">Zoho SWE & LeetCode</div>
        </div>
        <div class="s3-step">
          <div class="s3-step-num">06</div>
          <div class="s3-step-name">Resume</div>
          <div class="s3-step-sub">PDF & Summary Badges</div>
        </div>
        <div class="s3-step">
          <div class="s3-step-num">07</div>
          <div class="s3-step-name">Contact</div>
          <div class="s3-step-sub">Validated Form</div>
        </div>
      </div>

      <div class="s3-ux-grid">
        <div class="card" style="border-top: 4px solid #38bdf8;">
          <h3 style="font-family: 'Outfit'; font-size: 20px; color: #f8fafc; margin-bottom: 12px;">Editorial Dark Theme & Zero Flash</h3>
          <p style="font-size: 15px; color: #94a3b8; line-height: 1.55;">
            A refined midnight palette (#090D16) paired with an inline localStorage theme-engine prevents white flashes on reload while offering dark/light comfort.
          </p>
        </div>
        <div class="card" style="border-top: 4px solid #6366f1;">
          <h3 style="font-family: 'Outfit'; font-size: 20px; color: #f8fafc; margin-bottom: 12px;">Evidence-Based Competencies</h3>
          <p style="font-size: 15px; color: #94a3b8; line-height: 1.55;">
            Replaced arbitrary skill percentage bars with categorized, tangible toolsets and verifiable milestone counts (500+ LeetCode problems solved).
          </p>
        </div>
        <div class="card" style="border-top: 4px solid #10b981;">
          <h3 style="font-family: 'Outfit'; font-size: 20px; color: #f8fafc; margin-bottom: 12px;">Frictionless Recruiter Conversion</h3>
          <p style="font-size: 15px; color: #94a3b8; line-height: 1.55;">
            Quick-view modals allow rapid project inspection without leaving context. One-click resume download and client-validated contact channels facilitate direct outreach.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 3 of 6</span>
    </div>
  </div>

  <!-- ==================== SLIDE 4 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">Engineering Stack</span>
        <h2 class="slide-title">Technology & Implementation Flow</h2>
        <p class="slide-subtitle">A disciplined, zero-framework stack prioritizing speed, accessibility, and reliability.</p>
      </div>

      <div class="s4-grid">
        <div class="s4-card s4-c1">
          <div class="s4-tag" style="color: #10b981;">01 · STRUCTURE</div>
          <div class="s4-title">Semantic HTML5</div>
          <ul class="s4-list">
            <li>ARIA landmark architecture (&lt;header&gt;, &lt;main&gt;, &lt;nav&gt;, &lt;section&gt;)</li>
            <li>Accessibility-first keyboard skip-link navigation</li>
            <li>OpenGraph & Twitter meta tags for rich social indexing</li>
          </ul>
        </div>
        <div class="s4-card s4-c2">
          <div class="s4-tag" style="color: #38bdf8;">02 · STYLING</div>
          <div class="s4-title">Vanilla CSS3 System</div>
          <ul class="s4-list">
            <li>CSS Custom Properties (:root) for instant theme variables</li>
            <li>Modern CSS Grid & Flexbox for multi-device responsiveness</li>
            <li>Subtle glassmorphic backdrops and fluid clamp() typography</li>
          </ul>
        </div>
        <div class="s4-card s4-c3">
          <div class="s4-tag" style="color: #6366f1;">03 · INTERACTIVITY</div>
          <div class="s4-title">Vanilla JavaScript (ES6+)</div>
          <ul class="s4-list">
            <li>Zero external framework bloat — pure browser native code</li>
            <li>Theme persistence controller with localStorage synchronization</li>
            <li>Active scroll-spy navigation listener & Quick View modal logic</li>
          </ul>
        </div>
        <div class="s4-card s4-c4">
          <div class="s4-tag" style="color: #a855f7;">04 · INFRASTRUCTURE</div>
          <div class="s4-title">Git, GitHub & Vercel</div>
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
      <span>Slide 4 of 6</span>
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
          <img class="s5-img" src="${heroImg}" alt="Hero & Multi-Project View">
          <div class="s5-cap">
            <div class="s5-title">Hero & Selected Work Overview</div>
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
      <span>Slide 5 of 6</span>
    </div>
  </div>

  <!-- ==================== SLIDE 6 ==================== -->
  <div class="slide">
    <div>
      <div class="slide-header">
        <span class="eyebrow">Project Summary</span>
        <h2 class="slide-title">Outcomes, Roadmap & Conclusion</h2>
        <p class="slide-subtitle">Verified deliverables, technical evaluation, and future engineering trajectory.</p>
      </div>

      <div class="s6-grid">
        <div class="s6-card" style="border-top: 4px solid #10b981;">
          <div>
            <div class="s6-h" style="color: #10b981;">VERIFIED PROJECT OUTCOMES</div>
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

        <div class="s6-card" style="border-top: 4px solid #6366f1;">
          <div>
            <div class="s6-h" style="color: #6366f1;">FUTURE ROADMAP</div>
            <div class="s6-item">
              <div class="s6-item-t">→ Live LeetCode GraphQL Sync</div>
              <div class="s6-item-d">Dynamic pipeline updating active problem counts and streak heatmaps automatically.</div>
            </div>
            <div class="s6-item">
              <div class="s6-item-t">→ Interactive RAG Playground</div>
              <div class="s6-item-d">In-browser live demonstration of OpenAPI and YAML semantic vector retrieval.</div>
            </div>
          </div>

          <div class="s6-thx">
            <div class="s6-thx-h">Thank You!</div>
            <div class="s6-thx-name">Swetha N. — B.E. Computer Science and Design</div>
            <div class="s6-thx-coll">Rajalakshmi Engineering College · Chennai</div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <span>Personal Portfolio Website — Presentation</span>
      <span>Slide 6 of 6</span>
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
