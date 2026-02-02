import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "chatvector-ai",
    companyName: "ChatVector-AI",
    type: "Personal",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Open-source backend-first RAG engine for document intelligence and semantic search with vector embeddings",
    githubLink: "https://github.com/chatvector-ai/chatvector-ai",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/chatvector1.webp",
    pagesInfoArr: [
      {
        title: "RAG Engine Architecture",
        description:
          "Backend-first RAG engine with document ingestion, vector embeddings, and semantic retrieval",
        imgArr: ["/projects/chatvector2.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ChatVector-AI is an open-source Retrieval-Augmented Generation (RAG) engine for ingesting, indexing, and querying unstructured documents such as PDFs and text files. Think of it as an engine developers can use to build document-aware applications — such as research assistants, contract analysis tools, or internal knowledge systems — without having to reinvent the RAG pipeline.",
        "ChatVector-AI provides a clean, extensible backend foundation for RAG-based document intelligence. It handles the full lifecycle of document Q&A: document ingestion (PDF, text), text extraction and chunking, vector embedding and storage, semantic retrieval, and LLM-powered answer generation.",
        "The goal is to offer a developer-focused RAG engine that can be embedded into other applications, tools, or products — not a polished end-user SaaS. It's designed as a production-ready backend engine with batteries-included architecture, providing a fully functional FastAPI service with logging, testing, and a clean API.",
      ],
      bullets: [
        "Built production-ready FastAPI backend with Uvicorn ASGI server for high performance",
        "Implemented full document lifecycle: PDF extraction, chunking, vector embeddings, and semantic search",
        "Integrated Supabase PostgreSQL with pgvector for native vector similarity search",
        "Leveraged Google AI Studio (Gemini) for LLM-powered answer generation and embeddings",
        "Designed clean, extensible architecture focused on clarity, debuggability, and production deployment",
        "Provided complete RAG pipeline as an embeddable engine for document intelligence applications",
        "Created developer-focused solution with automatic OpenAPI docs and observability patterns",
        "Open-sourced for developers building research assistants, contract analysis tools, and knowledge systems",
      ],
    },
  },
  {
    id: "flourish-accessibility",
    companyName: "Flourish Accessibility Menu",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Fully featured accessibility menu created for the Florida Memory website and may be released as open-source",
    websiteLink: "https://flourish-accessibility-menu.netlify.app/",
    githubLink: "https://github.com/admaloch-dos/flourish-accessibility-menu",
    techStack: [
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Bootstrap",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/flourish.webp",
    pagesInfoArr: [
      {
        title: "Accessibility Menu",
        description:
          "Comprehensive accessibility toolkit with text-to-speech, translation, and customization options",
        imgArr: ["/projects/flourish.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This collaborative effort between my predecessor and I was the biggest project I've worked on to date and it aims to enhance the user experience for individuals facing disabilities that impede their access to our site's content.",
        "The menu boasts customizable options, allowing users to control how page content is presented. It also incorporates a suite of tools to facilitate more effective content access.",
      ],
      bullets: [
        "Developed comprehensive accessibility menu for Florida Memory website",
        "Integrated Google Translate JavaScript API for multi-language support",
        "Implemented Web Speech API for text-to-speech synthesis",
        "Created customizable options for content presentation control",
        "Built suite of accessibility tools using jQuery and Bootstrap",
        "Potential open-source release to benefit wider community",
      ],
    },
  },
  {
    id: "photo-transfer-tool",
    companyName: "Photo Order Transfer Tool",
    type: "Professional",
    category: ["Backend"],
    shortDescription:
      "Windows batch script designed to streamline the Florida Memory photo lab print order process",
    githubLink: "https://github.com/admaloch-dos/photo-invoice-search-tool",
    techStack: [
      "Javascript",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/photo-transfer.webp",
    pagesInfoArr: [
      {
        title: "Photo Transfer Automation",
        description:
          "Automated file location and transfer tool for invoice orders",
        imgArr: ["/projects/photo-transfer.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This tool automates the process of locating and copying files for invoice orders, significantly reducing the time and effort required by staff. It ensures accurate record-keeping and allows staff to focus on other tasks while the tool handles file retrieval and copying.",
        "It pushes out copied files in a specified location and generates list of files not found and detailed logs for tracking purposes.",
      ],
      bullets: [
        "Automated file location and copying for invoice orders",
        "Significantly reduced staff time and effort requirements",
        "Ensured accurate record-keeping throughout process",
        "Generated detailed logs and missing file reports",
        "Streamlined Florida Memory photo lab print order workflow",
      ],
    },
  },
  {
    id: "movie-brain",
    companyName: "Movie Brain",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Custom movie search app built with MERN and OMDb API",
    websiteLink: "https://movie-brain.netlify.app/",
    githubLink: "https://github.com/admaloch/react-movie-search",
    techStack: [
      "Typescript",
      "React",
      "MongoDB",
      "express.js",
      "Node.js",
      "Redux",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/react-movies.webp",
    pagesInfoArr: [
      {
        title: "Movie Search",
        description:
          "Custom movie search app with user accounts, liked lists, reviews, and social features",
        imgArr: ["/projects/react-movies.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Custom movie search app complete with backend built with MERN stack and OMDb API for movie data. This is a long term project that is a rebuild of an older project, and has been used as a means to learn and apply new concepts.",
        "Users can setup accounts, search movies, create liked lists, write reviews and see what others are watching.",
      ],
      bullets: [
        "Built full-stack application using TypeScript, React, MongoDB, Express, and Node.js",
        "Integrated RTK Query and Redux for state management",
        "Implemented user authentication and account management",
        "Created social features including liked lists and movie reviews",
        "Utilized OMDb API for comprehensive movie data",
      ],
    },
  },
    {
    id: "wgu-cloud-planner",
    companyName: "WGU Cloud Planner",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "Academic planning mobile application with real-time cloud sync, built with .NET MAUI and Firebase",
    websiteLink: "https://wgucloudplanner.netlify.app/",
    githubLink: "https://github.com/admaloch/dotnet_maui_capstone",
    techStack: [
      "Firebase",
      "Google Cloud",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/wgu-cloud-planner.webp",
    pagesInfoArr: [
      {
        title: "Mobile Application",
        description:
          "Cross-platform mobile app with course management, assessment tracking, and PDF report generation",
        imgArr: ["/projects/wgu-cloud-planner.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The WGU Cloud Planner is a full-stack mobile application designed to streamline academic planning and course management for students. Built with modern cloud-native architecture using .NET MAUI, it provides real-time synchronization across devices with robust data management capabilities.",
        "Built with .NET 9 and MAUI framework, the application implements MVVM architecture with CommunityToolkit.Mvvm for clean separation of concerns. The backend leverages Google Cloud Platform with Firebase Firestore for NoSQL database operations and real-time sync, along with Firebase Authentication for secure user management.",
        "The project demonstrates comprehensive software engineering practices including multi-project solution architecture, dependency injection, repository pattern implementation, xUnit testing framework, and GitLab CI/CD pipelines. It features course and term management, assessment tracking with validation, PDF report generation, and cross-platform deployment for Android.",
      ],
      bullets: [
        "Developed full-stack mobile application using .NET MAUI with MVVM architecture and XAML",
        "Implemented real-time cloud synchronization using Firebase Firestore on Google Cloud Platform",
        "Built secure authentication system with Firebase Auth and user-based data isolation",
        "Created PDF report generation feature for shareable progress reports and course plans",
        "Designed multi-project solution with clean separation using Core, MAUI, and Test projects",
        "Implemented comprehensive unit testing with xUnit framework and automated CI/CD pipelines",
        "Applied repository pattern for abstracted data access with dependency injection",
        "Deployed Android application with APK generation and web showcase on Netlify",
        "Included complete project documentation with UML diagrams, wireframes, and architecture specs",
      ],
    },
  },
  {
    id: "react-blackjack",
    companyName: "Blackjack Game",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Blackjack game built with MERN. Real time interactions, animations, multiplayer, database management",
    websiteLink: "https://blackjack-react.netlify.app/",
    githubLink: "https://github.com/admaloch/react-blackjack",
    techStack: [
      "React",
      "MongoDB",
      "express.js",
      "Node.js",
      "Redux",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/react-blackjack.webp",
    pagesInfoArr: [
      {
        title: "Blackjack Game",
        description:
          "Interactive blackjack game with real-time gameplay and session storage",
        imgArr: ["/projects/react-blackjack.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The backend is set up to store game sessions, allowing users to return to a previous game. The intent of this project was to work with more complex logic, state management, and solidify my proficiency in React component structuring, hooks, and to develop a deeper understanding of the component lifecycle and React re-rendering process.",
      ],
      bullets: [
        "Developed full-stack blackjack game with MERN stack",
        "Implemented RTK Query and Redux for complex state management",
        "Built real-time multiplayer functionality with animations",
        "Created session persistence to allow users to resume games",
        "Focused on React component lifecycle and re-rendering optimization",
      ],
    },
  },
  {
    id: "node-blackjack",
    companyName: "Blackjack CLI",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "A custom command line black jack game built with Node.Js and TypeScript",
    githubLink: "https://github.com/admaloch/blackjack-node-app",
    techStack: [
      "Node.js",
      "Typescript",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/node-blackjack.webp",
    pagesInfoArr: [
      {
        title: "Command Line Blackjack",
        description:
          "Terminal-based blackjack game with multiple players and realistic gameplay",
        imgArr: ["/projects/node-blackjack.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This is a command-line blackjack game built in TypeScript and Node.js. The primary aim was to enhance my grasp of core JavaScript fundamentals and delve into more intricate logic. Additionally, it provided an opportunity to immerse myself in the Node ecosystem and refine my TypeScript skills.",
        "The game faithfully mirrors a real Blackjack game with multiple decks of cards, allowing multiple players and adhering to standard rules and procedures—minus the inclusion of card suits.",
      ],
      bullets: [
        "Built command-line interface blackjack game with TypeScript and Node.js",
        "Implemented complex game logic with multiple decks and players",
        "Followed standard blackjack rules and procedures",
        "Enhanced understanding of JavaScript fundamentals and async operations",
        "Developed proficiency in the Node.js ecosystem",
      ],
    },
  },
  {
    id: "js-movie-search",
    companyName: "Javascript Movie Search",
    type: "Personal",
    category: ["Frontend", "Web Dev"],
    shortDescription:
      "Movie search app built using OMDB API",
    websiteLink: "https://admaloch.github.io/js-movie-search/",
    githubLink: "https://github.com/admaloch/js-movie-search",
    techStack: [
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/movie-js.webp",
    pagesInfoArr: [
      {
        title: "Movie Search Interface",
        description:
          "Vanilla JavaScript movie search application with OMDB API integration",
        imgArr: ["/projects/movie-js.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This is a movie search app built with vanilla JS that enables users to search for movies, TV shows, or both. The movie data is sourced from the OMDB API.",
        "This project allowed me to gain hands on experience working with asynchronous JavaScript and APIs in addition to deepening my understanding of related concepts such as working with promises, the call stack, and the browser's role in handling asynchronous operations.",
      ],
      bullets: [
        "Built movie search application using vanilla JavaScript",
        "Integrated OMDB API for movie and TV show data",
        "Gained hands-on experience with asynchronous JavaScript",
        "Deepened understanding of promises and the call stack",
        "Learned browser's role in handling async operations",
      ],
    },
  },
  {
    id: "qr-generator",
    companyName: "Image Based QR Code Generator",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Image Based QR Code Generator",
    websiteLink: "https://image-qr-generator.netlify.app/",
    githubLink: "https://github.com/admaloch-dos/qr-img-cropper-generator",
    techStack: [
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/qr-generator.webp",
    pagesInfoArr: [
      {
        title: "QR Code Generator",
        description:
          "User-friendly platform for generating, editing, and downloading image-based QR codes",
        imgArr: ["/projects/qr-generator.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At Florida Memory, we wanted the capability to embed QR codes directly into our photos for various marketing, pamphlets, calendars, etc.. During our search, we discovered an open-source solution called QART.js, which enables the generation of basic image-based codes.",
        "Inspired by its potential, we proceeded to enhance and develop it into a more user-friendly platform that simplifies the process of generating, editing, and downloading codes on the fly.",
      ],
      bullets: [
        "Enhanced open-source QART.js library for production use",
        "Created user-friendly interface for QR code generation",
        "Implemented image cropping and editing capabilities",
        "Built download functionality for quick export",
        "Used for marketing materials, pamphlets, and calendars at Florida Memory",
      ],
    },
  },
  {
    id: "cataloguing-tool",
    companyName: "Cataloguing Tool",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "A web-based tool designed to streamline and standardize the cataloguing process for libraries and archives.",
    websiteLink: "https://cataloguing-names.netlify.app/",
    githubLink: "https://github.com/admaloch-dos/cataloguing-tool",
    techStack: [
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/cataloguing.webp",
    pagesInfoArr: [
      {
        title: "Cataloguing Interface",
        description:
          "Data entry tool with standardized formatting for names, places, and subjects",
        imgArr: ["/projects/cataloguing.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developing a cataloguing tool for the Florida Department of State to streamline and standardize data entry. This tool ensures consistent formatting of names, places, and subjects, reducing errors and improving data accuracy.",
        "It simplifies the approval workflow and automates record insertion into the database, enhancing overall efficiency. This was the final project during my time there and did not get finished.",
      ],
      bullets: [
        "Developed cataloguing tool for Florida Department of State",
        "Ensured consistent formatting of names, places, and subjects",
        "Reduced data entry errors and improved accuracy",
        "Simplified approval workflow processes",
        "Automated record insertion into database system",
      ],
    },
  },
  {
    id: "florida-county-tool",
    companyName: "Florida County Research Tool",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "A page I designed, featuring a Florida county research tool for the Florida Memory website.",
    websiteLink: "https://florida-memory-research-tool.netlify.app/",
    githubLink: "https://github.com/admaloch-dos/florida-county-timeline-tool",
    techStack: [
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/countytimeline.webp",
    pagesInfoArr: [
      {
        title: "County Research Tool",
        description:
          "Interactive tool combining maps and database information for historical research",
        imgArr: ["/projects/countytimeline.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This interactive tool simplifies the process for people to research the history of Florida counties. It combines our collection of maps and county database information, making it easier for patrons and archive staff to access and explore historical data efficiently.",
      ],
      bullets: [
        "Designed interactive research tool for Florida Memory website",
        "Combined historical maps with county database information",
        "Simplified historical research process for patrons",
        "Enhanced access to archival data for staff and public",
        "Improved efficiency in exploring Florida county history",
      ],
    },
  },
  {
    id: "folk-festival-slider",
    companyName: "Florida Folk Festival Image Display",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Image slider with dynamic QR code generation",
    websiteLink: "https://folk-slider.netlify.app/",
    githubLink: "https://github.com/admaloch-dos/folk-fest-img-display",
    techStack: [
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Bootstrap",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/img-slider.webp",
    pagesInfoArr: [
      {
        title: "Image Slider",
        description:
          "Custom Bootstrap slider with database integration and QR code generation",
        imgArr: ["/projects/img-slider.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The goal was to have a slider that could be linked to data from the database and include custom features. To achieve this, a Bootstrap slider was used as the base, and additional functionalities were added.",
        "These include image-based QR codes that link to item pages on the website, an audio player, and customizable settings for the slider.",
      ],
      bullets: [
        "Built custom image slider using Bootstrap as foundation",
        "Integrated with database for dynamic content loading",
        "Implemented image-based QR codes linking to website pages",
        "Added audio player functionality for multimedia content",
        "Created customizable settings for slider configuration",
      ],
    },
  },
  {
    id: "black-history-guide",
    companyName: "Florida Memory Black History Research Guide",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Web-based version of a research guide on black history resources in our collection",
    websiteLink: "https://www.floridamemory.com/learn/research-tools/guides/black-history-collections/",
    techStack: [
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/projects/blackhistorycollections.webp",
    pagesInfoArr: [
      {
        title: "Research Guide",
        description:
          "Comprehensive digital guide to Black history resources in Florida Memory collection",
        imgArr: ["/projects/blackhistorycollections.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Web-based version of a research guide on black history resources in our collection. This guide helps researchers and the public discover and access important Black history materials preserved by Florida Memory.",
      ],
      bullets: [
        "Created web-based research guide for Florida Memory",
        "Showcased Black history resources in state collection",
        "Improved public access to historical materials",
        "Enhanced discoverability of archival resources",
        "Supported educational and research initiatives",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
