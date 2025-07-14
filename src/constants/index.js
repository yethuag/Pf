export const myProjects = [
  {
    id: 1,
    title: "LYNK- Your saved links storage",
    description:
      "A comprehensive link management system that allows users to save, organize, and categorize their favorite links using custom playlists and tags for efficient content organization.",

    subDescription: [
      "Built a full-stack application with React frontend and Hono backend on Node.js, enabling users to save and organize links with custom playlists and tagging system.",
      "Implemented secure user authentication and database management using Prisma ORM with SQLite for personalized link collections.",
      "Designed a responsive and intuitive frontend with React and Tailwind CSS, providing seamless link organization and search functionality.",
      "Added advanced features including playlist creation, tag-based filtering, bulk operations, and search capabilities with full TypeScript implementation for enhanced link management.",
    ],
    href: "https://github.com/yethuag/Lynk",
    logo: "",
    image: "/assets/projects/Lynk.png",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/ts.svg",
      },
      {
        id: 2,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 3,
        name: "Hono",
        path: "/assets/logos/hono.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "ContextNet - Your NLP news Analyzer",
    description:
      "Developed an NLP system for social good, integrating web scraping, real-time streaming via Kafka and Confluent, and advanced NER with facebook/bart-large-mnli to transform textual data into actionable insights",
    subDescription: [
      "Developed an NLP-driven application focused on social impact by scraping text data and applying Named Entity Recognition (NER) to transform raw information into actionable insights.",

      "Utilized the facebook/bart-large-mnli model for zero-shot classification to enhance entity tagging and relevance filtering.",

      "Integrated Apache Kafka and Confluent for real-time data streaming, enabling scalable and responsive processing pipelines.",

      "Connected to a Neon PostgreSQL database for efficient, cloud-native storage of processed data.",

      "Built a responsive React frontend and a Python FastAPI backend for seamless user interaction and high-performance APIs.",

      "Awarded 3rd Runner-Up at the SIT30 AI Hackathon hosted by KMUTT, recognizing the project's innovation and societal relevance.",
    ],
    href: "https://github.com/yethuag/ContextNet",
    logo: "",
    image: "/assets/projects/Contextnet.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "FastApi",
        path: "/assets/logos/fast.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Retick",
    description:
      "A modern, interactive web application built for all those who would like to sell concert tickets",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "https://github.com/yethuag/retic",
    logo: "",
    image: "/assets/projects/retick.png",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/ts.svg",
      },
      {
        id: 2,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 3,
        name: "Hono",
        path: "/assets/logos/hono.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Zoneout",
    description:
      "A lightweight hackathon group project where people could find each other on map with marks to solve their indiviual paradox wherever",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "https://github.com/yethuag/Zoneout",
    logo: "",
    image: "/assets/projects/Zoneout.png",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/ts.svg",
      },
      {
        id: 2,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 3,
        name: "Hono",
        path: "/assets/logos/hono.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ye-thu-aung-829336356/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bambiiiiimmr42/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Computer Science Student",
    job: "University Studies & Projects",
    date: "2023-Present",
    contents: [
      "Enrolled in Computer Science program, building strong foundations in software development, algorithms, and modern tech stacks.",
      "Developed three major full-stack projects during the first year, gaining hands-on experience in front-end, back-end, and database integration.",
      "Collaborated effectively in team-based university projects, focusing on agile development and version control practices.",
      "Participated in SIT 30 AI International Hackathon as part of a team, achieving 3rd runner-up with the 'ContextNet' project, showcasing innovative AI solutions.",
      "Continuously expanding skills in web development, back-end technologies, and modern frameworks through personal learning and practical projects.",
    ],
    images: [
      "/assets/p1.jpg",
      "/assets/p2.jpg",
      "/assets/p3.jpg",
      "/assets/p4.jpg",
      "/assets/p5.jpg",
      "/assets/p6.jpg",
      "/assets/p7.jpg",
    ],
  },
  // {
  //   title: "Freelance Developer",
  //   job: "Self-Employed",
  //   date: "2025-Present",
  //   contents: [
  //     "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //     "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //   ],
  // },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
