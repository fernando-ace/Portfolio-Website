// Mobile menu toggle for small screens
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal sections with subtle animation when entering viewport
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((element) => observer.observe(element));

const experienceEntries = [
  {
    title: 'Software Engineer Intern — Tennibot',
    company: 'Tennibot',
    period: 'Aug 2025 – Feb 2026',
    location: 'Auburn, AL',
    summary: 'Led robotics provisioning, calibration, and data tooling to accelerate release cycles for autonomous mowers.',
    highlights: [
      'Designed automated provisioning pipelines for autonomous robots, reducing setup time from hours to minutes.',
      'Built containerized Linux calibration pipelines (Ubuntu 22.04, Docker, RViz), improving sensor and camera accuracy by ~5%.',
      'Developed Python automation for video ingestion and CVAT-based labeling workflows, generating 10,000+ labeled images.',
    ],
    impact: 'Provisioning automation freed more than four hours per deployment while boosting data quality for CV/ML work.',
    tools: ['Python', 'Docker', 'ROS', 'Linux', 'OpenCV'],
    focus: 'Robotics Systems & Automation',
  },
  {
    title: 'Data Analyst Intern — Altec',
    company: 'Altec',
    period: 'May 2025 – Aug 2025',
    location: 'Birmingham, AL',
    summary: 'Modernized the analytics stack by migrating dashboards and building automation that kept data fresh at sub-second latency.',
    highlights: [
      'Migrated 90+ dashboards to Qlik Cloud.',
      'Optimized SQL logic to reduce RAM usage by 32% while maintaining sub-second latency.',
      'Built custom JSON/CSS themes and integrated AI chatbot helpers for faster self-service.',
    ],
    impact: 'Dashboard modernization saved roughly 15 hours per week in manual refresh and monitoring.',
    tools: ['Qlik Cloud', 'SQL', 'JSON', 'CSS', 'Python'],
    focus: 'Data Insights & Automation',
  },
  {
    title: 'Data Analyst Intern — HICA',
    company: 'HICA',
    period: 'May 2024 – Aug 2024',
    location: 'Homewood, AL',
    summary: 'Consolidated decades of healthcare operations data into a modern warehouse with dashboards that surfaced trends.',
    highlights: [
      'Designed a relational database schema consolidating 20+ years of legacy data.',
      'Built Tableau dashboards that improved operational visibility.',
    ],
    impact: 'Legacy data consolidation cut reporting time by about 20% and unlocked faster decision signals.',
    tools: ['Tableau', 'SQL', 'Python', 'Data Modeling'],
    focus: 'Data Modeling & Reporting',
  },
];

const timelineContainer = document.querySelector('[data-experience-timeline]');
const periodElement = document.querySelector('[data-experience-period]');
const titleElement = document.querySelector('[data-experience-title]');
const locationElement = document.querySelector('[data-experience-location]');
const summaryElement = document.querySelector('[data-experience-summary]');
const highlightsElement = document.querySelector('[data-experience-highlights]');
const impactElement = document.querySelector('[data-experience-impact]');
const tagsElement = document.querySelector('[data-experience-tags]');
const focusElement = document.querySelector('[data-experience-focus]');

if (
  timelineContainer &&
  periodElement &&
  titleElement &&
  locationElement &&
  summaryElement &&
  highlightsElement &&
  impactElement &&
  tagsElement &&
  focusElement
) {
  const timelineButtons = [];
  const fallbackNote = timelineContainer.querySelector('.timeline-fallback');

  function renderExperience(index) {
    const experience = experienceEntries[index];
    if (!experience) return;

    timelineButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });

    periodElement.textContent = experience.period;
    locationElement.textContent = experience.location;
    titleElement.textContent = experience.title;
    summaryElement.textContent = experience.summary;
    highlightsElement.innerHTML = experience.highlights.map((item) => `<li>${item}</li>`).join('');
    impactElement.textContent = experience.impact;
    tagsElement.innerHTML = experience.tools.map((tool) => `<span>${tool}</span>`).join('');
    focusElement.textContent = `Focus: ${experience.focus}`;
  }

  experienceEntries.forEach((experience, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'timeline-node';
    button.setAttribute('role', 'tab');
    button.dataset.index = String(index);
    button.innerHTML = `<strong>${experience.company}</strong><span>${experience.period}</span>`;
    button.addEventListener('click', () => renderExperience(index));
    timelineContainer.appendChild(button);
    timelineButtons.push(button);
  });

  if (fallbackNote) {
    fallbackNote.remove();
  }

  renderExperience(0);
}

// Keep footer year current
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
