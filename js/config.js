// js/config.js — Dual-name strategy with flexible academic status
const profile = {
  // Professional identity
  displayName: "Altair Li",
  chineseName: "李臻卓",
  // Academic identity
  academicName: "Zhenzhuo Li",

  // Flexible academic status — easy to update later!
  academicStatus: "HKUST(GZ) DSA Year 3", // e.g., "MSc Candidate at HKU", "Graduate, Class of 2027"
  titleSuffix: "Research published as Zhenzhuo Li",

  email: "zli743@connect.hkust-gz.edu.cn",
  major: "Data Science and Big Data Technology",
  avatar_url: "assets/avatar.jpg",

  career_goals: "I am Altair Li (李臻卓), a Year 3 undergraduate at The Hong Kong University of Science and Technology (Guangzhou) specializing in Data Science and Big Data Technology. My academic publications appear under my legal name, Zhenzhuo Li.\n\nSeeking a Master’s degree in Financial Technology or a related field to deepen my expertise in applying generative AI and large language models to quantitative finance and risk management. Ultimately aiming for a role as a Quant Researcher or AI Engineer within the financial industry.",

  education: [
    {
      institution: "The Hong Kong University of Science and Technology (Guangzhou)",
      degree: "B.Sc. in Data Science and Big Data Technology",
      dates: "2023.09 – 2027.06 (Expected)",
      gpa: "3.9 / 4.3",
      location: "Guangzhou, China"
    },
    {
      institution: "Osaka University",
      degree: "Exchange Program, School of Engineering Science",
      dates: "2025 Fall",
      gpa: null,
      location: "Osaka, Japan"
    }
  ],

  skills: {
    programming: ["Python", "C++", "SQL"],
    libraries: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    tools: ["Git", "Docker", "Linux", "LaTeX"],
    languages: ["Mandarin (Native)", "English (Fluent)", "Japanese (JLPT N1)", "Cantonese (Basic)"]
  },

  projects: [
    {
      name: "LENS: Large Pre-trained Transformer for Exploring Financial Time Series Regularities",
      date: "2024 – 2025",
      description: "Co-authored (4th author) a research paper proposing a novel pre-trained Transformer framework for financial time-series analysis. Contributed to multi-market data normalization and compression algorithms.",
      tech: ["Python", "PyTorch", "Pandas", "NumPy"],
      outcomes: "Paper accepted at ACM ICAIF 2025.",
      isPublished: true,
      conference: "ACM ICAIF", // ← for precise citation
      year: "2025",
      links: { paper: "https://example.com/lens.pdf" }
    },
    // {
    //   name: "SpatialReflect: Spatial-Guided Reflection for Region-Specific Stylization",
    //   date: "2025 – Present",
    //   description: "First-author research on diffusion model-based image stylization with spatial control. Developed automated evaluation tools.",
    //   tech: ["Python", "PyTorch", "Diffusion Models"],
    //   outcomes: "Manuscript under review at ICME 2026.",
    //   isPublished: false,
    //   links: { paper: "https://example.com/spatialreflect.pdf" }
    // },
    {
      name: "ASC25 World Student Supercomputer Challenge",
      date: "2025",
      description: "Core team member. Responsible for code optimization and performance tuning.",
      tech: ["C++", "Linux", "MPI", "Slurm"],
      outcomes: "Awarded Second Prize in Global Finals.",
      isPublished: false,
      links: { 
        // paper: "https://example.com/asc25.pdf" 
    }
    },
    // {
    //   name: "Financial Time-Series Data Preprocessing Platform",
    //   date: "2024.06 – 2024.10",
    //   description: "Research Assistant under Prof. Guang Zhang. Designed a standardized data pipeline for multi-market financial data.",
    //   tech: ["Python", "SQL", "Data Pipeline Design"],
    //   outcomes: "Built foundational platform for model training research.",
    //   isPublished: false,
    //   links: { paper: "https://example.com/platform.pdf" }
    // },
  ],

  social: {
    github: "https://github.com/altairpaca",
    linkedin: "",
    resume: "https://altairpaca.github.io/assets/resume.pdf",
    google_scholar: "https://scholar.google.com/citations?user=md5Z-D8AAAAJ"
  },

  awards: [
    "Dean’s List, HKUST(GZ) (Multiple Semesters)",
    "Provincial First Prize, Chinese Physics Olympiad (2021, 2022)",
    "Second Prize, ASC25 World Student Supercomputer Challenge"
  ],
  certificates: ["Japanese-Language Proficiency Test (JLPT) N1 (2024.12)"],
  volunteering: [
    "Volunteer, Boao Forum for Asia Youth Summit 2024 (Hong Kong)",
    "Volunteer, HKUST(GZ) Campus Events (12 hours)"
  ]
};