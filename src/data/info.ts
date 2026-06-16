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
  resumeUrl: "#",
  githubUrl: "https://github.com/RutKoticha",
  linkedinUrl: "https://www.linkedin.com/in/rut-koticha-1131412b4"
};

export const SKILLS = {
  languages: ["C", "C++", "Java", "Python", "PHP", "JS", "TS", "HTML", "CSS"],
  technologies: ["React", "Next.js", "Angular", "Tailwind CSS", "Spring Boot", "Shadcn/ui"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  tools: ["Git/Github", "Docker", "Linux", "Postman", "VS Code", "IntelliJ IDEA", "Neovim"]
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
      "Total": "102.75 / 120"
    }
  },
  {
    name: "JEE Mains",
    year: "2023",
    metrics: {
      "NTA Score": "94.4545125",
      "All India Rank (AIR)": "62968",
    }
  }
];

export const STATS = {
  leetcode: {
    username: "koticharut",
    solved: "100+",
    rating: "Rating: 1,292",
    url: "https://leetcode.com/u/koticharut/"
  },
  codeforces: {
    handle: "RutKoticha",
    rating: "893",
    division: "Newbie",
    url: "https://codeforces.com/profile/RutKoticha"
  }
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "clinix",
    title: "Clinix",
    description: "A clinic management system designed to help clinics manage their internal data like patients, appointments, finances etc.",
    longDescription: "Clinix is a comprehensive clinic management application designed to handle patient profiles, electronic health records (EHR), dynamic doctor scheduling, and real-time medical prescriptions. Built with security and clinical workflows in mind, it minimizes admin overhead while keeping critical medical records safely encrypted.",
    technologies: ["Angular", "Spring Boot", "Postgres", "Docker"],
    github: "https://github.com/RutKoticha/clinix"
  },
  {
    id: "sourcenode",
    title: "SourceNode",
    description: "An attempt to facilitate dev teams, tools they use everyday integrating realtime chat, kanban board for task management, secret management using secure vault and integration with Github to monitor repository activity.",
    longDescription: "SourceNode is a developer productivity utility integrating realtime chat, a kanban board for task management, secret management using a secure vault, and integration with GitHub to monitor repository activity. It serves as a unified workspace for engineering teams.",
    technologies: ["Next.js", "Tailwind CSS", "Spring Boot", "Fast API", "Docker", "Postgres"],
    github: "https://github.com/RutKoticha/sourcenode"
  },
  {
    id: "markipedia",
    title: "Markipedia",
    description: "Reimagination of Wikipedia to be like medium.com, articles written in markdown, simple ui, easy to read rendering of markdown etc.",
    longDescription: "Markipedia provides a fast, structured wiki workspace for capturing team knowledge in Markdown format. Inspired by medium.com, it renders clean, easy-to-read markdown articles with live editing previews and automated version history.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js"],
    github: "https://github.com/RutKoticha/markipedia"
  }
];
