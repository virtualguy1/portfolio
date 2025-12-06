import { ProfileData } from './types';

export const PORTFOLIO_DATA: ProfileData = {
  name: "Abhinav Srivastav",
  title: "Backend Engineer",
  summary: "Backend Developer with 2+ years' of proven expertise in implementing enterprise-grade microservices architectures using Spring Boot, seeking to leverage development expertise and strong problem-solving abilities to drive digital transformation initiatives.",
  navLinks: [
    { label: "home", url: "/" },
    { label: "projects", url: "/projects" },
    { label: "blog", url: "/blog" },
    { label: "github", url: "https://github.com/virtualguy1" },

  ],
  experience: [
    {
      role: "Analyst",
      company: "Deloitte",
      period: "2023 - Present",
      responsibilities: [
        "Engineered an automated claims eligibility platform of 4 core and 5 auxiliary Spring microservices; unified synchronous REST (Rest-template) and TLS-secured IBM MQ asynchronous messaging for resilient inter-service workflows.",
        "Embedded IBM ODM rules engine in 2 services, externalizing 200+ eligibility rules, and cutting rule deployment time from days to hours.",
        "Converted legacy validation flow to asynchronous pipelines using Completable Future, increasing multi-system eligibility throughput by 35% and reducing end-to-end processing time.",
        "Introduced Spring Cache with targeted @Scheduled eviction, trimming downstream API calls 70% while preserving data freshness.",
        "Designed multi-database persistence abstraction (JPA) for PostgreSQL, MS SQL Server, IBM DB2 with optimized query strategies to minimize cross-database latency.",
        "Sustained 99.8% uptime via layered health checks, metrics, and proactive PCF log/Dynatrace monitoring for early anomaly detection.",
        "Elevated reliability by expanding unit/integration test coverage (JUnit, Mockito), strengthening CI gates, and reducing production defects.",
        "Built Spring Batch recovery job generating inventory for claims failing due to technical/business errors, enabling structured manual remediation.",
        "Delivered bulk data correction endpoint ingesting Excel to reconcile discrepancies across databases, slashing manual correction effort.",
        "Partnered with product owners and actuarial teams to convert complex adjudication policies into executable rule artifacts aligned with business intent."
      ],
      skills: "Skills: Spring Boot, Microservices, IBM MQ, IBM ODM, JPA, PostgreSQL, MS SQL Server, PCF, Dynatrace, JUnit, Spring Batch"
    }
  ],
  projects: [
    {
      title: "Project 1",
      description: "Details.",
      techStack: ["Java 25", "Spring 7", "Spring Boot 4", "Docker", "Postgres"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "Details.",
      techStack: ["Java 17", "Spring Boot 3", "MySQL", "Docker"],
      link: "#"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: "Java, JavaScript, Bash, Python, ILOG JRules"
    },
    {
      category: "Frameworks/ libraries",
      items: "React.js, Tailwind CSS, Node.js, Express.js, Spring, Spring Boot, Spring Batch, Apache POI"
    },
    {
      category: "Databases",
      items: "MS SQL Server, MySQL, PostgreSQL"
    },
    {
      category: "System & Infrastructure",
      items: "Docker, Dynatrace, UrbanCode Deploy, Jenkins, Pivotal Cloud Foundry"
    },
    {
      category: "Tools/Tech",
      items: "Git, GitHub, Postman, IBM ODM"
    },
    {
      category: "Project Management Tools",
      items: "Confluence, Jira, SharePoint"
    }
  ],
  socials: [
    { label: "email", url: "mailto:abhinavrx97@gmail.com" },
    { label: "linkedin", url: "https://linkedin.com/in/abhinavrx97" },
    { label: "x", url: "https://twitter.com/abhinavrx97" },
  ]
};