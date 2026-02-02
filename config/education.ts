import { ValidSkills } from "./constants";

export interface EducationInterface {
  id: string;
  degree: string;
  institution: string;
  location: string;
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  focus?: string[];
  curriculum?: string[];
  institutionUrl?: string;
  logo?: string;
}

export const education: EducationInterface[] = [
  {
    id: "wgu",
    degree: "B.S. in Software Engineering",
    institution: "Western Governors University",
    location: "Online",
    description: [
      "Comprehensive software engineering degree focusing on full-stack development, cloud technologies, and modern development practices.",
      "Completed coursework in software architecture, data structures, system design, and development methodologies.",
    ],
    achievements: [
      "Built full-stack cloud-based mobile Android app with real-time data synchronization",
      "Worked alongside WGU development community on collaborative projects",
      "Completed capstone project demonstrating comprehensive software engineering practices",
      "Applied MVVM architecture patterns and dependency injection in production applications",
    ],
    skills: [
      "C#",
      ".NET",
      "Python",
      "SQL",
      "Android",
      "Firebase",
      "Google Cloud",
      "XAML",
      "OOP",
    ],
    focus: [
      "C#",
      ".NET",
      "Python",
      "SQL",
      "Backend Development",
      "OOP",
      "Web/Mobile Development",
    ],
    curriculum: [
      "Software Architecture & Design",
      "Data Structures & Algorithms",
      "System Design",
      "Development Methodologies",
      "Software QA & Testing",
      "SDLC & Agile Practices",
    ],
    institutionUrl: "https://www.wgu.edu",
    logo: "/education/wgu-logo.webp",
  },
  {
    id: "fsu_music",
    degree: "Bachelor of Arts in Music",
    institution: "Florida State University",
    location: "Tallahassee, FL",
    description: [
      "Liberal arts music degree with emphasis on performance, composition, music technology, and the business of music.",
      "Combined academic music theory with applied private study and hands-on production and performance experience.",
    ],
    achievements: [
      "Completed advanced coursework in music theory, composition, and analysis",
      "Participated in private studio instruction focused on technical development and performance",
      "Gained practical experience in music technology, recording, and production workflows",
      "Studied music business principles including publishing, copyright, and industry operations",
    ],
    skills: [
      "Music Theory",
      "Composition",
      "Performance",
      "Music Technology",
      "Audio Production",
      "Critical Listening",
    ],
    focus: [
      "Private Music Studies",
      "Composition & Theory",
      "Music Technology",
      "Music Business",
    ],
    curriculum: [
      "Private Studio Instruction",
      "Music Theory & Analysis",
      "Composition",
      "Music Technology & Recording",
      "Music Business & Industry Studies",
      "Performance & Ensemble Work",
    ],
    institutionUrl: "https://www.fsu.edu",
    logo: "/education/fsu-logo.webp",
  },
  {
    id: "aws_cloud_practitioner",
    degree: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services (AWS)",
    location: "Online",
    description: [
      "Foundational cloud certification validating understanding of AWS Cloud concepts, services, security, and pricing models.",
      "Demonstrates knowledge of core AWS infrastructure, architectural principles, and cloud best practices.",
    ],
    achievements: [
      "Earned AWS Certified Cloud Practitioner credential, validating foundational cloud knowledge",
      "Demonstrated understanding of AWS global infrastructure, security, and shared responsibility model",
      "Applied AWS pricing, billing, and cost optimization concepts across common cloud use cases",
      "Gained familiarity with core AWS services including EC2, S3, Lambda, and container orchestration with EKS (Kubernetes)",
    ],
    skills: [
      "AWS Core Services",
      "Cloud Computing Concepts",
      "Cloud Security",
      "IAM",
      "Containerization",
      "Amazon EC2",
      "Amazon S3",
      "AWS Lambda",
      "Amazon EKS (Kubernetes)",
    ],
    focus: [
      "Cloud Fundamentals",
      "AWS Infrastructure",
      "Security & Compliance",
      "Cost Optimization",
    ],
    curriculum: [
      "AWS Global Infrastructure",
      "Compute, Storage & Networking Services",
      "Security & Identity",
      "Cloud Architecture Basics",
      "Pricing & Billing Models",
    ],
    institutionUrl:
      "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    logo: "/education/aws-logo.webp",
  },
  {
    id: "itil_4_foundation",
    degree: "ITIL 4 Foundation Certificate in IT Service Management",
    institution: "PeopleCert",
    location: "Online",
    description: [
      "Industry-standard certification covering IT Service Management principles using the ITIL 4 framework.",
      "Focuses on aligning IT services with business needs through best practices and continual improvement.",
    ],
    achievements: [
      "Earned ITIL 4 Foundation certification issued by PeopleCert",
      "Demonstrated understanding of the ITIL 4 Service Value System (SVS)",
      "Applied ITSM best practices including incident, problem, and change management",
      "Studied governance, service relationships, and continual improvement models",
    ],
    skills: [
      "IT Service Management",
      "ITIL 4 Framework",
      "Service Delivery",
      "Incident Management",
      "Change Management",
      "Process Improvement",
    ],
    focus: [
      "IT Service Management",
      "Operational Excellence",
      "Business–IT Alignment",
    ],
    curriculum: [
      "ITIL Guiding Principles",
      "Service Value System (SVS)",
      "Service Management Practices",
      "Continual Improvement",
      "Governance & Service Relationships",
    ],
    institutionUrl: "https://www.peoplecert.org",
    logo: "/education/itil-logo.webp",
  },

  {
    id: "udemy_js_algorithms",
    degree: "JavaScript Algorithms and Data Structures Masterclass",
    institution: "Udemy",
    location: "Online",
    description: [
      "In-depth computer science course focused on algorithms and data structures using JavaScript.",
      "Emphasizes problem-solving patterns, performance analysis, and interview-style challenges.",
    ],
    achievements: [
      "Implemented core data structures including linked lists, trees, heaps, hash tables, and graphs from scratch",
      "Analyzed time and space complexity using Big O notation",
      "Completed extensive algorithm challenges covering sorting, searching, and recursion",
    ],
    skills: [
      "Javascript",
      "Algorithms",
      "Data Structures",
      "Big O Analysis",
      "Problem Solving",
    ],
    focus: [
      "Algorithms",
      "Data Structures",
      "Technical Interview Preparation",
      "Complexity Analysis",
    ],
    curriculum: [
      "Problem Solving Patterns",
      "Recursion",
      "Sorting & Searching Algorithms",
      "Trees & Graphs",
      "Heaps & Hash Tables",
      "Dynamic Programming",
    ],
    institutionUrl:
      "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/",
    logo: "/education/udemy-logo.webp",
  },
  {
    id: "udemy_mastering_typescript",
    degree: "Mastering TypeScript",
    institution: "Udemy",
    location: "Online",
    description: [
      "Comprehensive TypeScript course covering core language features and advanced typing concepts.",
      "Focuses on building safer, more maintainable applications with modern tooling.",
    ],
    achievements: [
      "Developed strongly-typed applications using interfaces, generics, and advanced types",
      "Configured and used the TypeScript compiler and build tooling",
      "Applied TypeScript within React projects for improved reliability and scalability",
    ],
    skills: ["Typescript", "Advanced Typing", "Generics", "OOP"],
    focus: [
      "Type Safety",
      "Scalable Front-End Architecture",
      "Modern JavaScript Tooling",
    ],
    curriculum: [
      "TypeScript Fundamentals",
      "Classes & Interfaces",
      "Generics & Utility Types",
      "Modules & Namespaces",
      "TypeScript with React",
    ],
    institutionUrl: "https://www.udemy.com/course/learn-typescript/",
    logo: "/education/udemy-logo.webp",
  },
  {
    id: "udemy_react_complete_guide",
    degree: "React – The Complete Guide",
    institution: "Udemy",
    location: "Online",
    description: [
      "End-to-end React course covering fundamentals through advanced concepts and best practices.",
      "Hands-on projects focused on building scalable, maintainable single-page applications.",
    ],
    achievements: [
      "Built multiple production-style React applications using functional components and hooks",
      "Implemented advanced state management patterns including Redux",
      "Used React Router for dynamic, multi-page SPA navigation",
    ],
    skills: [
      "React",
      "Hooks",
      "Redux",
      "React Router",
      "Component Architecture",
    ],
    focus: [
      "Front-End Development",
      "State Management",
      "Single Page Applications",
      "Modern React Patterns",
    ],
    curriculum: [
      "React Fundamentals",
      "Hooks & Side Effects",
      "Component Patterns",
      "Routing",
      "State Management with Redux",
    ],
    institutionUrl:
      "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    logo: "/education/udemy-logo.webp",
  },
  {
    id: "udemy_web_dev_bootcamp",
    degree: "The Web Developer Bootcamp",
    institution: "Udemy",
    location: "Online",
    description: [
      "Comprehensive full-stack web development bootcamp covering modern front-end and back-end technologies.",
      "Project-based learning focused on building complete, deployable web applications.",
    ],
    achievements: [
      "Built full-stack applications using HTML, CSS, JavaScript, Node.js, and Express",
      "Developed RESTful APIs and integrated databases",
      "Implemented authentication, routing, and responsive design principles",
    ],
    skills: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    focus: [
      "Full-Stack Web Development",
      "Backend APIs",
      "Responsive Design",
      "Application Architecture",
    ],
    curriculum: [
      "HTML5 & CSS3",
      "Modern JavaScript",
      "Node & Express",
      "Databases",
      "Authentication & Deployment",
    ],
    institutionUrl: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    logo: "/education/udemy-logo.webp",
  },
];

export const featuredEducation = education.slice(0, 3);
