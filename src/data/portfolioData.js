export const profile = {
  name: "Fernando Acevedo",
  role: "Full-Stack Software Engineer",
  roleOptions: [
    "Full-Stack Software Engineer",
    "Incoming SWE Intern @ OCV",
    "Software Engineering Intern",
    "Researcher",
    "Competitive Programmer",
    "ACM President",
    "Student",
    "Problem Solver",
    "Lifelong Learner"
  ],
  location: "Auburn, AL",
  email: "FernandoJosueAcevedo@gmail.com",
  summary:
    "Software Engineering student at Auburn University (B.S. expected May 2028) building production-ready systems across robotics, automation, full-stack products, and data pipelines.",
  resumeHref: "resume/Resume.pdf",
  githubHref: "https://github.com/fernando-ace",
  linkedinHref: "https://linkedin.com/in/fernando-ace"
};

export const experience = [
  {
    company: "OCV, LLC",
    role: "Incoming Software Engineering Intern",
    period: "Jul 2026 - Present",
    location: "Opelika, AL · On-site",
    summary:
      "Incoming software engineering internship at OCV, beginning in July 2026 in Opelika, Alabama."
  },
  {
    company: "Tennibot",
    role: "Software Engineering Intern",
    period: "Aug 2025 - Dec 2025",
    location: "Auburn, AL",
    summary:
      "Built robotics provisioning, calibration, and data-labeling workflows to accelerate release cycles for autonomous tennis and pickleball robots.",
    metrics: ["~5% accuracy improvement", "10,000+ labeled images", "Setup time reduced from hours to minutes"],
    highlights: [
      "Automated Linux provisioning for autonomous robots, covering microSD imaging, filesystem setup, and secure cloud registration, reducing manual setup from multi-hour work to a repeatable minute-scale workflow.",
      "Built Dockerized Ubuntu 22.04 calibration workflows with RViz and robot sensor scripts, improving sensor and camera accuracy by ~5% while making camera and rotation calibration reproducible across deployments.",
      "Developed Python, OpenCV, and CVAT SDK data pipelines to extract video frames, upload datasets, and support annotation of 10,000+ training images for perception model development."
    ],
    tech: ["Python", "Docker", "ROS", "Linux", "OpenCV", "CVAT", "RViz"]
  },
  {
    company: "Altec",
    role: "Data Analyst Intern",
    period: "May 2025 - Aug 2025",
    location: "Birmingham, AL",
    summary:
      "Modernized analytics operations by migrating dashboards and improving query efficiency for fast, dependable reporting.",
    metrics: ["90+ dashboards migrated", "32% RAM reduction", "~15 hours/week saved"],
    highlights: [
      "Optimized Qlik and SQL data models over 13M-row datasets, reducing memory footprint by 32% while keeping dashboard response times under one second.",
      "Migrated 90+ legacy Qlik analytics assets to Qlik Cloud, rebuilding data models and validating dashboard outputs with BI stakeholders.",
      "Built custom JSON/CSS Qlik themes and configured AI Insight Advisor business logic and chatbot helpers to standardize and speed self-service, client-facing analytics workflows."
    ],
    tech: ["Qlik Cloud", "SQL", "Python", "JSON", "CSS", "AI Insight Advisor"]
  },
  {
    company: "¡HICA! (Hispanic and Immigrant Center of Alabama)",
    role: "Data Analyst Intern",
    period: "May 2024 - Aug 2024",
    location: "Homewood, AL",
    summary:
      "Consolidated long-term client data into a relational model and delivered dashboards that improved operational visibility.",
    metrics: ["20+ years of data unified", "~20% faster reporting"],
    highlights: [
      "Designed a normalized relational database schema consolidating 20+ years of legacy program data into a scalable reporting foundation.",
      "Built Tableau dashboards tracking outreach, program outcomes, and service metrics, giving staff a central view of community impact data."
    ],
    tech: ["Tableau", "SQL", "Python", "Data Modeling"]
  }
];

