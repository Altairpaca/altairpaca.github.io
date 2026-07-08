// Profile Configuration
const profile = {
  displayName: "Altair Li",
  academicName: "Zhenzhuo Li",
  academicStatus: "HKUST(GZ) DSA Year 3",
  titleSuffix: "AI for Financial Markets",
  email: "altairpaca@gmail.com",
  avatar_url: "assets/avatar.jpg",
  career_goals: "I am Altair Li (李臻卓), a Year 3 undergraduate at The Hong Kong University of Science and Technology (Guangzhou) specializing in Data Science and Big Data Technology. My academic publications appear under my legal name, Zhenzhuo Li.\n\nMy research focuses on AI for financial markets, verifiable multi-agent systems for financial research, and LLM reliability under domain feedback. I have contributed to financial time-series forecasting (ACM ICAIF 2025) and am exploring multi-agent debate as a verification mechanism.",

  // Education
  education: [
    {
      institution: "Hong Kong University of Science and Technology (Guangzhou)",
      degree: "B.Sc. Data Science and Big Data Technology",
      dates: "2023 - 2027 (Expected)",
      gpa: "CGA 3.807 / Major CGA 3.837 (out of 4.3)",
      location: "Guangzhou, China"
    },
    {
      institution: "Osaka University",
      degree: "Exchange Student",
      dates: "Fall 2025",
      location: "Osaka, Japan"
    },
    {
      institution: "Zhengzhou Foreign Language School",
      degree: "High School Diploma",
      dates: "2020 - 2023",
      location: "Zhengzhou, China"
    }
  ],

  // Skills organized by category
  skills: {
    programmingData: ["Python", "C++", "SQL", "NumPy", "Pandas", "SciPy", "scikit-learn"],
    aiml: ["PyTorch", "Transformers", "LightGBM", "XGBoost", "LangGraph", "LangChain", "TensorFlow"],
    financialMl: ["Factor Modeling", "IC/Decay Analysis", "Walk-Forward Backtesting", "Transaction-Cost-Aware Evaluation", "Regime-Aware Risk Control"],
    systems: ["Linux", "Git", "Docker", "CUDA", "MPI", "Slurm", "MySQL/PostgreSQL"],
    languages: ["Chinese (native)", "English (academic working proficiency)", "Japanese (JLPT N1)"]
  },

  // Projects
  projects: [
    {
      name: "LENS: Large Pre-trained Transformer for Exploring Financial Time Series Regularities",
      date: "June 2024 - Oct 2024",
      description: "Co-authored a research paper proposing a novel pre-trained Transformer framework for financial time-series analysis. Designed and implemented high-concurrency data preprocessing pipelines for TB-level financial trading data, achieving 13× speedup on data cleaning and 6× speedup on statistical aggregation.",
      outcomes: "Accepted at ACM International Conference on AI in Finance (ICAIF) 2025.",
      tech: ["Python", "PyTorch", "Pandas", "NumPy"],
      isPublished: true,
      conference: "ACM ICAIF",
      year: 2025,
      links: {
        paper: "https://doi.org/10.1145/3768292.3770349"
      }
    },
    {
      name: "SpatialReflect: Spatially Disentangled Reflection for Controllable Generation",
      date: "Jun 2025 - Present",
      description: "Identified three independent failure modes in MultiDiffusion-based multi-region generation; proposed a training-free framework with formal guarantees (3 theorems, 2 propositions). First-author research demonstrating theoretical modeling ability.",
      outcomes: "Submitted to PRCV 2026 (First Author).",
      tech: ["Python", "PyTorch", "Stable Diffusion", "Hugging Face Diffusers"],
      isPublished: false,
      links: {}
    },
    {
      name: "ASC World Student Supercomputer Challenge 2025",
      date: "Dec 2024 - Feb 2025",
      description: "Core team member in global finals. Optimized HPC applications using C++, MPI, and Slurm for performance tuning.",
      outcomes: "Awarded Second Prize in Global Finals.",
      tech: ["C++", "Python", "Linux", "MPI", "Slurm", "OpenMP"],
      isPublished: false,
      links: {}
    },
    {
      name: "ASC World University Supercomputer Competition 2026",
      date: "Jan 2026 - May 2026",
      description: "Contributed I/O optimization for large-model inference on NVIDIA A800 cluster; co-developed Qibotn quantum circuit simulation backend and algorithm optimization.",
      outcomes: "Awarded First Prize. UniFOLM-WMA Track.",
      tech: ["C++", "Python", "CUDA", "MPI", "Slurm"],
      isPublished: false,
      links: {}
    }
  ],

  // Honors and achievements
  awards: [
    "First Prize - ASC World University Supercomputer Competition 2026 (UniFOLM-WMA Track)",
    "Dean's List - HKUST(GZ) (3 semesters: 2023-24 Spring, 2024-25 Fall, 2024-25 Spring)",
    "INFH Lizhi Innovation Talent Scholarship - HKUST(GZ) (2025)",
    "Second Prize - ASC World Student Supercomputer Challenge 2025 (Global Finals)",
    "Honorable Mention - Mathematical Contest in Modeling (MCM, 2025)",
    "Provincial First Prize - Chinese Physics Olympiad (2021, 2022)",
    "Admission Scholarship (First Class) - HKUST(GZ) (2023)",
    "Outstanding Student Cadre / Merit Student - Zhengzhou Foreign Language School (2020-2023)"
  ],
  certificates: [
    "Japanese-Language Proficiency Test (JLPT) N1 (Dec 2024)"
  ],
  volunteering: [
    "Committee of Student Affairs Member - HKUST(GZ) (Jul 2024 - Jun 2025)",
    "Delegate - Boao Forum for Asia Youth Summit (Nov 2024)",
    "Volunteer Service - Zhengzhou Foreign Language School (2020-2022, 50+ hours)",
    "Participant - ABBA Youth Association / Prudential Elite Internship Camp (Feb 2025)"
  ],

  // Social links
  social: {
    github: "https://github.com/altairpaca",
    linkedin: "https://www.linkedin.com/in/altair-li/",
    google_scholar: "https://scholar.google.com/citations?user=md5Z-D8AAAAJ",
    resume: "assets/resume.pdf"
  }
};
