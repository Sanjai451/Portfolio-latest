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
    id: 4,
    name: "Lets Collab",
    description: "Collaborative Learning Platform which connect multiple users and use Code editor, Drawing board and Text editor",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Socket.io"],
    image: "https://cdn.dribbble.com/userupload/25429490/file/original-673f4c2a3ed862ab0a5c79d6e1d46a55.gif", // Example image
    github: "https://github.com/Sanjai451/LetsCollab",
    website: "https://mycodeeditorasdf.netlify.app",
  },
  {
    id: 3,
    name: "Neuro Blink",
    description: "AI-powered system that interprets human eye blinks into actions for hands-free communication.",
    technologies: ["Flask", "OpenCV", "Gemini API", "PyWhatKit", "HTML", "CvZone"],
    image: "https://siplab.org/figures/covers/dualblink.jpg",
    github: "https://github.com/Sanjai451/Neuro-Blink?tab=readme-ov-file",
    website: "",
  },
  {
    id: 3,
    name: "Smart Location Alarm",
    description: "Location Alarm that notifies users on their destination using Location Services.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://cdn.dribbble.com/userupload/21000122/file/original-ee4817abd5716efa3fe1e018bae387c8.gif", 
    github: "https://github.com/Sanjai451/Smart-Location-Alarm?tab=readme-ov-file",
    website: "https://smart-location-alarm.netlify.app",
  },

  {
    id: 1,
    name: "Blood Bridge",
    description: "A blood donation platform which connect with emergency blood seekers and inventory management system.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://github.com/Sanjai451/Blood-Bridge/blob/main/screenshots/Screenshot%202024-10-20%20154504.png?raw=true", // Example image
    github: "https://github.com/Sanjai451/Blood-Bridge?tab=readme-ov-file",
    website: "",
  },
  {
    id: 4,
    name: "Report Parser",
    description: "Report Parser which get PDF and analyze the data with LLM (Gemini AI).",
    technologies: ["React", "Tailwind CSS", "Python", "Flask"],
    image: "https://miro.medium.com/v2/resize:fit:1400/0*xcUmpGXIb-WBH9U0.gif", // Example image
    github: "https://github.com/Sanjai451/Report-Parser-FullStack",
    website: "",
  },
  {
    id: 18,
    name: "My Password Manager APP",
    description: "A secure mobile app that stores and manages encrypted user passwords for multiple platforms.",
    technologies: ["Java", "XML", "Android"],
    image: "https://lh3.googleusercontent.com/LYUDWiiqyTSiwzbPsJnYhfTzA3kUAoYgRy_1mpKTZOuLtpaMTaNdPKm8Xesm5mxA_zUSIGy6RO4PxhUnIDgTgbmroxgVpudnc0XKWW0cByZXppI2WGo",
    github: "https://github.com/Sanjai451/My-Password-Manager",
    website: "https://github.com/Sanjai451/My-Password-Manager/blob/main/My%20Password%20Manager.apk",
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
    website: "https://meek-valkyrie-21ba02.netlify.app/",
  },
  {
    id: 6,
    name: "Weather Application",
    description: "Get Current weather with Search Functionalitites.",
    technologies: ["React", "CSS"],
    image: "https://github.com/Sanjai451/Project/raw/main/WeatherApp/Screenshot%202024-03-01%20130434.png", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/WeatherApp",
    website: "",
  },
  {
    id: 7,
    name: "News Application",
    description: "Get Current NEWS from API with specific category filtration features.",
    technologies: ["React", "Bootstrap"],
    image: "https://github.com/Sanjai451/Project/raw/main/NEWS-APP-REACT-BOOTSTRAP/news-app/Screenshot%202024-03-16%20160827.png", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/NEWS-APP-REACT-BOOTSTRAP/news-app",
    website: "",
  },
  {
    id: 91,
    name: "Code Runner API",
    description: "A simple REST API to compile and execute Java, Python, and JavaScript code dynamically.",
    technologies: ["JavaScript"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWfIrkyAO6q_77ligCYj7hNqPY7zo7wLOXQ&s",
    github: "https://github.com/Sanjai451/CodeRunnerAPI?tab=readme-ov-file#code-runner-api",
    website: "",
  },
  {
    id: 10,
    name: "BookLib Application",
    description: "Notes Taking Application on Reading books with Creation, Deletion, Updation features.",
    technologies: ["HTML" , "CSS", "JavaScript"],
    image: "https://github.com/Sanjai451/Project/raw/main/bookProApp/Screenshot%202024-03-01%20130807.png", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/bookProApp",
    website: "",
  },
  {
    id: 11,
    name: "Currency Converter Application",
    description: "Simple Currency Converter", 
    technologies: ["HTML" , "CSS", "JavaScript"],
    image: "https://github.com/Sanjai451/Project/raw/main/Currency/Screenshot%202024-03-01%20130625.png", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/Currency",
    website: "https://funny-kitten-7826e8.netlify.app/",
  },
  {
    id: 12,
    name: "Image Search",
    description: "Simple image search Engine Application Using Public API", 
    technologies: ["HTML" , "CSS", "JavaScript"],
    image: "https://github.com/Sanjai451/Project/blob/main/Image-Search-Engine/Screenshot%202024-03-01%20130903.png?raw=true", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/Image-Search-Engine",
    website: "https://unrivaled-kelpie-782734.netlify.app/",
  },

];

export default projects;
