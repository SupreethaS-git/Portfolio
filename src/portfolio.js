/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Supreetha S",
  title: "Hi there, I'm Supreetha",
  subTitle: emoji(
    "An enthusiastic Software Development Engineer 🚀 starting out on my journey in the world of web and mobile application development. I have a solid foundation in JavaScript, React.js, Node.js, and I'm eager to learn and grow in this dynamic field."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1tNzWDsY1Yhb1TuH7JMAyVJV3jnDqZgTe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SupreethaS-git",
  linkedin: "https://www.linkedin.com/in/supreetha-shrinivas/",
  gmail: "supreetha.shrinivas@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@supreetha.shrinivas",
  stackoverflow: "https://stackoverflow.com/users/17221711/supreetha-shrinivas",
  kaggle: "https://www.kaggle.com/supreethashrinivas",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "EAGER SOFTWARE ENGINEER PASSIONATE ABOUT PUSHING TECHNICAL BOUNDARIES ACROSS THE STACK",
  skills: [
    emoji(
      "⚡  Proficient in Java, C, C++, and Python (pandas, numpy, sklearn, seaborn, matplotlib, OpenCV), with expertise in web development using Next.js, NestJS, and React. Well-versed in data analysis and visualization tools, including Tableau, PowerBI."
    ),
    emoji(
      "⚡ Specializing in Next.js, NestJS, GenAI (Langchain), Airflow, PySpark, Apache Kafka, and Flutter."
    ),
    emoji(
      "⚡ Proficiency in computer vision and classification algorithms using Python (OpenCV). Skilled in image processing, segmentation, and pose estimation."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "unix",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RNS Institute of Technology",
      logo: require("./assets/images/rnsitLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2019 - May 2023",
      desc: "Achieved a CGPA of 9.54, reflecting a commitment to academic excellence and a solid foundation in computer science and engineering.",
      descBullets: []
    },
    {
      schoolName: "St Paul's English School",
      logo: require("./assets/images/presidencyLogo.png"),
      subHeader: "Indian School Certificate",
      duration: "June 2017 - May 2019",
      desc: "Attained an outstanding percentage of 93.4, a testament to my dedicated and hardworking approach to education.",
      descBullets: []
    },
    {
      schoolName: "The Oxford English School",
      logo: require("./assets/images/oxfordLogo.png"),
      subHeader: "Indian School Certificate",
      duration: "June 2004 - May 2017",
      desc: "Earned a remarkable percentage of 94.8, showcasing not only academic excellence but also my active participation in extracurricular activities. Honored with the 'Best Outgoing Student' award, underscoring my well-rounded achievements and contributions.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Associate",
      company: "HashedIn by Deloitte",
      companylogo: require("./assets/images/hashedinLogo.png"),
      date: "March 2023 – June 2023",
      desc: "Gained comprehensive training in Next.js, NestJS, GenAI(Langchain), Airflow, PySpark, Apache Kafka and Flutter. Developed a GenAI based chatbot using LLM, a news rendering app using flutter and a clone of Jira app using Next.js and NestJS.",
      descBullets: []
    },
    {
      role: "Intern",
      company: "IITM-AMTDC",
      companylogo: require("./assets/images/iitmLogo.png"),
      date: "December 2021 - February 2022",
      desc: "Detection of cotton boll using Computer Vision and Classification Algorithms.",
      descBullets: [
        "Language used: Python(OpenCV)",
        "Capturing image of cotton plant. Image processing by Binarization.",
        "Segmentation of the image to detect cotton boll. Algorithms used: K-Means clustering and colour masking.",
        " Camera calibration for pose estimation using Zang’s technique on a chessboard."
      ]
    },
    {
      role: "Intern",
      company: "Inflow Technologies",
      companylogo: require("./assets/images/inflowLogo.png"),
      date: "April 2022 – June 2022",
      desc: "Crime Rate Forecasting using FbProphet",
      descBullets: [
        "Analysing the Chicago Crime rate from 2001 to 2016 and predicting crime rate statistics in 2017 given the historical trend"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: "", // require("./assets/images/nextuLogo.webp"),
      projectName: "A ChatBot to automate Data Engineering Tasks",
      projectDesc:
        "The chatbot leverages NLP to automate data analysis tasks like visualization, trend prediction and querying. Technologies used: Django, GenAI(Langchain) MilvusDB, Next.js",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "", // require("./assets/images/nextuLogo.webp"),
      projectName: "A Text Analysis Tool for Research papers",
      projectDesc:
        "Given multiple research papers, the tool creates a combined summary in which each line in the summary is classified into the role they play. Language used: Python (tensorflow)",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "",
      // require("./assets/images/nextuLogo.webp"),
      projectName: "Documentation Helper",
      projectDesc:
        "A generative AI application that answers questions regarding any documentation as per the user’s requirement. Technologies used:LangChain, Pinecone, Streamlit",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    },
    {
      image: "", // require("./assets/images/nextuLogo.webp"),
      projectName: "A News Rendering App",
      projectDesc:
        "A dynamic news rendering app using Flutter, bringing you real-time updates and news content in a visually engaging and user-friendly interface. Technologies used:Flutter, Axios",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications  "),
  subtitle: "Achievements and Certifications I have done !",

  achievementsCards: [
    {
      title: "Won Second Prize in HashedIn University product month",
      subtitle: "",
      image: require("./assets/images/hashedinLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NQ7CD3agevelRiwwQYBm-bxQlZPdK753/view?usp=sharing"
        }
      ]
    },
    {
      title: "Udemy-LangChain- Develop LLM powered applications with LangChain",
      subtitle: "",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1MwwHBgzQqjUZR2THRxrdluIWrTqwfXmi/view?usp=sharing"
        }
      ]
    },

    {
      title:
        "Certificate of participation in Machine Learning-Linear Regression course developed by SSC NASSCOM",
      subtitle: "",
      image: require("./assets/images/nasscomLogo.png"),
      imageAlt: "Nasscom Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/17iVYG8Et30qQBVoMH3fTy628vxdtw047/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "supreetha.shrinivas@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
