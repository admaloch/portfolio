import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "chatvector-ai",
    position: "Open Source Founder & Technical Lead",
    company: "ChatVector AI",
    location: "Remote",
    startDate: new Date("2025-11-01"),
    endDate: "Present",
    description: [
      "Founded and lead an open-source RAG engine project with multiple active contributors.",
      "Designed and implemented comprehensive project infrastructure including GitHub environment setup, issue tracking, and automated workflows.",
      "Established clear documentation, onboarding processes, and contribution guidelines to facilitate community collaboration.",
      "Managed project roadmap, kanban board, and release planning to maintain development velocity and feature prioritization.",
    ],
    achievements: [
      "Onboarded multiple contributors to the open-source project with structured onboarding documentation",
      "Set up GitHub project management infrastructure with kanban boards, automated workflows, and issue templates",
      "Created comprehensive project roadmap and clear contribution guidelines for the community",
      "Designed and documented clean project structure enabling developers to easily understand and extend codebase",
      "Established best practices for code review, testing, and documentation across contributor submissions",
      "Built inclusive community environment prioritizing accessibility, clarity, and knowledge sharing",
      "Maintained active issue management and contributor communication to support project growth",
      "Demonstrated technical leadership in guiding architectural decisions and feature prioritization",
    ],
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Project Management",
      "GitHub",
      "Documentation",
      "Community Building",
    ],
    companyUrl: "https://github.com/chatvector-ai/chatvector-ai",
    logo: "/projects/chatvector1.webp",
  },
  {
    id: "florida-memory",
    position: "Web Developer / Systems Analyst",
    company: "Florida Memory",
    location: "Tallahassee, Florida",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2025-01-01"),
    description: [
      "Modernized a high-traffic public web application serving thousands of users, shipping features and improvements in a collaborative, cross-functional team.",
      "Took ownership of diagnosing and resolving complex, full-stack production issues, reducing critical bug resolution time by ~30%.",
      "Refactored UI components for accessibility (WCAG 2.1 compliance) and implemented security best practices across the platform.",
      "Built automation scripts for internal workflows, saving an estimated 15+ hours of manual effort per month.",
    ],
    achievements: [
      "Enhanced public-facing application serving thousands of users with responsive design and improved user experience",
      "Reduced critical bug resolution time by ~30% through systematic debugging and full-stack diagnosis",
      "Built Flourish Accessibility Menu with comprehensive accessibility features (text-to-speech, translation, customization)",
      "Automated photo lab order system using batch scripting and PowerShell, eliminating manual file processing",
      "Created image-based QR code generator to integrate photo collection into marketing materials and calendars",
      "Refactored legacy UI components to WCAG 2.1 accessibility standards, improving compliance and usability",
      "Designed interactive research tools combining historical maps with database information for historians and educators",
      "Modernized development process with emphasis on code quality, testing, and documentation standards",
      "Built web features and tools transforming large datasets into accessible formats for public research",
    ],
    skills: [
      "Javascript",
      "jQuery",
      "HTML 5",
      "CSS 3",
      "Batch Scripting",
      "PowerShell",
      "MySQL",
      "PHP",
      "Bootstrap",
    ],
    companyUrl: "https://www.floridamemory.com",
    logo: "/experience/fm_logo.webp",
  }
  
];
