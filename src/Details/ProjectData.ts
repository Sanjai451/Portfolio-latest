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
    website: "https://github.com/Sanjai451/LetsCollab",
  },
  {
    id: 3,
    name: "Neuro Blink",
    description: "AI-powered system that interprets human eye blinks into actions for hands-free communication.",
    technologies: ["Flask", "OpenCV", "Gemini API", "PyWhatKit", "HTML", "CvZone"],
    image: "https://private-user-images.githubusercontent.com/145897247/433022602-b7e8968a-14dc-4621-b9de-248c5cf20b06.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2MzQxODAsIm5iZiI6MTc0NDYzMzg4MCwicGF0aCI6Ii8xNDU4OTcyNDcvNDMzMDIyNjAyLWI3ZTg5NjhhLTE0ZGMtNDYyMS1iOWRlLTI0OGM1Y2YyMGIwNi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxMjMxMjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNzMxYzA1M2M5YzM0Zjg0YmQxMjUyNjU4ZDI0YWFiNTFlYzg4NjdiMzE5Zjk3ZDk4YmM4NWU5YzJmMWE0ZGM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.v8np-kKUho5-cQMkdCJ3iquLkl6MJOgyTE0xF0N-aLA",
    github: "https://github.com/Sanjai451/Neuro-Blink?tab=readme-ov-file",
    website: "https://github.com/Sanjai451/Neuro-Blink?tab=readme-ov-file",
  },
  {
    id: 3,
    name: "Smart Location Alarm",
    description: "Location Alarm that notifies users on their destination using Location Services.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "https://cdn.dribbble.com/userupload/21000122/file/original-ee4817abd5716efa3fe1e018bae387c8.gif", 
    github: "https://github.com/Sanjai451/Smart-Location-Alarm?tab=readme-ov-file",
    website: "https://github.com/Sanjai451/Smart-Location-Alarm?tab=readme-ov-file",
  },

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
    id: 4,
    name: "Report Parser",
    description: "Report Parser which get PDF and analyze the data with LLM (Gemini AI).",
    technologies: ["React", "Tailwind CSS", "Python", "Flask"],
    image: "https://miro.medium.com/v2/resize:fit:1400/0*xcUmpGXIb-WBH9U0.gif", // Example image
    github: "https://github.com/Sanjai451/Report-Parser-FullStack",
    website: "https://github.com/Sanjai451/Report-Parser-FullStack",
  },
  {
    id: 18,
    name: "My Password Manager",
    description: "A secure mobile app that stores and manages encrypted user passwords for multiple platforms.",
    technologies: ["Java", "XML", "Android"],
    image: "https://lh3.googleusercontent.com/LYUDWiiqyTSiwzbPsJnYhfTzA3kUAoYgRy_1mpKTZOuLtpaMTaNdPKm8Xesm5mxA_zUSIGy6RO4PxhUnIDgTgbmroxgVpudnc0XKWW0cByZXppI2WGo",
    github: "https://github.com/Sanjai451/My-Password-Manager",
    website: "https://github.com/Sanjai451/My-Password-Manager",
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
    id: 91,
    name: "Code Runner API",
    description: "A simple REST API to compile and execute Java, Python, and JavaScript code dynamically.",
    technologies: ["JavaScript"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWfIrkyAO6q_77ligCYj7hNqPY7zo7wLOXQ&s",
    github: "https://github.com/Sanjai451/CodeRunnerAPI?tab=readme-ov-file#code-runner-api",
    website: "https://github.com/Sanjai451/CodeRunnerAPI?tab=readme-ov-file#code-runner-api",
  },
  {
    id: 10,
    name: "BookLib Application",
    description: "Notes Taking Application on Reading books with Creation, Deletion, Updation features.",
    technologies: ["HTML" , "CSS", "JavaScript"],
    image: "https://github.com/Sanjai451/Project/raw/main/bookProApp/Screenshot%202024-03-01%20130807.png", // Example image
    github: "https://github.com/Sanjai451/Project/tree/main/bookProApp",
    website: "https://github.com/Sanjai451/Project/tree/main/bookProApp",
  },

];

export default projects;
