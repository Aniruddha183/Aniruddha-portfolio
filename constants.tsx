import {
  StackItem,
  Project,
  SocialLink,
  EducationItem,
  ExperienceItem,
} from "./types";
import {
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  TailwindIcon,
  TypeScriptIcon,
  AWSIcon,
  DockerIcon,
  MongoDbIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  ResumeIcon,
  PhoneIcon,
} from "./components/Icons";

export const STACK_ITEMS: StackItem[] = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "MongoDB", icon: MongoDbIcon },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "VIIT college",
    degree: "B.Tech Electronics and Telecommunication",
    period: "June 2020 – June 2024",
    location: "Pune, Maharashtra",
  },
  {
    institution: "Shraddha Institute of career development",
    degree: "XII HSC board",
    period: "Feb 2018 – Feb 2020",
    location: "Ichalkaranji, Kolhapur",
  },
  {
    institution: "Vyankatrao High school",
    degree: "X SSC board",
    period: "March 2016 – March 2018",
    location: "Ichalkaranji, Kolhapur",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full Stack Web Developer",
    company: "FitnEarn",
    period: "Feb 2024 – Present",
    location: "Remote",
    description: [
      "Developed web applications using ReactJS and NextJS, while managing DevOps operations.",
      "Leveraged various cloud technologies, including AWS and GCP, to store and manage data from the website.",
      "Collaborated with cross-functional teams, including UI/UX and App Development, to ensure a seamless user experience for the product.",
    ],
  },
  {
    role: "Front End Developer",
    company: "TechDarshak",
    period: "Sep. 2023 – Dec. 2023",
    location: "Pune, India",
    description: [
      "Utilized Node.js frameworks such as Fastify to create and build APIs.",
      "Gained hands-on experience with the React Native framework.",
      "Integrated APIs into the website using Axios and ReactJS.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Online Classes and Live session Management",
    technologies: "NextJs, AWS, React, DigitalOcean, VPS",
    description: [
      "Developed a comprehensive full-stack web application utilizing Next.js and React for the frontend.",
      "Implemented AWS S3 for storing class images and videos.",
      "Integrated MongoDB for managing session and user data.",
      "Created an Admin Panel to facilitate user, session, content, and class management.",
    ],
    link: "https://www.asclasses.online/",
  },
  {
    title: "Fitness and Well being website",
    technologies: "NextJs, AWS, GCP, MongoDB, Typescript, EC2",
    description: [
      "Developed a full-stack fitness and well-being website, successfully launched with a user base in the hundreds.",
      "Implemented CI/CD pipelines using Jenkins and GitHub webhooks to ensure a seamless development experience.",
      "Deployed the frontend application to an EC2 server and the backend APIs to AWS Lambda for a scalable, serverless architecture.",
    ],
    link: "https://www.fitnearn.com/",
  },
  {
    title: "React Restaurant Website",
    technologies: "ReactJs, CSS, Netlify",
    description: [
      "Made the website from scratch using ReactJS.",
      "Used Hooks, States, and components features of ReactJS.",
    ],
    link: "https://profound-quokka-b973b0.netlify.app/",
  },
  {
    title: "Built a chrome extension",
    technologies: "HTML, CSS, Javascript",
    description: [
      "A extension which shows you random text jokes on click.",
      "Used static HTML, CSS, and JS and deployed the extension to the Chrome Web Store.",
    ],
    link: "#",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com/Aniruddha183" },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/aniruddha-teke-0436a01a8/",
  },
  { name: "Mail", icon: MailIcon, url: "mailto:aniruddhateke@gmail.com" },
  {
    name: "Phone",
    icon: PhoneIcon,
    url: "https://wa.me/9356778533?text=Hi%20there!%20I%20would%20like%20to%20connect.",
  },
  { name: "Resume", icon: ResumeIcon, url: "#" },
];
