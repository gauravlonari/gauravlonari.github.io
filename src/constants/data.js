import GoogleCloud from "../assets/GoogleCloud.png";
import elar from '../assets/elar.png';
import freeqry from '../assets/freeQry.png';
import FullStackWebDeveloper from '../assets/fullStackWebDeveloper.jpeg';
import investorz from '../assets/investorz.png';
import JavaBadge from "../assets/javabadge5star.jfif";
import newNews from '../assets/newNews.png';
import notesanywhere from '../assets/notesanywhere.png';
import noteskeeper from '../assets/noteskeeper.png';
import portfolio from '../assets/portfolio.png';
import sahyadriSafar from '../assets/sahyadriSafar.png';
import textUtility from '../assets/textUtility.png';
// import minibis from '../assets/minibis_logo.png'

import { AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { BsGearWideConnected, BsSignpostSplit } from 'react-icons/bs';
import { GiMoebiusTriangle } from 'react-icons/gi';
import { IoSchoolOutline } from 'react-icons/io5';
// import { BiHome, BiMessageSquareDetail } from 'react-icons/bi'


export const CERTIFICATION_DATA = [
  {
    logo: GoogleCloud,
    title: "Milestone 3 of Google Cloud Facilitator Program 2022",
    by: "Qwiklabs",
    date: "June 2022",
    description:
      "The GoogleCloudReady Facilitator program is an opportunity to kickstart career in cloud and get hands on practice on Google Cloud. Learn & practice concepts like computing, application development, big data & machine learning using cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/5ff6691f-2911-4267-a2eb-213a77d95ffd",
  },
  {
    logo: JavaBadge,
    title: "5⭐ Java Badge",
    by: "HackerRank",
    date: "January 2023",
    description:
      "The 5 stars badge on HackerRank for Java indicates that the user has earned the maximum number of stars for their Java-related challenges on the platform. To earn this badge, a user must have completed a significant number of Java challenges and consistently earned high scores on those challenges. This badge is a testament to the user's expertise and proficiency in the Java programming language.",
    url: "https://www.hackerrank.com/gaurav_22120147",
  },
  {
    logo: FullStackWebDeveloper,
    title: "Become a Full-Stack Web Developer",
    by: "Linkedin Learning",
    date: "April 2023",
    description:
      "With a solid foundation in server management, host configurations, and database integration, I create dynamic, data-driven websites. I possess essential programming skills and have hands-on experience with various platforms. My expertise extends to core server languages like PHP, Node.js, .NET, and Ruby on Rails. This certification reflects my commitment to mastering the art of full-stack development, and I'm well-equipped to tackle complex coding challenges, deliver innovative web solutions, and excel in the dynamic world of web development.",
    url: "https://www.linkedin.com/learning/certificates/c1dd098ee7255826f06ed027f75ecffbfaf74a703e121288edc4fd9115ce2a1c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bxdt5BztGT9%2BBCpA%2BvO9sGA%3D%3D",
  },
];

export const EDUCATION_DATA = [
  {
    education: "SSC",
    name: "New English School",
    address: "Ashtapur, Haveli, Pune 412207",
    board: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",
    dateOfCompletion: "March 2018",
    progress: "Completed with 93.60%"
  },
  {
    education: "Diploma in Computer Engineering",
    name: "Government Polytechnic Pune",
    address: "Ganeshkhind, Shivajinagar, Pune 411014",
    board: "Autonomous Institute affilated with MSBTE",
    dateOfCompletion: "September 2021",
    progress: "Completed with 96.47%"
  },
  {
    education: "B.Tech in Computer Engineering",
    name: "Vishwakarma Institute of Information Technology, Pune",
    address: "Kondhwa, Pune 411048",
    board: "Autonomous Institute affilated with Savitribai Phule Pune University",
    dateOfCompletion: "September 2024",
    progress: "Current CGPA 9.8"
  }
]

export const EXPERIENCE_DATA = [
  {
    position: "Software Engineer - Intern",
    company: "Loop Health",
    companyLink: "https://loophealth.com",
    desc: "I have crafted web applications utilizing the MERN stack, acquiring a comprehensive grasp of the expertise and insights vital for success in this realm. My journey encompassed learning about the essential scalability and resilience prerequisites for enterprise-level applications, alongside honing my skills within a collaborative Agile team setting.",
    tools: "ReactJS, ExpressJS, NodeJS, ReduxJS, REST API, Jira, Confluence, Github, Figma",
    duration: "July 2023 - January 2024"
  },
  {
    position: "Full Stack Web Developer Intern",
    company: "The Innovative Solutions",
    companyLink: "https://theinnovativesolutions.in/",
    desc: "Developed web applications using the MERN stack and gained a thorough understanding of the skills and knowledge required to excel in this field. I learned about the scalability and robustness requirements for enterprise-grade applications and gained experience working in an Agile environment.",
    tools: "ReactJS, ExpressJS, NodeJS, MongoDB, REST API, Trello, Github",
    duration: "Oct 2022 - June 2023"
  },
]

export const NAVIGATION_DATA = [
  // {
  //   icon: BiHome,
  //   address: '#',
  //   activeRoutes: ["#"]
  // },
  {
    icon: AiOutlineUser,
    address: '#',
    activeRoutes: ["#", "#about"]
  },
  {
    icon: IoSchoolOutline,
    address: '#education',
    activeRoutes: ["#education"]
  },
  {
    icon: BsGearWideConnected,
    address: '#skillset',
    activeRoutes: ["#skillset"]
  },
  {
    icon: BsSignpostSplit,
    address: '#experience',
    activeRoutes: ["#experience", "#positions"]
  },
  {
    icon: GiMoebiusTriangle,
    address: '#projects',
    activeRoutes: ["#projects", "#certifications"]
  },
  // {
  //   icon: BiMessageSquareDetail,
  //   address: '#testimonials',
  //   activeRoutes: ["#testimonials"]
  // },
  {
    icon: AiOutlineMessage,
    address: '#contact',
    activeRoutes: ["#contact", "#footer"]
  },
]

export const POSITION_OF_RESPONSIBILITY_DATA = [
  {
    organization: "I2IC & Training And Placement Cell VIIT",
    role: "Vice President",
    date: "Sept 2022 - Sept 2023"
  },
  {
    organization: "Cascode",
    role: "Co-Founder & CTO",
    date: "Aug 2022 - Present"
  },
  {
    organization: "Professional Assistance Officer",
    role: "Rotaract Club Of VIIT",
    date: "July 2022 - July 2023"
  },
  {
    organization: "National Service Scheme (NSS), VIIT",
    role: "Unnat Bharat Abhiyaan (UBA) Joint Head",
    date: "Aug 2022 - August 2023"
  },
  {
    organization: "Technofest 2k20",
    role: "Event Coordinator at Flash 2.0",
    date: "Jan 2020 - Mar 2020"
  },
  {
    organization: "FreeQuery",
    role: "Blogger Blog",
    date: "Dec 2017 - Jan 2019"
  },
  {
    organization: "Freeq",
    role: "Youtube Channel",
    date: "Nov 2014 - Mar 2019"
  },
]

export const PROJECTS_DATA = [
  {
    image: elar,
    title: "ELAR",
    description: "E-learning using AR is an augmented reality based software which can be used by students to view the 3D view of the entity they are learning about.",
    tools: "Unity 3D, Vuforia Engine, C#",
    github: "https://github.com/gauravlonari/ELAR",
    liveEnabled: true,
    live: "https://github.com/gauravlonari/ELAR/releases/"
  },
  // {
  //   image:minibis,
  //   title:"Minibis",
  //   description:"Minibis or Mini Business is an Android app build for small scale businesses to work on. Integrated with Firebase to store and load of Users and Products",
  //   tools:"Android Studio, Java, Firebase",
  //   github:"https://github.com/gauravlonari/NewNews",
  //   liveEnabled:true, 
  //   live:"https://github.com/gauravlonari/Minibis/releases/"
  // },
  {
    image: notesanywhere,
    title: "NotesAnywhere",
    description: "NotesAnywhere is an online notes keeping application. Save anywhere, get it available everywhere. Login or Register and get your dashboard ready.  ",
    tools: "MERN Stack",
    github: "https://github.com/gauravlonari/notesanywhere",
    liveEnabled: true,
    live: "https://gauravlonari.github.io/NotesAnywhere/#/"
  },
  {
    image: sahyadriSafar,
    title: "Sahyadri Safar",
    description: "Sahyadri Safar is a trek and tour booking site which emphasis trips to various glamorous parts of Sahyadri.",
    tools: "HTML, CSS, Vanilla JS",
    github: "https://github.com/gauravlonari/SahyadriSafar",
    liveEnabled: true,
    live: "https://gauravlonari.github.io/SahyadriSafar/"
  },
  {
    image: textUtility,
    title: "TextUtility",
    description: "Text Utility is a utility software used to manipulate your text in the way you want. Enter the text and functions are available to you.",
    tools: "ReactJS, NodeJS, Bootstrap",
    github: "https://github.com/gauravlonari/TextUtility",
    liveEnabled: true,
    live: "http://gauravlonari.github.io/TextUtility"
  },
  {
    image: newNews,
    title: "NewNews",
    description: "NewNews is a new News platform made to keep you updated on current affairs from each and everything like politics, sports, events, weather, etc.",
    tools: "ReactJS, NodeJS, Bootstrap, NewsAPI",
    github: "https://github.com/gauravlonari/NewNews",
    liveEnabled: true,
    live: "http://gauravlonari.github.io/NewNews"
  },
  {
    image: portfolio,
    title: "Portfolio",
    description: "Portfolio of Gaurav Lonari. This Repository include source code for the website you are currently browsing.",
    tools: "React JS, CSS, NodeJS",
    github: "https://github.com/gauravlonari/gauravlonari.github.io",
    liveEnabled: true,
    live: "#"
  },
  {
    image: investorz,
    title: "Investorz",
    description: "A stock market learning application displaying various investment options with valid data from API",
    tools: "Android Studio, Java",
    github: "https://github.com/gauravlonari/Stock-Edge",
  },
  {
    image: noteskeeper,
    title: "NotesKeeper",
    description: "A Database integrated Notes Management website made with PHP and Python using Django.",
    tools: "PHP, Python, Django, MySQL",
    github: "https://github.com/gauravlonari/NotesKeeper",
  },
  {
    image: freeqry,
    title: "Youtube Blog",
    description: "Personal technical blog for youtube channel. Used to make posts about youtube videos",
    tools: "Blogger, Bootstrap, Javascript",
    githubDisabled: true,
    liveEnabled: true,
    live: "https://freeqry.blogspot.com"
  },

];

export const SKILLSET_DATA = {
  "Frontend Development": [
    "HTML5",
    "CSS3",
    "Vanilla JS",
    "Bootstrap 5",
    "Tailwind CSS",
    "ReactJS",
    "ReduxJS",
    "Android (XML)",
    "Sass",
    "Markdown",
    "Git & Github"
  ],
  "Programming Languages": [
    "C",
    "C++",
    "Java",
    "Javascript",
    "Typescript",
    "Python",
    "Bash",
  ],
  "Backend Development": [
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Android (Java)",
    "Java Server Pages (JSP)",
    "Tomcat",
    "Google Cloud",
    "Amazon Web Service",
    "Docker"
  ],

};