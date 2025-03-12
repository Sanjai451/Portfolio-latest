export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  website: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Blood Bridge",
    description: "A blood donation platform which connect with emergency blood seekers and inventory management system.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://github.com/Sanjai451/Blood-Bridge/blob/main/screenshots/Screenshot%202024-10-20%20154504.png?raw=true", // Example image
    github: "https://github.com/Sanjai451/Blood-Bridge?tab=readme-ov-file",
    website: "https://github.com/Sanjai451/Blood-Bridge?tab=readme-ov-file",
  },
  {
    id: 2,
    name: "Smart Location Alarm",
    description: "Location Alarm that notifies users on their destination using Location Services.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://res.cloudinary.com/dpkewxwkk/image/upload/v1741760056/sampleimagesbloodbridge_p79cpn.png", 
    github: "https://github.com/Sanjai451/Smart-Location-Alarm?tab=readme-ov-file",
    website: "https://github.com/Sanjai451/Smart-Location-Alarm?tab=readme-ov-file",
  },
  {
    id: 3,
    name: "Lets Collab",
    description: "Collaborative Learning Platform which connect multiple users and use Code editor, Drawing board and Text editor",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Socket.io"],
    image: "https://raw.githubusercontent.com/Sanjai451/LetsCollab/main/Screenshot%202025-02-08%20211203.png?token=GHSAT0AAAAAACV343XACRNDXMCEUDZHOHSKZ5WYXAQ", // Example image
    github: "https://github.com/Sanjai451/LetsCollab",
    website: "https://github.com/Sanjai451/LetsCollab",
  },
  {
    id: 4,
    name: "Report Parser",
    description: "Report Parser which get PDF and analyze the data with LLM (Gemini AI).",
    technologies: ["React", "Tailwind CSS", "Python", "Flask"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKkjjc_lumY4SjgCn4B6q4IWflXJ4QpUnMw&s", // Example image
    github: "https://github.com/Sanjai451/Report-Parser-FullStack",
    website: "https://github.com/Sanjai451/Report-Parser-FullStack",
  },
  {
    id: 5,
    name: "Google Gemini Clone",
    description: "Text Based Chat AI with Gemini API to provide seamless search experience, incorporating advanced search",
    technologies: ["React", "CSS"],
    image: "https://github.com/Sanjai451/CloneApps/raw/master/Gemeni/Screenshot%202024-03-07%20205320.png", // Example image
    github: "https://github.com/Sanjai451/CloneApps/tree/master/Gemeni",
    website: "https://gemini-clone-by-sanjai.netlify.app/",
  },
  {
    id: 5,
    name: "Youtube Clone",
    description: "This application replicates some of the core functionalities of YouTube, allowing users to search for videos, watch them, and interact with the UI.",
    technologies: ["React", "CSS"],
    image: "https://github.com/Sanjai451/CloneApps/raw/master/YoutubeClone/Screenshot%202024-03-09%20163328.png", // Example image
    github: "https://github.com/Sanjai451/CloneApps/tree/master/YoutubeClone",
    website: "https://github.com/Sanjai451/CloneApps/tree/master/YoutubeClone",
  },
  {
    id: 6,
    name: "Weather Application",
    description: "Get Current weather with Search Functionalitites.",
    technologies: ["React", "CSS"],
    image: "https://github.com/Sanjai451/Project/raw/main/WeatherApp/Screenshot%202024-03-01%20130434.png", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/WeatherApp",
    website: "https://github.com/Sanjai451/Project/tree/main/WeatherApp",
  },
  {
    id: 7,
    name: "News Application",
    description: "Get Current NEWS from API with specific category filtration features.",
    technologies: ["React", "Bootstrap"],
    image: "https://github.com/Sanjai451/Project/raw/main/NEWS-APP-REACT-BOOTSTRAP/news-app/Screenshot%202024-03-16%20160827.png", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/NEWS-APP-REACT-BOOTSTRAP/news-app",
    website: "https://github.com/Sanjai451/Project/tree/main/NEWS-APP-REACT-BOOTSTRAP/news-app",
  },
  {
    id: 9,
    name: "BookLib Application",
    description: "Notes Taking Application on Reading books with Creation, Deletion, Updation features.",
    technologies: ["HTML" , "CSS", "JavaScript"],
    image: "https://github.com/Sanjai451/Project/raw/main/bookProApp/Screenshot%202024-03-01%20130807.png", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/bookProApp",
    website: "https://github.com/Sanjai451/Project/tree/main/bookProApp",
  },

];

export default projects;
