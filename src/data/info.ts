export interface EducationItem {
  stage: string;
  institution: string;
  year: string;
  metrics: string[];
}

export interface ExamMetric {
  subject?: string;
  score: string;
}

export interface CompetitiveExam {
  name: string;
  year: string;
  metrics: { [key: string]: string | number };
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const PERSONAL_INFO = {
  name: "Rut Koticha",
  role: "Software Developer",
  email: "koticharut@gmail.com",
  phone: "+91 94086 61864",
  location: "Rajkot, Gujarat, India",
  languages: [
    { name: "Gujarati", level: "Native" },
    { name: "Hindi", level: "Fluent" },
    { name: "English", level: "Professional" }
  ],
  resumeUrl: "#", // User can replace with link to a PDF
  githubUrl: "https://github.com/RutKoticha", // Placeholder default
  linkedinUrl: "https://linkedin.com/in/rut-koticha" // Placeholder default
};

export const SKILLS = {
  languages: ["C", "C++", "Java", "Python", "PHP", "C#", "JavaScript", "TypeScript", "HTML", "CSS"],
  technologies: ["React", "Angular", "Next.js", "Node.js", "Spring Boot", ".Net Core", ".Net Framework"],
  databases: ["PostgreSQL", "MySQL", "Oracle SQL", "MongoDB"]
};

export const EDUCATION: EducationItem[] = [
  {
    stage: "B.Tech. in Computer Engineering",
    institution: "Dharmsinh Desai University",
    year: "2023 - Present",
    metrics: ["Ongoing Undergraduate Studies"]
  },
  {
    stage: "Higher Secondary (12th)",
    institution: "Shree G.K. Dholakiya School",
    year: "2021 - 2023",
    metrics: [
      "Overall Percentile: 98.02",
      "Science Theory: 97.32",
      "Overall Theory: 98.59"
    ]
  },
  {
    stage: "Secondary School (10th)",
    institution: "Divine High School",
    year: "2019 - 2021",
    metrics: ["Percentile: 99.37"]
  }
];

export const COMPETITIVE_EXAMS: CompetitiveExam[] = [
  {
    name: "GATE",
    year: "2024 / 2025",
    metrics: {
      "All India Rank (AIR)": "11705",
      "GATE Score": "452",
      "Marks": "38.68 / 100"
    }
  },
  {
    name: "GUJCET",
    year: "2023",
    metrics: {
      "Percentile": "98.45",
      "Physics": "35.50 / 40",
      "Chemistry": "36.75 / 40",
      "Maths": "30.50 / 40",
      "Total": "102.75 / 120"
    }
  },
  {
    name: "JEE Mains",
    year: "2023",
    metrics: {
      "NTA Score": "94.4545125",
      "All India Rank (AIR)": "62968",
      "Physics": "95.18",
      "Chemistry": "91.19",
      "Maths": "80.76",
      "Status": "Qualified for JEE Advanced"
    }
  }
];

export const STATS = {
  leetcode: {
    username: "RutKoticha",
    solved: "250+",
    rank: "Top 15%"
  },
  codeforces: {
    handle: "RutKoticha",
    rating: "1400+",
    division: "Specialist"
  },
  codechef: {
    handle: "rut_koticha",
    rating: "1600+",
    stars: "3★"
  }
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "clinix",
    title: "Clinix",
    description: "An advanced, highly-secure healthcare clinic management portal streamlining patient electronic health records (EHR) and schedules.",
    longDescription: "Clinix is a comprehensive clinic management application designed to handle patient profiles, electronic health records (EHR), dynamic doctor scheduling, and real-time medical prescriptions. Built with security and clinical workflows in mind, it minimizes admin overhead while keeping critical medical records safely encrypted.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/RutKoticha/clinix"
  },
  {
    id: "sourcenode",
    title: "SourceNode",
    description: "A fast, interactive graphical documentation and node-linking builder for tracking software dependency graphs.",
    longDescription: "SourceNode is a developer productivity utility for visualizing and mapping complex code-level dependency graphs and microservices architecture. It allows developers to render structural relationships dynamically, trace event flows, and query nodes using a customized, minimal node editor UI.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/RutKoticha/sourcenode"
  },
  {
    id: "markipedia",
    title: "Markipedia",
    description: "An offline-first collaborative Markdown wiki system featuring live editing previews and automated version history.",
    longDescription: "Markipedia provides a fast, structured offline-first workspace for capturing team knowledge in Markdown format. Supporting side-by-side rendering, hierarchical article organization, local database caching, and change logs, it offers an elegant developer-friendly knowledge base.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/RutKoticha/markipedia"
  }
];
