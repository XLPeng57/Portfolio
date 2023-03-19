// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Xianglu",
  middleName: "",
  lastName: "Peng",
  message: " Changing the World, One Line of Code at a Time. ",
  icons: [
    {
      image: "fa-github-square",
      url: "https://github.com/XLPeng57",
    },
    {
      image: "fa-linkedin-square",
      url: "https://www.linkedin.com/in/xianglu-peng/",
    },
    {
      image: "fa-envelope-square",
      url: "mailto:xpeng.dev@gmail.com",
    },
    {
      image: "fa-plus-square",
      url: "https://drive.google.com/file/d/1WqtYKuk4BghlSzWAcgxUqbgDn7GuHJ89/view?usp=sharing",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    "I am a dedicated computer science master's student at Yale University, driven to expand my knowledge and skills in the field. \
    I received my undergraduate degree from William & Mary, where I double majored in Computer Science and Mathematics, demonstrating \
    my ability to tackle complex problems with logical and analytical thinking. With a wealth of experience in web development, desktop \
    application development, and mobile application development, I am well-versed in various programming languages and frameworks. \
    I have a strong passion for keeping up with the latest technological advancements and I am always eager to learn new skills to enhance my abilities.",
  resume: "https://drive.google.com/file/d/1WqtYKuk4BghlSzWAcgxUqbgDn7GuHJ89/view?usp=sharing",
};


// EXPERIENCE SECTION
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      title: 'Master of Science in Computer Science',// Here Add Company Name
      company: 'Yale University',
      date: '2022 - 2023',
    },

    {
      title: 'Software Engineering Intern',// Here Add Company Name
      company: 'Wave Wisdom Co., Ltd.',
      date: 'Apr 2022 - Jun 2022',
      message: 'Implemented 10+ core features for a Windows desktop video surveillance system.'
      
    },

    {
      title: 'Software Development Assistant',
      company: 'AidData',
      date: 'Nov 2020 - Dec 2021',
      message: 'Developed and maintained the Dashboard of AidData with React.js and Express.js.'
    },

    // {
    //   title: 'Bachelor of Science',// Here Add Company Name
    //   company: 'College of William and Mary',
    //   date: 'Aug 2018 - Jan 2022',
      
    // }
    
  ]
}


// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "XLPeng57",
  reposLength: 4,
  specificRepos: ["TripsPlanner", "Portfolio", "WebMusicPlayer", "Full-Stack-Web-Programming"],
};


// SKILLS SECTION
// const skills = {
//   show: true,
//   heading: "Skills",
//   hardSkills: [
//     { name: "Python", value: 90 },
//     { name: "SQL", value: 75 },
//     { name: "Data Structures", value: 85 },
//     { name: "C/C++", value: 65 },
//     { name: "JavaScript", value: 90 },
//     { name: "React", value: 65 },
//     { name: "HTML/CSS", value: 55 },
//     { name: "C#", value: 80 },
//   ],
//   softSkills: [
//     { name: "Goal-Oriented", value: 80 },
//     { name: "Collaboration", value: 90 },
//     { name: "Positivity", value: 75 },
//     { name: "Adaptability", value: 85 },
//     { name: "Problem Solving", value: 75 },
//     { name: "Empathy", value: 90 },
//     { name: "Organization", value: 70 },
//     { name: "Creativity", value: 90 },
//   ],
// };

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am actively seeking full-time Software Engineering opportunities and would be \
     grateful for any information regarding available positions. If you have any leads\
     or simply wish to connect, please do not hesitate to contact me at",
  email: "xpeng.dev@gmail.com",
};



export { navBar, mainBody, about, experiences, repos, getInTouch};
