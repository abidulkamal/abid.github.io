/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abid's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abid-Ul Kamal Portfolio",
    type: "website",
    url: "https://abid.github.io/#/",
  },
};

//Home Page
const greeting = {
  title: "Abid-Ul Kamal",
  logo_name: "AbidUlKamal",
  nickname: "Abid",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/13PPxV9vAdWlEgLAGrHbgDQK-pEPoh8As/view?usp=sharing",
  portfolio_repository:
    "https://github.com/abidulkamal/abidulkamal.github.io",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/abidulkamal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abidulkamal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:abidulkamal9@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/abidulkamal",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abid_ul_kamal/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  /*[
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],*/
  data: [],
};

// Education Page
const competitiveSites = {
  competitiveSites: /*[
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F28C28",
      },
      profileLink: "https://leetcode.com/Kritagya7777/",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/kritagyakumra",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@kritagya6",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/kritagyakumra",
    },
    {
      siteName: "Coding Ninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#F28C28",
      },
      profileLink:
        "https://www.codingninjas.com/codestudio/profile/34a33414-da35-4b62-ab67-1507226c6539",
    },
  ]*/ [],
};

const degrees = {
  degrees: [
    {
      title: "Bangladesh University of Engineering and Technology",
      subtitle: "Bachelor of Science in Industrial & Production Engineering",
      logo_path: "buet_logo.png",
      alt_name: "buet logo",
      duration: "2018 - 2023",
      gpa: "3.61 out of 4",
      descriptions: [
        "⚡ I have studied basic CAD(Computer Aided Design) software e.g. SolidWorks, AutoCAD, Catia and Analysis software like Ansys and Matlab.",
        "⚡ During this time, I have done courses on Optimization, Supply Chain, CAD/CAM(Computer Aided Design/Computer Aided Manufacturing), Ergonomics, Project Management, Environment Management.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Science, Python.",
        "⚡ Been a part of different projects including Oblivion Bubble Copter. Product Design Sessional Project",
        "⚡ I was known for my curiosity during my entire college period and have performed very well in every subject of my academic career as a IPE student.",
      ],
      website_link: "https://buet.ac.in/",
    },
    {
      title: "Chittagong College, Chattogram",
      subtitle: "Higher Secondary Certificate",
      logo_path: "cc.png",
      alt_name: "buet logo",
      duration: "2015 - 2017",
      descriptions: [],
      website_link: "https://ctgcollege.gov.bd/",
    },
    {
      title: "Government Muslim High School, Chattogram",
      subtitle: "Secondary School Certificate and Junior School Certificate",
      logo_path: "gmhs.png",
      alt_name: "buet logo",
      duration: "2015 - 2017",
      descriptions: [],
      website_link: "https://gmhsctg.tsmts.com",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CTL.SC0x: Supply Chain Analytics [2020]",
      subtitle: " MITx MicroMasters Program in Supply Chain Management",
      logo_path: "mit.ico",
      certificate_link:
        "https://courses.edx.org/certificates/fd6849fb81b64448abb35a901df29292",
      alt_name: "Supply Chain Analytics",
      color_code: "#fafafa",
    },
    {
      title: "2.961.1x: Management in Engineering: Accounting and Planning",
      subtitle: "MITx's Principles of Manufacturing",
      logo_path: "mit.ico",
      certificate_link:
        "https://courses.edx.org/certificates/6126fe65fc2c4b3f9a4c7acf43363ca5",
      alt_name: "Management in Engineering: Accounting and Planning",
      color_code: "#f7f9ff",
    },

    {
      title: "Data Analysis with Python",
      subtitle: "IBM Data Science Professional Certificate",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/a546b67a-893c-4729-b6d1-3314cf21965d/linked_in_profile",
      alt_name: "Oraclibme",
      color_code: "#FFF",
    },
    {
      title: "Data Visualization with Python",
      subtitle: "IBM Data Science Professional Certificate",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.credly.com/badges/d18d53c3-dafe-4650-b832-0bbcda95a837/linked_in_profile",
      alt_name: "bm",
      color_code: "#FFF",
    },

    {
      title: "Python (Basic)",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/41ed92260e9f",
      alt_name: "Data Structures",
      color_code: "#FFF",
    },
    {
      title: "Supply Chain Management",
      subtitle: "Rutgers: The State University of New Jersey",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/8XSVN5MXCUM2",
      alt_name: "SCM",
      color_code: "#89CFF0",
    },
    {
      title: "Introduction to Data Science in Python",
      subtitle: "University of Michigan",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/DBETFN9H9FZB?utm_campaign=sharebutton_course&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link&utm_user=91a8d63def4d6b5327d443c197a07080f379ed3f",
      alt_name: "Coursera",
      color_code: "#89CFF0",
    },

    {
      title: "Python Data Structures",
      subtitle: "University of Michigan",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9767E6GYLU5K?utm_source=link&utm_campaign=copybutton_certificate",
      alt_name: "Python 3",
      color_code: "#89CFF0",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "University of Michigan",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/KQCT8TY7PXAC?utm_campaign=copybutton_certificate&utm_content=cert_image&utm_medium=certificate&utm_source=link",
      alt_name: "Python 3",
      color_code: "#89CFF0",
    },
    {
      title: "Introduction to Tableau",
      subtitle: "Datacamp",
      logo_path: "datacamp.jpg",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/ad28a76e2a5d8470c67a37d5160bf241e8ba4516",
      alt_name: "BVICAM",
      color_code: "#FFF",
    },
    {
      title: "Exploratory Data Analysis in Python",
      subtitle: "Datacamp",
      logo_path: "datacamp.jpg",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/74427f9c7d35ec929129d5314937cbd89c934447",
      alt_name: "Python",
      color_code: "#FFF",
    },
    {
      title: "Supply Chain Analytics in Python",
      subtitle: "Datacamp",
      logo_path: "datacamp.jpg",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/9a2a8d87be8c0c46aa847cf20ba4bfbd870a95b4",
      alt_name: "Python 3",
      color_code: "#FFF",
    },
    {
      title: "Intermediate Python",
      subtitle: "Datacamp",
      logo_path: "datacamp.jpg",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/48e9e8aaf173d7ee3c463b93b3b4efe32d8a1346",
      alt_name: "Python 3",
      color_code: "#FFF",
    },
    {
      title: "Statistical Thinking in Python (Part 1)",
      subtitle: "Datacamp",
      logo_path: "datacamp.jpg",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/26096781c7e00cd0ace63ed175cc99a383f1a935",
      alt_name: "Python 3",
      color_code: "#FFF",
    },

    {
      title: "The Bronze Standard",
      subtitle:
        "The Duke of Edinburgh's International Award Foundation - Bangladesh",
      logo_path: "duke.png",
      certificate_link:
        "https://drive.google.com/file/d/1aAHN2DSkg9EKZsJhZSSDkfnwahpIuonf/view",
      alt_name: "Python 3",
      color_code: "#FFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Being an Undergrad student of Industrial and Production Engineering, I had the opportunity  to work on different individual and Team projects such as SolidWorks Project, Project Design Sessional, Catia Project.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Coats Final Winding Intern",
          company: "Coats Bangladesh Ltd",
          company_url: "https://www.coats.com/en",
          logo_path: "coats.png",
          duration: "April 2022 - May 2022",
          location: "Chattogram, Bangladesh",
          description:
            "Coats Group is a British multinational company specializing in the manufacture and distribution of thread, yarn, and industrial textile products. With a presence in over 50 countries, Coats is known for its innovative and sustainable solutions in the textile industry. During my internship, I was part of 3 different projects in which I contributed in the field of UI-UX Design, Data Analytics, and Frond-end and Back-end respectively.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Projects worked on during my Internship",
      experiences: [
        {
          title: "SSM TK 220CT Efficiency Improvement ",
          company: "Coats Bangladesh Ltd",
          company_url: "https://www.coats.com/en",
          logo_path: "coats.png",
          duration: "April 2022 - May 2022",
          location: "Chattogram, Bangladesh",
          description:
            "My first project was improving the efficiency of the TK-20CT machine. TK-220CT machine is used to unwind GT and rewind them in 2 Degree 4 inch plastic cone. This machine is implemented with IoT. I found out the cause of it's inefficiency using Fishbone Diagram and created an action plan to solve the problem.",
          color: "#4285F4",
        },
        {
          title: "Improvement of Bobbin Box Current Scenario",
          company: "Coats Bangladesh Ltd",
          company_url: "https://www.coats.com/en",
          logo_path: "coats.png",
          duration: "April 2022 - May 2022",
          location: "Chattogram, Bangladesh",
          description:
            "My second project was about improving the scenario of bobbin box recycling. Their existing plan was to use two different bins for keeping the bobbin with thread and bobbin s=without s=thread separate. But the distance between the bins actually discouraged the operators to keep the correct bobbin in correct bin. I designed two alternate design for keeping the two types of bobbin in the same bin by separating the bin in the mid section and color coding the bin for better lucidity",
          color: "#D83B01",
        },
        {
          title: "Creating One Point Lesson",
          company: "Coats Bangladesh Ltd",
          company_url: "https://www.coats.com/en",
          logo_path: "coats.png",
          duration: "April 2022 - May 2022",
          location: "Chattogram, Bangladesh",
          description:
            "My third project was creating One Point Lessons(OPL) for Coats. I was responsible for creating OPL based on the Standard Operating Procedure of IoT implemented TK-220CT machine. ",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science, Machine Learning, React based projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abid.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with SolidWorks, Arena, Catiya or any of the similar software. I can also help you with Optimization program.",
  },
  blogSection: /* {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character and would create a blog website very shortly.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  }*/ {},
  addressSection: {
    title: "Address",
    subtitle: "Mom's Love, Hazi Rahim Box Lane, Lalbag, Dhaka, Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/evaKeoXmkuWRnKd76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+880 1850375896",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