export const projects = [
  {
    name: "EventFilm",
    description:
      "Production iOS and web app for shared event photo albums: hosts create one guest link, people upload candid photos from their phones without an account or app download, and everyone returns to a shared recap.",
    highlights: [
      "Designed, built, and launched EventFilm on the iOS App Store and web in one summer, enabling hosts to collect candid event photos in a shared album through a link while guests contribute without accounts or app downloads.",
      "Built an account-free guest flow with camera or photo-library uploads, optional names, personal upload deletion, photo hearts, and story-ready recap exports.",
      "Delivered host authentication, event creation and controls, guest-link sharing, content moderation, engagement analytics, curated highlights, and four event styles including Color Hunt and timed Memory Capsule reveals.",
      "Engineered the production iOS and web stack with React Native, Expo, TypeScript, Node.js, Express, Prisma, PostgreSQL, private Supabase object storage, and RevenueCat; unified shared domain and API packages and deployed with Vercel and Railway."
    ],
    stack: ["TypeScript", "React", "React Native", "Expo", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase", "RevenueCat"],
    appStoreHref: "https://apps.apple.com/us/app/eventfilm/id6793253546",
    appStoreLabel: "App Store",
    liveHref: "https://eventfilm.app/",
    liveLabel: "Website"
  },
  {
    name: "FollowThrough",
    description:
      "Interactive concept for an SMS-first reminder agent that helps people follow through on commitments through simulated check-ins and a live waitlist.",
    highlights: [
      "Built a browser-based commitment flow with deterministic handling for completed tasks, progress updates, snoozes, and unclear replies.",
      "Created matching Next.js and Cloudflare Workers experiences backed by PostgreSQL and Prisma locally and Cloudflare D1 and Drizzle for the hosted waitlist.",
      "Retained a tested server foundation for authentication, durable scheduling, Twilio messaging, QStash dispatch, account controls, and safe opt-out handling."
    ],
    stack: ["TypeScript", "Next.js", "React", "Prisma", "PostgreSQL", "Cloudflare D1", "Drizzle"],
    githubHref: "https://github.com/fernando-ace/FollowThrough",
    liveHref: "https://followthrough-reminders.fernandojosueacevedo.chatgpt.site",
    liveLabel: "Live Demo"
  },
  {
    name: "JudgeLock",
    description:
      "Test-integrity firewall for coding agents that protects trusted tests and binds completion evidence to the exact repository state that was checked.",
    highlights: [
      "Records a trusted Git baseline and blocks test deletion, weakening, skipped tests, protected-path changes, and policy downgrades.",
      "Binds verification receipts to the baseline, HEAD, index, worktree, relevant untracked files, trusted commands, runtime, and output hashes.",
      "Ships CLI hooks and CI integration with a benchmark covering 30 known attacks and 10 legitimate controls across disposable repositories."
    ],
    stack: ["TypeScript", "Node.js", "Git", "Vitest", "GitHub Actions", "npm"],
    githubHref: "https://github.com/fernando-ace/JudgeLock",
    liveHref: "https://www.npmjs.com/package/judgelock",
    liveLabel: "npm Package"
  },
  {
    name: "Auburn Academic Planner",
    description:
      "Degree Works-native academic planning assistant that turns current progress and planned-path PDFs into advisor-safe preparation notes.",
    highlights: [
      "Parses Degree Works audits and plans for credits, incomplete requirements, planned courses, confidence, and supporting evidence.",
      "Compares a student's planned path with remaining requirements while preserving substitutions, transfer credit, and unclear items for advisor review.",
      "Pairs deterministic planning tools with source-grounded Auburn academic chat using curated university sources and Gemini File Search."
    ],
    stack: ["TypeScript", "Next.js", "Gemini", "RAG", "PDF Parsing", "Vitest"],
    githubHref: "https://github.com/fernando-ace/Auburn-Academic-Planner",
    liveHref: "https://auburn-academic-planner.vercel.app",
    liveLabel: "Live App"
  },
  {
    name: "Prediction Market Intelligence Platform",
    description:
      "Market research platform that ingests Kalshi market and order book snapshots, normalizes pricing data, and evaluates signal quality with forward-return and cohort analysis.",
    highlights: [
      "Built research modules for binary arbitrage, related-market grouping, spread tightening, passive quote markout, and fill proxy behavior.",
      "Tested whether paper edges survived execution constraints instead of stopping at headline pricing signals.",
      "Added 240+ passing tests and ran 50,000-snapshot passive-fill simulations, surfacing low fillability as the key bottleneck despite favorable markouts."
    ],
    stack: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Kalshi API", "Vitest"],
    githubHref: "https://github.com/fernando-ace/prediction-market-intelligence-platform",
    liveHref: "mailto:FernandoJosueAcevedo@gmail.com?subject=Prediction%20Market%20Intelligence%20Platform%20Walkthrough",
    liveLabel: "Request Walkthrough"
  },
  {
    name: "Income Ladder Snapshot",
    description:
      "Privacy-first prototype built for a Wells Fargo academic advisor who tasked me with turning an Income Ladder workbook into a concise client-ready preview and printable report.",
    highlights: [
      "Parses Excel workbooks entirely in the browser and summarizes cash flow, distributions, shortfalls, withdrawals, and maturities.",
      "Keeps private client data in React memory only, with no backend, database, analytics, cookies, or browser storage.",
      "Delivers interactive charts and a compact PDF-ready print layout as a fully static application."
    ],
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Recharts", "SheetJS"],
    githubHref: "https://github.com/fernando-ace/Income-Ladder-Snapshot"
  },
  {
    name: "Tecspacs",
    description:
      "48-hour hackathon project I built with three teammates: a developer tool for organizing and reusing code snippets and mini-packages across a web app, CLI, and VS Code extension.",
    highlights: [
      "Built a sticky-note React and Tailwind interface for creating and browsing TEC code snippets and PAC mini-packages.",
      "Connected the web app, JavaScript CLI, and VS Code extension to one Express and MongoDB backend.",
      "Added Auth0 token-based authentication and Gemini-assisted code summarization and improvement workflows."
    ],
    stack: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Auth0", "Gemini"],
    githubHref: "https://github.com/rtrevizo18/tecspacs"
  },
  {
    name: "TaskFlow",
    description:
      "Task management platform with JWT-secured APIs and cloud deployment workflow across Vercel and Railway.",
    highlights: [
      "Separated frontend and backend deployment for clean iteration.",
      "Implemented authenticated API access with JWT and PostgreSQL-backed persistence."
    ],
    stack: ["React", "Spring Boot", "PostgreSQL", "JWT", "Vercel", "Railway"],
    githubHref: "https://github.com/fernando-ace/my-spring-api"
  },
  {
    name: "Brown-Kopel Study Room Reservations",
    description:
      "Mobile-first prototype for a faster Auburn Engineering study-room reservation experience across Brown-Kopel and other facilities.",
    highlights: [
      "Designed room discovery around capacity, floor, availability status, and quick reservation time slots.",
      "Built mock confirmation, upcoming reservations, validated special-event requests, and communication preferences.",
      "Used local mock data to demonstrate the end-to-end student experience without connecting to production university services."
    ],
    stack: ["TypeScript", "React", "Vite", "Responsive UI", "GitHub Pages"],
    githubHref: "https://github.com/fernando-ace/Study-Room-Reservations",
    liveHref: "https://fernando-ace.github.io/Study-Room-Reservations/",
    liveLabel: "Live Prototype"
  },
  {
    name: "Vehicle Sales Profitability Analysis",
    description:
      "Reproducible notebook analysis of vehicle sales profitability by make, body type, margin, mileage, and vehicle age.",
    highlights: [
      "Calculates total and average profit, profit margin, median odometer readings, and make/model coverage from a sample CSV.",
      "Visualizes top-performing vehicle makes and packages the workflow for one-click use in Google Colab.",
      "Keeps the public demo self-contained while documenting how the original analysis used Snowflake-hosted data."
    ],
    stack: ["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Snowflake"],
    githubHref: "https://github.com/fernando-ace/vehicle-sales-profitability-analysis",
    liveHref: "https://colab.research.google.com/github/fernando-ace/vehicle-sales-profitability-analysis/blob/main/vehicle_sales_profitability_analysis.ipynb",
    liveLabel: "Open in Colab"
  },
  {
    name: "ETL Pipeline",
    description:
      "Python and Snowpark proof-of-concept that cleans and transforms vehicle sales data into an analytics-ready Snowflake table.",
    highlights: [
      "Standardizes complex sale dates, casts odometer values, validates rows, and calculates profit from selling price and market value.",
      "Includes 10,000-row sample input and output files so the transformation can be inspected without the private full dataset."
    ],
    stack: ["Python", "Snowpark", "Snowflake", "ETL", "Data Validation"],
    githubHref: "https://github.com/fernando-ace/etl-pipeline-poc"
  }
];

export const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "Bash"] },
  { label: "Frameworks/Libraries", items: ["React Native", "Expo", "Next.js", "React", "Node.js", "Express", "Spring", "Pandas", "OpenCV", "Tailwind", "Vitest"] },
  { label: "Data and Systems", items: ["PostgreSQL", "MongoDB", "Snowflake", "Prisma", "Docker", "Linux", "REST APIs", "Kalshi API"] },
  { label: "Developer Tools", items: ["Git", "Expo EAS", "RevenueCat", "CVAT", "RViz", "Viam", "Supabase", "Firebase", "Vercel", "Railway"] }
];

export const leadership = [
  "President, Auburn Association for Computing Machinery (ACM).",
  "Founder and President, Agentic Programming Club.",
  "3rd Place, ICPC 2025 University of West Florida Regional.",
  "HSF Scholar.",
  "AP Scholar with Distinction.",
  "National Hispanic & African American Recognition.",
  "3rd Place, TSA Robotics State.",
  "Alabama Data Scholar.",
  "Hoover High Robotics President - led 50+ students, mentored peers, and managed a $5K+ budget."
];
