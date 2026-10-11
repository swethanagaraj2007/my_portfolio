/**
 * main.js
 * Core interactivity for Swetha N.'s Developer Portfolio
 * Features:
 * - Persistent Dark/Light theme toggle
 * - Dynamic project filtering & rendering from projects.js
 * - Case study modal with modern <dialog closedby="any"> and fallback
 * - Resume preview modal
 * - Interactive hero IDE code switcher
 * - Accessible mobile navigation drawer
 * - Scroll spy for active navbar highlighting
 * - Client-side contact form validation with accessible feedback
 * - Back-to-top button
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initHeroSpotlight();
  initProjects();
  initCaseStudyModal();
  initResumeModal();
  initContactForm();
  initBackToTop();
  initScrollSpy();

  // Initialize Lucide icons if loaded
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   1. Theme Management (Dark / Light with LocalStorage persistence)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIconContainer = document.getElementById('themeIconContainer');
  
  // Stored preference or default to dark
  const savedTheme = localStorage.getItem('swetha_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Dark mode is default as per project requirements
  const initialTheme = savedTheme ? savedTheme : 'dark';
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('swetha_portfolio_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggleBtn.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    if (themeIconContainer) {
      // Sun icon for dark mode (click to make light), Moon icon for light mode (click to make dark)
      themeIconContainer.innerHTML = isDark
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    }
  }
}

/* ==========================================================================
   2. Responsive Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('mainHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header glass effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Toggle mobile drawer
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      
      mobileMenuBtn.innerHTML = isOpen
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileMenuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* ==========================================================================
   3. Hero Selected Work Showcase Triggers
   ========================================================================== */
function initHeroSpotlight() {
  const showcaseContainer = document.querySelector('.hero-selected-showcase');
  if (!showcaseContainer) return;

  const cards = showcaseContainer.querySelectorAll('[data-project-id]');
  cards.forEach(card => {
    const handleTrigger = (e) => {
      if (e.target.closest('a')) return;
      e.preventDefault();
      const pId = card.getAttribute('data-project-id');
      if (pId && typeof openCaseStudy === 'function') {
        openCaseStudy(pId);
      }
    };

    card.addEventListener('click', handleTrigger);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleTrigger(e);
      }
    });
  });
}

/* ==========================================================================
   4. Projects Rendering & Category Filtering
   ========================================================================== */
function initProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!projectsGrid) return;

  // Render initial projects
  renderProjects('all');

  // Filter button handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter') || 'all';
      
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderProjects(category);
    });
  });

  function renderProjects(category) {
    if (typeof portfolioProjects === 'undefined' || !Array.isArray(portfolioProjects)) {
      return;
    }

    const filtered = category === 'all'
      ? portfolioProjects
      : portfolioProjects.filter(p => p.category === category);

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-muted);">
          <p>No projects found in this category.</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered.map(project => `
      <article class="project-card" data-category="${project.category}">
        <div class="project-thumb">
          <span class="project-badge">${project.badge || 'Project'}</span>
          <img src="${project.thumbnail}" alt="${project.title} Preview" loading="lazy" />
        </div>
        
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDesc}</p>
          
          <div class="project-stats">
            ${(project.stats || []).map(stat => `
              <span class="project-stat-chip">
                ${stat.label}: <span>${stat.value}</span>
              </span>
            `).join('')}
          </div>

          <div class="project-tags">
            ${(project.technologies || []).slice(0, 4).map(tech => `
              <span class="project-tag">${tech}</span>
            `).join('')}
          </div>
        </div>

        <div class="project-footer">
          <div class="project-links">
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-icon" title="View Source on GitHub" aria-label="GitHub Repository">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>Code</span>
              </a>
            ` : ''}
            
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-icon" title="View Live Demo" aria-label="Live Demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                <span>Demo</span>
              </a>
            ` : ''}
          </div>

          <button class="btn-case-study" data-project-id="${project.id}" aria-label="View case study for ${project.title}">
            <span>Case Study</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </article>
    `).join('');

    // Attach click listeners to "View Case Study" buttons
    const caseStudyBtns = projectsGrid.querySelectorAll('.btn-case-study');
    caseStudyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-project-id');
        openCaseStudy(pId);
      });
    });
  }
}

