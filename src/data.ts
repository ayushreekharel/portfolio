// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Ayushree Kharel",
  tagline: "biometrics and trustworthy machine learning, one experiment at a time.",
  role: "M.S. Computer Science student & Graduate Research Assistant",
  affiliation: "University of Wyoming",
  location: "Laramie, WY",
  email: "ayushreekharel@gmail.com",
  github: "https://github.com/ayushreekharel",
  linkedin: "https://www.linkedin.com/in/ayushreekharel",
  cv: "cv_ayushree_.pdf",
  photo: "profile.png",
};

// Each paragraph is rendered separately on the home section.
export const bio: string[] = [
  "I'm an M.S. student in Computer Science at the University of Wyoming, where I work as a Graduate Research Assistant on biometrics and trustworthy machine learning. My work spans privacy-aware age verification, face and voice biometrics, biometric verification in virtual reality, and the adversarial robustness, fairness, and privacy of face analytics models.",
  "Before graduate school, I spent a year as a Research and Development Associate at Codavatar Tech in Nepal, building data and ML systems that people actually used: a lead-scoring model that lifted sales conversion by 30%, an LLM-powered analytics layer over sales databases using the Model Context Protocol, and a faster document pipeline for a plagiarism detection platform.",
  "I hold a B.E. in Computer Engineering from Tribhuvan University. I enjoy work where careful statistics meets real users: defining the right metric, running the controlled comparison, and making the result understandable to people who aren't engineers.",
];

export type NewsItem = { date: string; text: string; link?: { label: string; href: string } };

export const news: NewsItem[] = [
  {
    date: "Nov 2026",
    text: "Presented our paper on adversarial vulnerabilities and defenses in facial gender classification at IEEE CARS 2026.",
    link: { label: "talks", href: "#talks" },
  },
  {
    date: "Nov 2026",
    text: "Presented a poster on RiskAuth, my ongoing work on risk-aware continuous age verification, at IEEE CARS 2026.",
    link: { label: "research", href: "#research" },
  },
  {
    date: "2026",
    text: "“Ocular Verification for Virtual Reality” accepted to CVIP 2026.",
    link: { label: "arXiv", href: "https://arxiv.org/abs/2607.20790" },
  },
  {
    date: "2026",
    text: "“Towards Trustworthy Face Analytics” accepted to IEEE CARS 2026.",
  },
  {
    date: "Jan 2026",
    text: "Started my M.S. in Computer Science at the University of Wyoming and joined the lab as a Graduate Research Assistant.",
  },
  {
    date: "Mar 2025",
    text: "Graduated with a B.E. in Computer Engineering from Tribhuvan University.",
  },
];

export type Publication = {
  venue: string;
  title: string;
  authors: string; // "A. Kharel" is highlighted automatically
  where: string;
  year: number;
  links?: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    venue: "IEEE CARS",
    title:
      "Towards Trustworthy Face Analytics: Adversarial Vulnerabilities and Defense Mechanisms in Facial Gender Classification",
    authors: "A. Kharel, D. Shukla, and S. Banerjee",
    where: "IEEE CARS",
    year: 2026,
  },
  {
    venue: "CVIP",
    title: "Ocular Verification for Virtual Reality",
    authors: "H. Singh, R. Tran, A. Kharel, and S. Banerjee",
    where: "CVIP",
    year: 2026,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2607.20790" }],
  },
];

export type Talk = {
  date: string;
  kind: string;
  event: string;
  location?: string;
  title: string;
  description?: string;
  // Put images in public/talks/ and list them here, e.g. "talks/cars-poster.jpg"
  photos?: { src: string; alt: string }[];
};

export const talks: Talk[] = [
  {
    date: "Nov 2026",
    kind: "Paper presentation",
    event: "IEEE CARS 2026",
    title:
      "Towards Trustworthy Face Analytics: Adversarial Vulnerabilities and Defense Mechanisms in Facial Gender Classification",
    description: "",
    photos: [],
  },
  {
    date: "Nov 2026",
    kind: "Poster",
    event: "IEEE CARS 2026",
    title: "RiskAuth: Risk-Aware Continuous Age Verification with Multimodal Fusion",
    description: "",
    photos: [],
  },
];

// Ongoing work shown in the "research" section.
export const currentResearch = [
  {
    title: "RiskAuth: Risk-Aware Continuous Age Verification with Multimodal Fusion",
    status: "Ongoing",
    summary:
      "Online services with age-restricted content need to protect minors, but heavy biometric checks on every site are a privacy overreach. RiskAuth matches the level of verification to the risk of each site. A multimodal LLM reads a page and decides its risk tier, age threshold, and which biometric (face, voice, both, or none) to ask for. A continuous authorization policy then decides how often to re-verify the user during a session.",
    highlights: [
      "Face–voice Fusion Transformer that trains only 0.77M parameters on frozen encoders and reaches 4.67-year MAE on VoxCeleb2, beating a fully fine-tuned 86M-parameter audio-visual model (6.42) and the MiVOLO face estimator (5.84).",
      "MLLM risk assessors (Qwen3-VL-8B, Gemini 3.5 Flash-Lite) matched the intended risk tier on 20 of 24 test pages, and kept face verification on every clearly age-restricted site even when its age gate was removed.",
    ],
    tags: ["Biometrics", "Age estimation", "Multimodal fusion", "MLLMs", "Privacy"],
  },
];

