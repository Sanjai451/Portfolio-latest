// src/constants/workExperience.ts

export interface WorkExperience {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string;
  }
  
  export const workExperiences: WorkExperience[] = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Freelance",
      duration: "Jan 2025 - Present",
      description: "Built multiple full-stack applications using React,TypeScript,Node.js, Express.js, Python, Java, MySQL and MongoDB.",
    },
    {
      id: 3,
      role: "Intern",
      company: "TCS iON",
      duration: "July 2024 - Aug 2024",
      description: "Completed an internship on Cloud Computing, working on industry-level projects and learning deployment with Java Stack.",
    },
    {
      id: 4,
      role: "Front-End Developer Intern",
      company: "iSQUARE Business Solution Pvt. Ltd.",
      duration: "Feb 2025 - Feb 2025",
      description: "Completed a Front-End Developer Training internship, gaining expertise in modern UI/UX practices and React development.",
    },
    // {
    //   id: 5,
    //   role: "Open Source Contributor",
    //   company: "GitHub Projects",
    //   duration: "Dec 2024 - Present",
    //   description: "Contributed to open-source projects, improving docs and adding new features.",
    // },
   
  ];
  