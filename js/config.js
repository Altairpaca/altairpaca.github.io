// Profile Configuration
const profile = {
  displayName: "Altair Li",
  academicName: "Zhenzhuo Li",
  academicStatus: "HKUST(GZ) DSA Year 3",
  titleSuffix: "AI & FinTech Enthusiast",
  email: "altairpaca@gmail.com", // Primary email; academic: zli743@connect.hkust-gz.edu.cn
  avatar_url: "assets/avatar.jpg",
  career_goals: "I am Altair Li (李臻卓), a Year 3 undergraduate at The Hong Kong University of Science and Technology (Guangzhou) specializing in Data Science and Big Data Technology. My academic publications appear under my legal name, Zhenzhuo Li.\n\nSeeking to merge cutting-edge AI research with financial innovation, I aim to pursue advanced studies in Financial Technology and contribute to intelligent systems in quantitative finance and risk management.",

  // Education
  education: [
    {
      institution: "The Hong Kong University of Science and Technology (Guangzhou)",
      degree: "B.Sc. Data Science and Big Data Technology",
      dates: "2023 - 2027 (Expected)",
      gpa: "3.9/4.3",
      location: "Guangzhou, China"
    },
    {
      institution: "The University of Osaka",
      degree: "Exchange Student",
      dates: "Fall 2025",
      location: "Osaka, Japan"
    },
    {
      institution: "Zhengzhou Foreign Language School",
      degree: "High School Diploma",
      dates: "2020 - 2023",
      // gpa: "N/A", // High school GPA not provided; replace if available
      location: "Zhengzhou, China"
    }
  ],

  // Skills organized by category
  skills: {
    programmingLanguages: ["Python", "C++", "SQL", "JavaScript"],
    dataScience: ["Machine Learning", "Deep Learning", "Statistical Analysis", "Time Series Analysis", "Natural Language Processing"],
    frameworksLibraries: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "XGBoost"],
    financeRelated: ["Financial Modeling", "Quantitative Analysis", "Risk Management", "Algorithmic Trading"],
    toolsPlatforms: ["Git", "Docker", "Linux", "LaTeX", "Tableau", "Jupyter", "Slurm", "MPI"]
  },

  // Projects
  projects: [
    {
      name: "LENS: Large Pre-trained Transformer for Exploring Financial Time Series Regularities",
      date: "June 2024 - Aug 2025",
      description: "Co-authored a research paper proposing a novel pre-trained Transformer framework for financial time-series analysis. Designed and implemented the multi-market data normalization pipeline for NASDAQ and other exchanges.",
      outcomes: "Accepted at ACM International Conference on AI in Finance (ICAIF) 2025.",
      tech: ["Python", "PyTorch", "Pandas", "NumPy"],
      isPublished: true,
      conference: "ACM ICAIF",
      year: 2025,
      links: {
        paper: "https://doi.org/10.1145/3768292.3770349", // ← Replace with actual DOI after publication
        // github: "#", // Not publicly available; keep as placeholder
        // demo: "#"
      }
    },
    {
      name: "SpatialReflect: Spatial-Guided Reflection for Region-Specific Stylization",
      date: "Jan 2025 - Jan 2026",
      description: "First-author research on diffusion model-based image stylization with spatial control. Developed automated evaluation tools and conducted ablation studies.",
      outcomes: "Manuscript under review at IEEE ICME 2026.",
      tech: ["Python", "PyTorch", "Stable Diffusion", "Hugging Face Diffusers"],
      isPublished: false,
      links: {
        // paper: "#", // Will update upon submission
        // github: "#",
        // demo: "#"
      }
    },
    {
      name: "ASC25 World Student Supercomputer Challenge",
      date: "Dec 2024 - Feb 2025",
      description: "Core team member in global finals. Optimized HPC applications using C++, MPI, and Slurm for performance tuning.",
      outcomes: "Awarded Second Prize in Global Finals.",
      tech: ["C++", "Python", "Linux", "MPI", "Slurm", "OpenMP"],
      isPublished: false,
      links: {
        // paper: "#",
        // github: "#",
        // demo: "#"
      }
    },
    {
      name: "Mathematical Contest in Modeling (MCM)",
      date: "Feb 2025",
      description: "Team member in international mathematical modeling competition. Focused on problem formulation and Python-based simulation.",
      outcomes: "Received Honorable Mention award.",
      tech: ["Python", "NumPy", "PyTorch", "Matlab", "LaTeX"],
      isPublished: false,
      links: {
        // paper: "#",
        // github: "#",
        // demo: "#"
      }
    }
  ],

  // Honors and achievements
  awards: [
    "Dean's List - HKUST(GZ) (Multiple Semesters: Spring 2024, Fall 2024, etc.)",
    "Second Prize - ASC World Student Supercomputer Challenge (Global Finals, 2025)",
    "Honorable Mention - Mathematical Contest in Modeling (MCM, 2025)",
    "Provincial First Prize - Chinese Physics Olympiad (2021, 2022)",
    "Outstanding Student Cadre / Merit Student - Zhengzhou Foreign Language School (2020-2023)"
  ],
  certificates: [
    "Japanese-Language Proficiency Test (JLPT) N1 (Dec 2024)",
    "Insurance Intermediaries Qualifying Examination (IIQE) - Planned for July 2026" // Future cert; keep as note
  ],
  volunteering: [
    "Committee of Student Affairs Member - HKUST(GZ) (Jul 2024 - Jun 2025)",
    "Volunteer Service - Zhengzhou Foreign Language School (2020-2022, 50+ hours)",
    "Delegate - Boao Forum for Asia Youth Summit (Nov 2024)",
    "Participant - ABBA Youth Association / Prudential Elite Internship Camp (Feb 2025)"
  ],

  // Social links
  social: {
    github: "https://github.com/altairpaca",
    linkedin: "https://www.linkedin.com/in/altair-li/", // ← Confirm your LinkedIn URL
    google_scholar: "https://scholar.google.com/citations?user=md5Z-D8AAAAJ",
    resume: "assets/resume.pdf"
  }
};