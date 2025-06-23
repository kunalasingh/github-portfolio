const strings: { [key: string]: { [key: string]: string } } = {
  profile: {
    name: "Kunal Arunkumar Singh",
    role: "Software Engineer",
    summary:
      "I am a software engineer with expertise in frontend development and a proven track record of delivering innovative solutions across the Banking, Education, and Media domains, with aspirations to create transformative tools powered by AI.",
    contactMe: "CONTACT ME",
  },
  skill: {
    skills: "Skills",
  },
  aboutMe: {
    aboutMe: "About Me",
    summary:
      "I am a software engineer with expertise in frontend development and a proven track record of delivering innovative solutions across the Banking, Education, and Media domains, with aspirations to create transformative tools powered by AI.",
  },
  project: {
    featuredProjects: "Featured Projects",
    viewProject: "View Project",
  },
  experience: {
    workExperience: "Work Experience",
  },
};

export const jobs = [
  {
    role: "Associate (WebDeveloper)", // TODO: Replace with actual role
    company: "COGNIZANT", // TODO: Replace with actual company name
    logo: "/job1.png", // TODO: Replace with actual logo
    duration: "Feb 2021 - Jul 2023",
    description:
      "Developed responsive user interfaces with React.js and Material-UI, built analytics dashboards with interactive charts and real-time data integration, authored test cases achieving 97% coverage, and ensured seamless AWS deployments with secure data management.",
    link: "#",
    images: [],
  },
  {
    role: "Intern (Automation Engineer)", // TODO: Replace with actual role
    company: "ARTEE FLOW CONTROLS PVT. LTD", // TODO: Replace with actual company name
    logo: "/job2.png", // TODO: Replace with actual logo
    duration: "Jun 2019 – Jul 2019",
    description:
      "Designed and implemented SCADA systems for a gas manufacturing plant, integrating advanced automation technologies, and ensured seamless operations through proactive monitoring, issue resolution, and performance optimization.",
    link: "#",
    images: [],
  },
];

export const skills = [
  "Java",
  "C",
  "Python",
  "Javascript",
  "LaTeX",
  "HTML",
  "CSS",
  "ReactJS",
  "Material-UI",
  "jQuery",
  "Bootstrap",
  "Tailwind CSS",
  "Gatsby",
  "React Native",
  "NodeJS",
  "Spring Boot",
  "ExpressJS",
  "Jest",
  "Enzyme",
  "React Testing Library",
  "JUnit",
  "JWT",
  "HTTP Cookies",
  "Stripe",
  "Plaid",
  "Highcharts",
  "Git",
  "GitHub",
  "CI/CD Pipelines",
  "JIRA",
  "Confluence",
  "Gulp",
  "Webpack",
  "Redux",
  "Postman",
  "Babel",
  "ESLint",
];

export const projects = [
  {
    title: "crwn-clothing (E-commerce Platform)",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    tech: "React",
    link: "https://github.com/kunalasingh/crwn-clothing",
  },
  {
    title: "Task Management App",
    description: "A productivity app built with React Native and Firebase",
    tech: "React Native",
    link: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard using D3.js and Vue.js",
    tech: "Vue.js",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description:
      "A machine learning powered chatbot using Python and TensorFlow",
    tech: "Python",
    link: "#",
  },
];

export const techColors = {
  React: "bg-blue-500",
  "React Native": "bg-green-500",
  "Vue.js": "bg-purple-500",
  Python: "bg-yellow-500",
};
export default strings;
