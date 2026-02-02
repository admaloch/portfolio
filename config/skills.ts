import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  { name: "Python", icon: Icons.python },
  { name: "Javascript", icon: Icons.javascript },
  { name: "Typescript", icon: Icons.typescript },
  { name: "C#", icon: Icons.csharp },
  { name: ".NET", icon: Icons.dotnet },
  { name: "React", icon: Icons.react },
  { name: "Vue.js", icon: Icons.vue },
  { name: "Next.js", icon: Icons.nextjs },
  { name: "Node.js", icon: Icons.nodejs },
  { name: "FastAPI", icon: Icons.fastapi },
  { name: "Express.js", icon: Icons.express },
  { name: "PostgreSQL", icon: Icons.postgresql },
  { name: "MongoDB", icon: Icons.mongodb },
  { name: "MySQL", icon: Icons.mysql },
  { name: "Redis", icon: Icons.redis },
  { name: "Docker", icon: Icons.docker },
  { name: "Supabase", icon: Icons.supabase },
  { name: "HTML 5", icon: Icons.html5 },
  { name: "CSS 3", icon: Icons.css3 },
  { name: "Tailwind CSS", icon: Icons.tailwindcss },
  { name: "Bootstrap", icon: Icons.bootstrap },
  { name: "Vite", icon: Icons.vite },
  { name: "AWS", icon: Icons.amazonaws },
  { name: "Git", icon: Icons.git },
  { name: "GitHub", icon: Icons.gitHub },
  { name: "PHP", icon: Icons.php },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 10);