/* ==========================================================================
   5. Case Study Modal Dialog (<dialog closedby="any"> + Light Dismiss Fallback)
   ========================================================================== */
function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const footerCloseBtn = document.getElementById('footerCloseModalBtn');

  if (!modal) return;

  // Fallback for light-dismiss on browsers lacking native closedby attribute
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    modal.addEventListener('click', (event) => {
      if (event.target !== modal) return;
      const rect = modal.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isDialogContent) {
        modal.close();
      }
    });
  }

  closeBtn?.addEventListener('click', () => modal.close());
  footerCloseBtn?.addEventListener('click', () => modal.close());
}

function openCaseStudy(projectId) {
  const modal = document.getElementById('caseStudyModal');
  if (!modal || typeof getProjectById !== 'function') return;

  const project = getProjectById(projectId);
  if (!project) return;

  const titleEl = document.getElementById('modalProjectTitle');
  const problemEl = document.getElementById('modalProblemStatement');
  const archListEl = document.getElementById('modalArchitectureList');
  const challengesEl = document.getElementById('modalChallenges');
  const learningsEl = document.getElementById('modalLearnings');
  const githubLink = document.getElementById('modalGithubLink');

  if (titleEl) titleEl.textContent = project.title;
  if (problemEl) problemEl.textContent = project.caseStudy.problemStatement;
  
  if (archListEl) {
    archListEl.innerHTML = project.caseStudy.architecture.map(item => `<li>${item}</li>`).join('');
  }

  if (challengesEl) challengesEl.textContent = project.caseStudy.keyChallenges;
  if (learningsEl) learningsEl.textContent = project.caseStudy.whatILearned;

  if (githubLink) {
    if (project.githubUrl) {
      githubLink.href = project.githubUrl;
      githubLink.style.display = 'inline-flex';
    } else {
      githubLink.style.display = 'none';
    }
  }

  modal.showModal();
}

/* ==========================================================================
   6. Resume Preview Modal
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resumeModal');
  const previewBtn = document.getElementById('previewResumeBtn');
  const heroPreviewBtn = document.getElementById('heroPreviewResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeModalBtn');

  if (!resumeModal) return;

  const openResume = () => resumeModal.showModal();

  previewBtn?.addEventListener('click', openResume);
  heroPreviewBtn?.addEventListener('click', openResume);
  closeResumeBtn?.addEventListener('click', () => resumeModal.close());

  // Light dismiss fallback
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    resumeModal.addEventListener('click', (event) => {
      if (event.target !== resumeModal) return;
      const rect = resumeModal.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInside) resumeModal.close();
    });
  }
}

/* ==========================================================================
   7. Client-Side Contact Form Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Please enter your name (minimum 2 characters).');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      showError(subjectInput, 'Please provide a subject line.');
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Please write a message of at least 10 characters.');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (!isValid) return;

    // Display authentic client-side feedback (no fake delivery claim)
    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.innerHTML = `
        <strong>Thank you, ${escapeHtml(nameInput.value.trim())}!</strong><br/>
        Your message has been validated successfully.<br/>
        <small style="display:inline-block; margin-top:6px; opacity:0.9;">
          Note: This portfolio runs purely on the client side. To send your note directly right now, 
          you can also click to <a href="mailto:swetha.n.connect@gmail.com?subject=${encodeURIComponent(subjectInput.value.trim())}&body=${encodeURIComponent(messageInput.value.trim())}" style="text-decoration:underline; font-weight:bold; color:inherit;">open in your default mail app</a>, or connect a backend webhook (e.g. Formspree/EmailJS) in production.
        </small>
      `;
    }

    form.reset();
  });

  function showError(input, message) {
    input.setAttribute('aria-invalid', 'true');
    const errEl = document.getElementById(`${input.id}Error`);
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add('visible');
    }
  }

  function clearError(input) {
    input.removeAttribute('aria-invalid');
    const errEl = document.getElementById(`${input.id}Error`);
    if (errEl) {
      errEl.textContent = '';
      errEl.classList.remove('visible');
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
}

/* ==========================================================================
   8. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   9. Scroll Spy (Active Navigation Highlighting)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}
