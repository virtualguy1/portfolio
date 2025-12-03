import { ProfileData } from './types';

export const PORTFOLIO_DATA: ProfileData = {
  name: "Abhinav Srivastav",
  title: "Full-Stack Engineer",
  summary: "Data Engineer with 3+ years' experience in AWS, PySpark & Spark. Built scalable ETL pipelines for finance & telecom domains using EMR, Glue, and Redshift. Skilled in big data processing and cloud platforms.",
  navLinks: [
    { label: "home", url: "/" },
    { label: "projects", url: "/projects" },
    { label: "blogs", url: "/blogs" },
    { label: "github", url: "https://github.com/virtualguy1" },

  ],
  experience: [
    {
      role: "Data Engineer",
      company: "SourceFuse Inc. Remote",
      period: "September 2023 - Present",
      responsibilities: [
        "Monitoring and optimizing ETL pipelines for data ingestion and transformation",
        "Managing workflows in Amazon EMR to process large datasets efficiently",
        "Managing Apache Ranger for fine-grained data access control and security policies",
        "Maintaining data pipelines using Apache Airflow for job orchestration and automation",
        "Managed version control with GIT and Bitbucket",
      ],
      skills: "Skills: Airflow, Bitbucket, EMR, Hive, PySpark, Python, Ranger, RDS, S3"
    },
    {
      role: "Data Engineer",
      company: "ERP Consulting, Remote",
      period: "July 2023 - August 2023",
      responsibilities: [
        "Built scalable ETL pipelines using PySpark and Spark to process thousands of daily credit card transactions from AWS S3",
        "Ingested and enriched raw transaction data from S3 using distributed Spark jobs on EMR",
        "Deployed Spark applications on AWS EMR for high-performance processing of large datasets",
        "Extracted reference data from RDS to enhance transaction datasets",
        "Implemented validation and quality checks for accuracy",
        "Optimized Spark jobs to cut processing time and costs",
        "Optimized workflows with Apache Airflow for scheduling and monitoring",
        "Managed version control with GIT (GitHub/Bitbucket)",
      ],
      skills: "Skills: Airflow, EMR, S3, Hive, PySpark, Python, RDS, Spark"
    },
    {
      role: "Data Engineer Intern",
      company: "ERP Consulting, Remote",
      period: "June 2022 - June 2023",
      responsibilities: [
        "Built centralized data warehouse in AWS Redshift for telecom customer data",
        "Processed usage, billing, and service data from AWS S3",
        "Developed automated ETL pipelines with AWS Glue",
        "Managed schemas with AWS Glue Data Catalog",
        "Queried data with AWS Athena for analytics",
        "Set Up CloudWatch monitoring and alerts",
        "Optimized Redshift table design and query performance",
      ],
      skills: "Skills: Athena, CloudWatch, Glue, RDS, Redshift, S3"
    }
  ],
  projects: [
    {
      title: "Real-time Data Processing Pipeline",
      description: "Designed and implemented a real-time data processing pipeline using Apache Kafka and Spark Streaming to process IoT sensor data.",
      techStack: ["Apache Kafka", "Spark Streaming", "AWS S3", "Docker"],
      link: "#"
    },
    {
      title: "Data Warehouse Migration",
      description: "Led the migration of an on-premise data warehouse to AWS Redshift, improving query performance by 40% and reducing maintenance costs.",
      techStack: ["AWS Redshift", "AWS DMS", "SQL", "Python"],
      link: "#"
    },
    {
      title: "Automated ETL Workflow",
      description: "Developed an automated ETL workflow using Apache Airflow to orchestrate complex data transformations across multiple sources.",
      techStack: ["Apache Airflow", "Python", "PostgreSQL", "AWS Glue"],
      link: "#"
    }
  ],
  skills: [
    {
      category: "Big Data Processing",
      items: "Apache Spark, Databricks, Hadoop, HDFS, Hive, PySpark"
    },
    {
      category: "Cloud Services",
      items: "Athena, EC2, EMR, Glue, RDS, Redshift, S3"
    },
    {
      category: "Programming Languages",
      items: "Bash, Java, Python, SQL"
    },
    {
      category: "Project Management Tools",
      items: "Confluence, Jira, SharePoint"
    },
    {
      category: "Soft Skills",
      items: "Adaptability, Attention to Detail, Problem Solving, Quick Learner"
    },
    {
      category: "System & Infrastructure",
      items: "Cloud infrastructure management, distributed computing environments, Linux administration, Shell Scripting"
    },
    {
      category: "Tools",
      items: "DBeaver, Jupyter Notebook, MySQL Workbench, PyCharm, Putty, VSCode"
    },
    {
      category: "Version Control & Code Management",
      items: "Bitbucket, Git, Github"
    },
    {
      category: "Workflow & Orchestration",
      items: "Apache Airflow"
    }
  ],
  socials: [
    { label: "email", url: "mailto:abhinavrx97@gmail.com" },
    { label: "linkedin", url: "https://linkedin.com/in/abhinavrx97" },
    { label: "x", url: "https://twitter.com/abhinavrx97" },
  ]
};