export type Role = {
  title: string;
  org: string;
  place: string;
  dates: string;
  points: string[];
};

export const research: Role[] = [
  {
    title: "Graduate Research Assistant",
    org: "University of Wyoming",
    place: "Laramie, WY",
    dates: "Jan 2026 – Present",
    points: [
      "Building RiskAuth, a risk-aware continuous age verification framework that pairs a face–voice Fusion Transformer (4.67-year MAE on VoxCeleb2) with an MLLM that sets each website's risk tier and required biometric.",
      "Ran statistical fairness analysis (Equalized Odds and Demographic Parity differences, chi-square tests) and membership-inference privacy tests on a ResNet-18 classifier, after raising its robust accuracy from 0.09% to 95.74% under PGD attack with adversarial training.",
      "Reduced Equal Error Rate (EER) by 11% in VR biometric verification by fusing iris and periocular modalities, after evaluating ISO/IEC iris quality metrics on unconstrained data.",
    ],
  },
];

export const work: Role[] = [
  {
    title: "Research and Development Associate",
    org: "Codavatar Tech Private Limited",
    place: "Kalopul, Nepal",
    dates: "Dec 2024 – Dec 2025",
    points: [
      "Increased sales conversion by 30% versus the pre-launch period by analyzing user behavior in 200K Mixpanel event records: EDA, data cleaning, 99 engineered features, and an XGBoost lead-scoring model (84% held-out accuracy) the sales team used to prioritize leads.",
      "Replaced manual sales reporting with self-serve analytics by connecting sales databases to an LLM via the Model Context Protocol (MCP), letting non-technical stakeholders query real-time metrics in plain English.",
      "Cut document processing time from 6–7 to 3–4 minutes on a plagiarism detection platform searching 60K+ documents (FastAPI, Elasticsearch, AWS S3) by diagnosing CPU bottlenecks and introducing Celery and Redis.",
    ],
  },
];

export type Project = {
  name: string;
  stack: string[];
  points: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Retrieval-Augmented Nutrition Assistant",
    stack: ["Python", "LangChain", "ChromaDB", "Groq", "Streamlit"],
    points: [
      "Controlled comparison on a 250-question test set: hybrid search with cross-encoder re-ranking raised Answer Relevancy from 0.79 to 0.89 and Faithfulness from 0.89 to 0.91, confirmed by a paired t-test (p < 0.05, 95% CI +0.07 to +0.13).",
      "Iterated on prompts for query rewriting and multi-turn memory; validated outputs with a custom LLM-as-judge and 3-layer safety guardrails.",
    ],
  },
  {
    name: "Transaction Monitoring Dashboard",
    stack: ["SQL", "PostgreSQL", "Power BI", "DAX"],
    points: [
      "Modeled transaction data in PostgreSQL with SQL aggregation views feeding a Power BI dashboard tracking volume, value at risk, and fraud rate by transaction type and time.",
      "Built detection rate and false-positive volume as DAX measures with an adjustable risk threshold, making the alert-volume vs. detection-coverage trade-off visible to non-technical reviewers.",
    ],
  },
];

export const education = [
  {
    school: "University of Wyoming",
    degree: "M.S. in Computer Science",
    place: "Laramie, WY",
    dates: "Jan 2026 – Dec 2027 (expected)",
  },
  {
    school: "Tribhuvan University",
    degree: "B.E. in Computer Engineering",
    place: "Kathmandu, Nepal",
    dates: "Apr 2020 – Mar 2025",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Data & Languages", items: ["SQL", "PostgreSQL", "Python (Pandas, NumPy, SciPy)", "C++"] },
  {
    group: "Statistics & Experimentation",
    items: ["A/B Testing", "Hypothesis Testing", "Statistical Analysis", "EDA", "Feature Engineering"],
  },
  {
    group: "Machine Learning",
    items: ["Regression", "Classification", "XGBoost", "scikit-learn", "PyTorch", "TensorFlow", "NLP"],
  },
  { group: "Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"] },
  {
    group: "AI & Tools",
    items: ["Prompt Engineering", "RAG", "LangChain", "MCP", "ETL/ELT", "Apache Airflow", "Git", "Docker", "AWS"],
  },
];

export const certifications = ["Machine Learning Specialization (DeepLearning.AI)"];

export const leadership = [
  {
    title: "College Representative, IEEE Pulchowk",
    dates: "Jul 2023 – Jul 2024",
    text: "Liaison between IEEE and the student body; promoted technical events and grew participation.",
  },
  {
    title: "First Runner-Up, Kathcode: Code for Sustainability Hackathon",
    text: "",
  },
  {
    title: "Participant, Hacking for Empowered Nepal (All-Female Hackathon)",
    text: "",
  },
];
