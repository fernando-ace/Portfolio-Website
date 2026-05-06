const baseUrl = import.meta.env.BASE_URL;

export const profile = {
  name: "Fernando Acevedo",
  role: "Full-Stack Software Engineer",
  roleOptions: [
    "Full-Stack Software Engineer",
    "Software Engineer Intern",
    "Researcher",
    "Competetive Programmer",
    "Student",
    "Problem Solver",
    "Lifelong Learner"
  ],
  location: "Auburn, AL",
  email: "FernandoJosueAcevedo@gmail.com",
  summary:
    "Software Engineering student at Auburn University (B.S. expected May 2028) building production-ready systems across robotics, automation, full-stack products, and data pipelines.",
  value:
    "I ship practical software that improves team speed, product quality, and user experience.",
  resumeHref: "resume/Resume.pdf",
  githubHref: "https://github.com/fernando-ace",
  linkedinHref: "https://linkedin.com/in/fernando-ace"
};

export const experience = [
  {
    company: "Tennibot",
    role: "Software Engineer Intern",
    period: "Aug 2025 - Feb 2026",
    location: "Auburn, AL",
    summary:
      "Built robotics provisioning, calibration, and data-labeling workflows to accelerate release cycles for autonomous tennis and pickleball robots.",
    metrics: ["~5% accuracy improvement", "10,000+ labeled images", "Setup time reduced from hours to minutes"],
    highlights: [
      "Designed automated provisioning pipelines for autonomous robots, reducing setup from hours to minutes.",
      "Built containerized Linux calibration flows (Ubuntu 22.04, Docker, RViz), improving sensor and camera accuracy by ~5%.",
      "Developed Python automation for video ingestion and CVAT-based labeling, generating 10,000+ labeled images."
    ],
    tech: ["Python", "Docker", "ROS", "Linux", "OpenCV", "CVAT"]
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
      "Migrated 90+ dashboards to Qlik Cloud.",
      "Optimized SQL logic to reduce RAM usage by 32% while keeping sub-second latency.",
      "Built custom JSON/CSS themes and integrated AI chatbot helpers to speed self-service analytics."
    ],
    tech: ["Qlik Cloud", "SQL", "Python", "JSON", "CSS"]
  },
  {
    company: "HICA",
    role: "Data Analyst Intern",
    period: "May 2024 - Aug 2024",
    location: "Homewood, AL",
    summary:
      "Consolidated long-term client data into a relational model and delivered dashboards that improved operational visibility.",
    metrics: ["20+ years of data unified", "~20% faster reporting"],
    highlights: [
      "Designed a relational database schema consolidating 20+ years of legacy data.",
      "Built Tableau dashboards to improve outreach and operational visibility."
    ],
    tech: ["Tableau", "SQL", "Python", "Data Modeling"]
  }
];

export const projects = [
  {
    name: "TecsPacs",
    description:
      "Full-stack snippet manager delivered across a web app, CLI, and VS Code extension using shared APIs and centralized authentication.",
    highlights: [
      "Unified auth and API model across three client experiences.",
      "Maintained one source of truth for snippets and developer workflows."
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Auth0"],
    image: `${baseUrl}projects/tecspacs.svg`,
    imageAlt: "Mock dashboard for TecsPacs snippet manager",
    githubHref: "https://github.com/rtrevizo18/tecspacs",
    liveHref: "mailto:FernandoJosueAcevedo@gmail.com?subject=TecsPacs%20Live%20Demo%20Request",
    liveLabel: "Demo On Request"
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
    image: `${baseUrl}projects/taskflow.svg`,
    imageAlt: "TaskFlow board with sprint columns",
    githubHref: "https://github.com/fernando-ace/my-spring-api",
    liveHref: "mailto:FernandoJosueAcevedo@gmail.com?subject=TaskFlow%20Live%20Demo%20Request",
    liveLabel: "Demo On Request"
  },
  {
    name: "ETL Pipeline",
    description:
      "Python and Snowflake ETL pipeline processing 550k+ records with automated validation and observability logging.",
    highlights: [
      "Automated quality checks to catch schema and value drift early.",
      "Added repeatable logging to improve reliability and debugging in data runs."
    ],
    stack: ["Python", "Snowflake", "ETL", "Data Validation", "Logging"],
    image: `${baseUrl}projects/etl.svg`,
    imageAlt: "ETL pipeline flow with staging and warehouse layers",
    githubHref: "https://github.com/fernando-ace/etl-pipeline-poc",
    liveHref: "mailto:FernandoJosueAcevedo@gmail.com?subject=ETL%20Pipeline%20Demo%20Request",
    liveLabel: "Walkthrough"
  }
];

export const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Bash"] },
  { label: "Frontend", items: ["React", "Tailwind CSS", "HTML", "CSS"] },
  { label: "Backend", items: ["Spring Boot", "Node.js", "Express", "REST APIs", "Auth0", "JWT"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Snowflake", "Tableau", "Qlik Cloud", "ETL"] },
  { label: "Tools", items: ["Docker", "Linux", "Git", "Railway", "Vercel", "CVAT", "RViz"] }
];

export const leadership = [
  "3rd Place, ICPC Regional Competition at University of West Florida (2025).",
  "President, Hoover High Robotics - led 50+ students and managed a $5K+ budget.",
  "HSF Scholar.",
  "Alabama Data Scholar."
];
