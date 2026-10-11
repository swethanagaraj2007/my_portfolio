# Swetha N. — Personal Developer Portfolio

A modern, responsive, high-performance personal portfolio website built with semantic **HTML5**, modern **CSS3** (custom properties, dark/light themes, fluid typography, glassmorphism), and **Vanilla JavaScript** (modular architecture, `<dialog closedby="any">` modals, client-side validation, theme persistence).

---

## 📁 Project Structure

```text
swetha-portfolio/
├── index.html                   # Semantic HTML5 single-page structure
├── css/
│   └── style.css                # Custom CSS design system, dark/light theme tokens, responsive styles
├── js/
│   ├── projects.js              # Central, easily editable project catalog & case studies data
│   └── main.js                  # Theme toggle, IDE code switcher, modals, form validation, scroll-spy
├── assets/
│   ├── images/                  # High-resolution SVG illustrations & project previews
│   │   ├── avatar-illustration.svg
│   │   ├── project-zoho-rag.svg
│   │   ├── project-phc.svg
│   │   ├── project-smart-sms.svg
│   │   ├── project-vr.svg
│   │   ├── project-resume-ai.svg
│   │   ├── project-datasheet.svg
│   │   └── project-billing.svg
│   └── resume/
│       └── Swetha_N_Resume.pdf  # Downloadable & previewable PDF resume
└── README.md                    # Project documentation & deployment guide
```

---

## 🚀 Running Locally

Because this project is built with standard web technologies without heavy server dependencies, you can run it with any lightweight local static server.

### Option 1: npm (Recommended)
Open PowerShell or your terminal in this directory:
```bash
npm start
```
Then navigate to: **`http://localhost:3000`**

### Option 2: Python (Pre-installed)
```bash
python -m http.server 3000 --bind 127.0.0.1
```

### Option 3: Node.js / npx
```bash
npx serve . -p 3000
```

### Option 4: Direct Browser Open
Double-click `index.html` to open directly in Google Chrome, Edge, Firefox, or Safari. (Note: for PDF iframe preview security in some browsers, running through `http://localhost:3000` is recommended).

---

## 🎨 Where to Edit & Customize Your Information

All dynamic project details, social links, and files are centralized so you never have to wrestle with complex code:

### 1. Update Projects & Case Studies
- Open **[`js/projects.js`](file:///C:/Users/Sandy/.gemini/antigravity-ide/scratch/swetha-portfolio/js/projects.js)**
- Every project has an entry with:
  - `title`, `tagline`, `category` (`ai`, `fullstack`, `tools`)
  - `thumbnail` (path to screenshot in `assets/images/`)
  - `stats` (chips shown on card)
  - `technologies` (badge list)
  - `githubUrl` and `liveUrl`
  - `caseStudy` object (`problemStatement`, `architecture`, `keyChallenges`, `whatILearned`)
- Adding or modifying items in this array automatically updates the UI and filters.

### 2. Replace the Resume PDF
- Place your updated resume at:
  **[`assets/resume/Swetha_N_Resume.pdf`](file:///C:/Users/Sandy/.gemini/antigravity-ide/scratch/swetha-portfolio/assets/resume/Swetha_N_Resume.pdf)**
- The "Download Resume" buttons and interactive preview dialog already point directly to this file.

### 3. Add Real Project Screenshots
- Drop your screenshots (PNG, JPG, WebP) into:
  **`assets/images/`**
- In `js/projects.js`, change the `thumbnail` property to your new image path, for example:
  ```javascript
  thumbnail: "assets/images/my-real-project-screenshot.png"
  ```

### 4. Update Social Links & Contact Details
- In **[`index.html`](file:///C:/Users/Sandy/.gemini/antigravity-ide/scratch/swetha-portfolio/index.html)**:
  - Lines 100–120: GitHub, LinkedIn, LeetCode, and email links in the Hero section.
  - Lines 360–395: Contact section cards and footer links.
  - Default social handles pre-configured:
    - **GitHub:** `https://github.com/swethanagaraj2007`
    - **LinkedIn:** `https://linkedin.com/in/n-swetha-1bb652309`
    - **LeetCode:** `https://leetcode.com/u/swethaNagaraj`
    - **Email:** `swetha.n.connect@gmail.com`

---

## 🌐 Free One-Click Deployment

### Method A: Deploy to GitHub Pages (Recommended)
1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Swetha N. developer portfolio"
   ```
2. Create a public repository on GitHub named `swethanagaraj2007.github.io` (or `portfolio`).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/swethanagaraj2007/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings** > **Pages** > Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your website will be live at `https://swethanagaraj2007.github.io/portfolio/` within 60 seconds!

### Method B: Deploy to Vercel
1. Install Vercel CLI or import the repo at [vercel.com](https://vercel.com).
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the CLI prompt; your site will deploy to a fast global CDN with automated HTTPS.

---

## 📬 Connecting the Contact Form to Email (Optional)

The contact form currently has complete **client-side validation** with accessible error states and a direct `mailto:` link generation upon valid submission.

To receive emails directly in your inbox without any server:
1. Sign up for free at [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com).
2. In `index.html`, add your Formspree endpoint to the `<form>`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. That's it! Submissions will be sent straight to `swetha.n.connect@gmail.com`.

---

## 📋 Checklist for Swetha

- [x] Responsive layout tested for desktop, tablet, and mobile.
- [x] Persistent dark mode default with functional light mode toggle.
- [x] Authentic resume data, Zoho internship experience, and LeetCode achievements.
- [x] Case study modal with `<dialog closedby="any">` and light-dismiss fallback.
- [ ] Replace any project thumbnails with real UI screenshots whenever available.
- [ ] Connect Formspree ID to the contact form when ready to receive messages via web form.
