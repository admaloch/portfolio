import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Davis Maloch's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Languages, frameworks and practices.",
    metadata: {
      title: "Skills",
      description:
        "Davis Maloch's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Davis Maloch's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Send me a message and I will get back to you as soon as possible.",
    metadata: {
      title: "Contact",
      description: "Contact Davis Maloch.",
    },
  },

  resume: {
    title: "Resume",
    description: "Davis Maloch's resume.",
    metadata: {
      title: "Resume",
      description: "Davis Maloch's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional Experience",
    metadata: {
      title: "Experience",
      description:
        "Davis Maloch's professional journey and experience timeline.",
    },
  },
  education: {
    title: "Education",
    description: "Degrees, courses and certifications.",
    metadata: {
      title: "Education",
      description: "Davis Maloch's education, degrees, and certifications.",
    },
  },
};
