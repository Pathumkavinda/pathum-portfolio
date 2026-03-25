import supercarapp from "../../public/ProjectsImage/supercar.png";
import megacitycab from "../../public/ProjectsImage/megacitycab.png";
import AgriConnectv1 from "../../public/ProjectsImage/AgriConnectv1.jpg";
import bakeryimage from "../../public/ProjectsImage/bakeryimage.png";
import cafeimage from "../../public/ProjectsImage/cafeimage.png";
import dogfood from "../../public/ProjectsImage/dogfood.png";
import erpJava from "../../public/ProjectsImage/erpJava.png";
import blog from "../../public/ProjectsImage/blog.png";
import smartcrop from "../../public/ProjectsImage/smart-crop.png";

const projectData = [
  {
    image: smartcrop,
    title: "Smart Crop Adviser – Crop recommendation system",
    description:
  "Smart Crop Adviser is a full-stack agricultural decision-support platform built for Sri Lankan farmers. Users input soil parameters (pH, nitrogen, phosphorus, potassium), location (district and agro-zone), and seasonal data to receive AI-powered crop recommendations powered by a machine learning model running on the backend." +
  "Key highlights:∙ ML-driven predictions — A trained model recommends the best-fit crop along with suitability scores and fertilizer/soil management advice generated dynamically from input data." +
  "∙ Multi-language support — Full localization in English, Sinhala, and Tamil, making it accessible to Sri Lankas diverse farming communities." +
  "∙ Real-time features — Socket.IO-powered messaging between farmers and agricultural advisers, with file sharing support." +
  "∙ Prediction history — Users can track past analyses, view unique districts analyzed, and monitor activity over time." +
  "∙ Admin dashboard — Manage users, monitor ML model performance, and view prediction trends across regions." +
  "∙ Light/Dark theme — Fully themed UI with a custom theme context and CSS variable system." +
  "∙ Tech stack — Next.js (frontend), Node.js + Express (backend), Sequelize ORM, MYSQL, Socket.IO, and a Python ML model served via FastAPI.",
    techStack: [
      "Next.js",
      "Express.js",
      "Python (FastAPI)",
    ],
    repositories: [
      {
        reponame: "Live Demo",
        link: "https://smart-crop-adviserfrontend.vercel.app/",
      },
      {
        reponame: "Frontend Repo",
        link: "https://github.com/Pathumkavinda/smart-crop-adviser/tree/22c636638a1864719640e224e3c116b330692307/smart-crop-adviser",
      },
      {
        reponame: "Backend Repo",
        link: "https://github.com/Pathumkavinda/smart-crop-adviser/tree/22c636638a1864719640e224e3c116b330692307/smart-crop-api",
      },
            {
        reponame: "ML Model Repo",
        link: "https://github.com/Pathumkavinda/smart-crop-adviser/tree/22c636638a1864719640e224e3c116b330692307/crop-ml-service",
      },
    ],
  },
  {
    image: supercarapp,
    title: "Predict Supercar Prices with Precision",
    description:
      "A web platform for supercar market valuation, empowering collectors, dealers, and enthusiasts with machine learning-powered price predictions, vehicle history insights, and user account management.",
    techStack: [
      "HTML",
      "CSS",
      "Python(FastAPI)",
      "MYSQL",
      "Random Forest",
    ],
    repositories: [
      {
        reponame: "GitHub Repo",
        link: "https://github.com/Pathumkavinda/Predict_Car_Prices_Predicter-2025.git",
      },
    ],
  },
  {
    image: megacitycab,
    title: "Mega City Cab System",
    description:
      "A digital solution to manage cab bookings in Colombo, automating customer registration, booking, billing, and driver management with secure access and a user-friendly experience.",
    techStack: [
      "HTML",
      "Java",
      "MySQL",
    ],
    repositories: [
      {
        reponame: "Frontend Repo",
        link: "https://github.com/Pathumkavinda/Mega-city-cab-frontend.git",
      },
      {
        reponame: "Backend Repo",
        link: "https://github.com/Pathumkavinda/Mega-city-cab-backend-project.git",
      },
    ],
  },
  // {
  //   image: AgriConnectv1,
  //   title: "AgriHub",
  //   description:
  //     "A smart farming web application that reduces wastage and helps farmers make effective decisions about which crops to grow during different seasons.",
  //   techStack: [
  //     "React.js",
  //     "Redux",
  //     "Express.js",
  //     "React Router",
  //     "CSS",
  //     "PostgreSQL",
  //     "REST APIs",
  //   ],
  //   repositories: [
  //     {
  //       reponame: "Backend Repo",
  //       link: "https://github.com/nadila2k/agrihub-backend-api.git",
  //     },
  //   ],
  // },
  // {
  //   image: blog,
  //   title: "Blog API",
  //   description:
  //     "A content management system for blogging, featuring image uploads via AWS S3, user engagement with likes and comments, and AI-powered content generation with OpenAI.",
  //   techStack: [
  //     "Java",
  //     "Spring Boot",
  //     "Spring Security",
  //     "Spring Data JPA",
  //     "PostgreSQL",
  //     "AWS S3",
  //     "OpenAI API",
  //   ],
  //   repositories: [
  //     {
  //       reponame: "GitHub Repo",
  //       link: "https://github.com/nadila2k/blog-api.git",
  //     },
  //   ],
  // },
  // {
  //   image: dogfood,
  //   title: "DogApp",
  //   description:
  //     "A mobile application for dog lovers to find toys, food, vitamins, and share knowledge about dog care.",
  //   techStack: ["React.js", "React Native", "Firebase", "CSS"],
  //   repositories: [
  //     {
  //       reponame: "GitHub Repo",
  //       link: "https://github.com/nadila2k/DogFoodApp.git",
  //     },
  //   ],
  // },
  // {
  //   image: cafeimage,
  //   title: "Restaurant Booking System",
  //   description:
  //     "A web application for restaurant bookings, reservations, and beverage orders, built using pure PHP and MySQL.",
  //   techStack: ["PHP", "HTML5", "JavaScript", "JSON", "MySQL"],
  //   repositories: [
  //     {
  //       reponame: "GitHub Repo",
  //       link: "https://github.com/nadila2k/TheGalleryCafe.git",
  //     },
  //   ],
  // },
  // {
  //   image: erpJava,
  //   title: "HRM System",
  //   description:
  //     "A human resource management desktop application to manage employees, calculate salaries, and handle HR tasks.",
  //   techStack: ["Java", "JavaFX", "MySQL"],
  //   repositories: [
  //     {
  //       reponame: "GitHub Repo",
  //       link: "https://github.com/nadila2k/Colombo-Institute-Employee-Management-System.git",
  //     },
  //   ],
  // },
  // {
  //   image: bakeryimage,
  //   title: "Bakery Billing System",
  //   description:
  //     "A console application for a bakery, managing baking schedules, calculating prices, and listing items.",
  //   techStack: ["C++", "OOP"],
  //   repositories: [
  //     {
  //       reponame: "GitHub Repo",
  //       link: "https://github.com/nadila2k/bakery_automated_billing_system.git",
  //     },
  //   ],
  // },
];

export default projectData;
