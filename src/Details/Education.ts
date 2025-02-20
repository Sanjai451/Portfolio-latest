export interface Education {
    id: number;
    degree: string;
    institution: string;
    duration: string;
    description: string;
  }
  
  export const educationData: Education[] = [
    {
      id: 1,
      degree: "B.Tech in Information Technology",
      institution: "Panimalar Engineering College, Chennai",
      duration: "2022 - 2026",
      description: "Pursuing a Bachelor's in Information Technology with a focus on full-stack development, AI, and cloud computing.",
    },
    {
      id: 2,
      degree: "Higher Secondary (Class 12)",
      institution: "Brindavan Public School Kodaikanal",
      duration: "2020 - 2022",
      description: "Completed Class 12 with a strong foundation in Mathematics and Computer Science.",
    },
    {
      id: 3,
      degree: "Secondary Education (Class 10)",
      institution: "Presentation Convent Matric. HR. SEC. School",
      duration: "2019 - 2020",
      description: "Completed Class 10 with excellence in Science and Mathematics.",
    },
  ];
  