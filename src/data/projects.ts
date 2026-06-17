import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  isOngoing?: boolean;
}

export interface ProjectWithContent extends ProjectData {
  content: string;
}

export function getAllProjects(): ProjectData[] {
  const dirPath = path.join(process.cwd(), "src/data/projects");
  const files = fs.readdirSync(dirPath);
  
  const projects = files
    .filter(file => file.endsWith(".md"))
    .map(file => {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      
      return {
        id: data.id || file.replace(".md", ""),
        title: data.title || "",
        description: data.description || "",
        technologies: data.technologies || [],
        github: data.github || undefined,
        isOngoing: data.isOngoing || false,
      };
    });

  const order = ["clinix", "sourcenode", "markipedia"];
  return projects.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}

export function getProjectById(id: string): ProjectWithContent | null {
  const filePath = path.join(process.cwd(), `src/data/projects/${id}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  return {
    id: data.id || id,
    title: data.title || "",
    description: data.description || "",
    technologies: data.technologies || [],
    github: data.github || undefined,
    isOngoing: data.isOngoing || false,
    content,
  };
}
