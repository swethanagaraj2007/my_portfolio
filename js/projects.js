/**
 * projects.js
 * Central, easy-to-edit project catalog and case studies for Swetha N.
 * You can edit, add, or reorder projects here without touching HTML structure.
 */

const portfolioProjects = [
  {
    id: "zoho-rag-assistant",
    title: "Internal API RAG Assistant & Dependency Visualizer",
    tagline: "Production semantic search pipeline & interactive API dependency visualizer built during internship at Zoho.",
    featured: true,
    category: "ai",
    badge: "Internship Project @ Zoho",
    thumbnail: "assets/images/project-zoho-rag.svg",
    stats: [
      { label: "Vector Search", value: "Qdrant DB" },
      { label: "Embeddings", value: "all-MiniLM-L6-v2" },
      { label: "Input", value: "OpenAPI / YAML" }
    ],
    technologies: [
      "Python",
      "Retrieval-Augmented Generation (RAG)",
      "Sentence Transformers",
      "Qdrant Vector DB",
      "OpenAPI / YAML",
      "HTML5 / CSS3"
    ],
    shortDesc: "Built a natural-language query assistant for internal API specifications at Zoho, transforming complex OpenAPI/YAML specs into indexed embeddings with interactive visual dependency mapping.",
    contribution: "Implemented the embedding pipeline with Sentence Transformers, indexed schemas in Qdrant, parsed parameterized API dependencies into structured JSON, and built an interactive dependency tree visualization.",
    githubUrl: "https://github.com/swethanagaraj2007",
    liveUrl: "", // Leave blank if proprietary / internal
    liveUrlLabel: "Internal Production",
    caseStudy: {
      problemStatement: "Navigating hundreds of interdependent microservice APIs defined across massive YAML specifications created high friction for internal engineering teams looking for relevant endpoints, parameters, and query mappings.",
      architecture: [
        "Ingestion & Parsing: Python scripts parse complex OpenAPI/YAML definitions into structured JSON tables.",
        "Synthetic Query Generation: Automated generation of natural-language questions, SQL queries, and field summaries from parsed endpoints.",
        "Vector Indexing: Embeddings generated using Sentence Transformers (all-MiniLM-L6-v2) and indexed into a Qdrant vector database.",
        "Semantic Search & RAG: User natural-language queries are embedded and matched against Qdrant to retrieve precise endpoint docs and SQL schemas.",
        "Visualization: A clean HTML/CSS interactive dependency tree visualizing upstream and downstream API parameter links."
      ],
      keyChallenges: "Resolving deeply nested parameterized vs non-parameterized API dependencies and fine-tuning similarity thresholds so queries for specific technical parameters returned exact schema matches rather than generic documentation.",
      whatILearned: "Learned production RAG architecture, vector similarity mechanics, handling real-world enterprise OpenAPI schemas, and delivering clean internal developer tooling."
    }
  },
  {
    id: "phc-companion",
    title: "PHC AI Companion — Healthcare EHR",
    tagline: "AI-assisted Primary Healthcare Management System with role-based EHR and automatic visit summarization.",
    featured: true,
    category: "fullstack",
    badge: "Full-Stack + AI",
    thumbnail: "assets/images/project-phc.svg",
    stats: [
      { label: "Backend", value: "Spring Boot" },
      { label: "Frontend", value: "React" },
      { label: "Security", value: "JWT + RBAC" }
    ],
    technologies: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "JWT Authentication",
      "RESTful APIs",
      "AI Summarization"
    ],
    shortDesc: "Comprehensive clinical management platform for Primary Health Centers featuring role-based workflows for doctors, nurses, and receptionists with AI-driven patient history summarization.",
    contribution: "Designed the relational database schema in PostgreSQL, implemented secure Spring Boot REST endpoints with JWT authorization, and integrated AI summarization for clinical history.",
    githubUrl: "https://github.com/swethanagaraj2007",
    liveUrl: "",
    liveUrlLabel: "Demo Video / Docs",
    caseStudy: {
      problemStatement: "Primary Health Center doctors handle massive daily patient volumes and must quickly parse scattered past prescription logs, nurse vitals, and handwritten notes before each consultation.",
      architecture: [
        "Role-Based Access Control: Granular security separating receptionist intake, nurse vitals recording, and doctor consultation workflows.",
        "Centralized EHR: Relational PostgreSQL schema linking patients, visits, diagnoses, vitals trends, and prescriptions.",
        "AI Summarization Module: Synthesizes prior visit notes, chronic conditions, and medication histories into a crisp 3-bullet pre-consultation brief for physicians.",
        "React Frontend: High-contrast, keyboard-friendly UI tailored for rapid data entry in busy clinical environments."
      ],
      keyChallenges: "Ensuring patient privacy and HIPAA/data confidentiality while passing clinical notes to the AI summarizer, and enforcing strict relational constraints across concurrent clinic visits.",
      whatILearned: "Mastered enterprise Java with Spring Boot, secure JWT lifecycle management, full-stack state coordination in React, and practical AI integration in safety-critical domains."
    }
  },
  {
    id: "smart-sms",
    title: "Smart SMS — LeetCode Activity Tracker",
    tagline: "Chrome extension with backend analytics to track LeetCode problem-solving consistency, tags, and progress.",
    featured: true,
    category: "tools",
    badge: "Browser Extension",
    thumbnail: "assets/images/project-smart-sms.svg",
    stats: [
      { label: "Platform", value: "Chrome MV3" },
      { label: "Target", value: "LeetCode Activity" },
      { label: "Backend", value: "Node / DB" }
    ],
    technologies: [
      "JavaScript (ES6+)",
      "Chrome Extensions Manifest V3",
      "Node.js",
      "PostgreSQL / SQLite",
      "REST APIs"
    ],
    shortDesc: "A developer tool that runs right in the browser, tracking problem-solving sessions on LeetCode, recording difficulty distribution, and syncing with a centralized database for streak monitoring.",
    contribution: "Built the Manifest V3 content scripts, background service workers, and backend API integration to log submissions without interfering with the user's coding workflow.",
    githubUrl: "https://github.com/swethanagaraj2007",
    liveUrl: "",
    liveUrlLabel: "Web Store (Upcoming)",
    caseStudy: {
      problemStatement: "DSA practitioners practicing on LeetCode frequently lose sight of topic-wise blind spots, daily streaks, and revision intervals across varied algorithm patterns.",
      architecture: [
        "Content Script Observer: Non-intrusive DOM listeners and network event hooks detecting successful problem submissions.",
        "Background Service Worker: Manifest V3 worker managing state, authentication, and secure token storage.",
        "Backend Ingestion: Express REST API receiving submission metadata (difficulty, runtime, tags) and storing it in a relational DB.",
        "Popup Analytics: Interactive popup displaying weekly activity heatmaps, topic breakdowns, and spaced repetition alerts."
      ],
      keyChallenges: "Handling dynamic single-page application (SPA) routing in LeetCode's modernized UI and complying with Chrome Manifest V3's strict service worker lifecycle constraints.",
      whatILearned: "Deepened knowledge of browser extension security architecture, asynchronous message passing, client-side caching, and API contract design."
    }
  },
  {
    id: "vr-mock-interview",
    title: "AI-Powered VR Mock Interview Platform",
    tagline: "Immersive virtual reality interview simulator with realistic conversational AI to build placement confidence.",
    featured: true,
    category: "ai",
    badge: "Unity + Conversational AI",
    thumbnail: "assets/images/project-vr.svg",
    stats: [
      { label: "Engine", value: "Unity 3D" },
      { label: "AI Voice", value: "Convai" },
      { label: "Focus", value: "Interview Prep" }
    ],
    technologies: [
      "Unity",
      "Convai AI",
      "C#",
      "Conversational AI",
      "AR / VR",
      "Audio Processing"
    ],
    shortDesc: "An immersive AR/VR simulation environment where students rehearse college placement interviews with an intelligent AI interviewer that adapts questions dynamically and provides feedback.",
    contribution: "Constructed the 3D corporate interview environment in Unity, integrated the Convai conversational AI plugin, and engineered dynamic question logic with performance debriefs.",
    githubUrl: "https://github.com/swethanagaraj2007",
    liveUrl: "",
    liveUrlLabel: "Project Walkthrough",
    caseStudy: {
      problemStatement: "Engineering candidates often struggle with interview anxiety, body language cues, and verbal articulation during high-stakes placement drives due to lack of realistic simulation.",
      architecture: [
        "3D Environment: Realistic corporate interview boardroom crafted in Unity with spatial lighting and audio.",
        "AI Agent Pipeline: Convai integration connecting speech-to-text, LLM dialogue logic, and real-time lip-synced text-to-speech avatar animation.",
        "Adaptive Dialogue Tree: Dynamic difficulty scaling based on candidate responses, testing both technical and behavioral aptitude.",
        "Analytics Dashboard: Post-session report detailing pacing, clarity, confidence metrics, and technical depth."
      ],
      keyChallenges: "Minimizing round-trip speech latency to preserve the illusion of a natural face-to-face conversation and synchronizing realistic avatar eye contact.",
      whatILearned: "Hands-on experience in 3D environment optimization, spatial UI/UX design, real-time conversational AI integration, and user-centered simulation design."
    }
  },
  {
    id: "resume-intelligence",
    title: "Resume Intelligence & Mock Interview",
    tagline: "AI-assisted resume parser, skills taxonomy matcher, and tailored mock interview question generator.",
    featured: false,
    category: "ai",
    badge: "AI / Document Intelligence",
    thumbnail: "assets/images/project-resume-ai.svg",
    stats: [
      { label: "Processing", value: "Python NLP" },
      { label: "Retrieval", value: "Semantic Search" },
      { label: "Output", value: "Targeted Q&A" }
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Semantic Embeddings",
      "Prompt Engineering",
      "React",
      "Tailored Scoring"
    ],
    shortDesc: "An intelligent evaluation platform that extracts structured skills, projects, and impact statements from candidate resumes to generate personalized, deep-dive interview questions.",
    contribution: "Implemented the document parsing logic, semantic entity matching between resume bullet points and job descriptions, and structured prompt pipelines for candidate assessment.",
    githubUrl: "https://github.com/swethanagaraj2007",
    liveUrl: "",
    liveUrlLabel: "Repository",
    caseStudy: {
      problemStatement: "Standard resume scanners only look for keyword density, leaving candidates unaware of how effectively their actual technical achievements hold up under technical interview scrutiny.",
      architecture: [
        "PDF Parsing Engine: Extracts multi-column resume layouts into semantic sections (Skills, Experience, Projects).",
        "Entity & Skill Extraction: Identifies core competencies and maps them against canonical tech stacks using vector similarity.",
        "Interview Question Synthesizer: Crafts customized questions testing architectural tradeoffs and edge cases found in the candidate's declared projects.",
        "Candidate Feedback Interface: Highlights vague bullet points and suggests quantifiable metrics."
      ],
      keyChallenges: "Extracting accurate text hierarchy from diverse PDF formats without losing context, and generating challenging yet fair interview questions.",
      whatILearned: "Techniques for unstructured document normalization, prompt structuring for evaluation consistency, and building clean web interfaces for developer assessment."
    }
  },
  {
    id: "datasheet-conversion",
    title: "Datasheet Conversion Platform",
    tagline: "Automated document engineering system for extracting technical specs and generating branded datasheets.",
    featured: false,
    category: "fullstack",
    badge: "Document Engineering",
    thumbnail: "assets/images/project-datasheet.svg",
    stats: [
      { label: "Pipeline", value: "Python ETL" },
      { label: "Preservation", value: "100% Page Count" },
      { label: "Format", value: "Branded PDF" }
    ],
    technologies: [
      "Python",
      "PDF Processing",
      "Document Engineering",
      "JSON Schema",
      "HTML5 / CSS Paged Media"
    ],
    shortDesc: "Extracts and normalizes technical datasheet information (pinouts, voltage tables, operating ranges) and automatically compiles standardized company-branded datasheets while preserving content and pagination.",
    contribution: "Designed table and key-value extraction routines, schema validation for hardware specs, and headless PDF rendering templates.",
    githubUrl: "https://github.com/swethanagaraj2007",
    liveUrl: "",
    liveUrlLabel: "Repository",
    caseStudy: {
      problemStatement: "Engineers spend countless hours manually copying technical specification tables from supplier component datasheets into standardized enterprise design documents.",
      architecture: [
        "Extraction Pipeline: Parses bounding boxes, typography, and tabular structures from source PDF datasheets.",
        "Normalization Schema: Standardizes electrical ratings, pinout descriptions, and environmental specs into strongly typed JSON.",
        "Branded Template Engine: Ingests the normalized schema into responsive CSS Paged Media templates matching corporate brand guidelines.",
        "Validation Check: Programmatically verifies that page count, diagram coordinates, and key figures match original source specifications."
      ],
      keyChallenges: "Accurately segmenting multi-row spanned tables in noisy technical PDFs and ensuring consistent page breaks across varying table lengths.",
      whatILearned: "Deep appreciation for document layout algorithms, coordinate-based PDF manipulation, and robust data schema validation."
    }
  },
  {
    id: "boutique-billing",
    title: "Boutique Billing & Inventory System",
    tagline: "Desktop GUI application for rapid invoice generation, barcode lookup, and real-time inventory management.",
    featured: false,
    category: "tools",
    badge: "Desktop Application",
    thumbnail: "assets/images/project-billing.svg",
    stats: [
      { label: "Database", value: "SQL / SQLite" },
      { label: "Interface", value: "Custom GUI" },
      { label: "Reporting", value: "Automated PDF" }
    ],
    technologies: [
      "Java / Python",
      "SQL / Relational DB",
      "GUI Engineering",
      "PDF Invoicing",
      "Transaction Management"
    ],
    shortDesc: "A responsive desktop billing application designed for boutique retail stores, supporting fast product lookups, automated tax and discount computations, and printable invoice generation.",
    contribution: "Engineered database schema for inventory and sales logs, built keyboard-first checkout interfaces, and implemented transactional safeguards against negative inventory.",
    githubUrl: "https://github.com/swethanagaraj2007",
    liveUrl: "",
    liveUrlLabel: "Repository",
    caseStudy: {
      problemStatement: "Small boutiques frequently lose revenue and suffer checkout delays due to manual billing errors, lack of inventory tracking, and cumbersome billing software.",
      architecture: [
        "Relational Schema: Normalized tables for products, categories, transactions, line items, and customer history.",
        "High-Speed UI: Keyboard shortcuts for barcode entry, quantity updates, and instant discount calculations.",
        "Invoice Generator: Programmatic PDF bill generation with thermal-receipt printer sizing support.",
        "Inventory Alerts: Low-stock warning thresholds with daily sales ledger summaries."
      ],
      keyChallenges: "Enforcing ACID transaction safety to guarantee inventory records remain accurate during unexpected application shutdowns or cancelled transactions.",
      whatILearned: "Relational database indexing, transaction rollbacks, ergonomic desktop UI design, and handling edge cases in commercial arithmetic."
    }
  }
];

// Helper to get project by ID
function getProjectById(id) {
  return portfolioProjects.find(p => p.id === id);
}

// Export for module or global use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioProjects, getProjectById };
}
