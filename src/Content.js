// import images
import Hero_person from "./assets/images/Hero/person.png";
import stopwatch from './assets/images/stopwatch.jpg'
import flag from './assets/images/flag.png'
import run from './assets/images/run10.jpg'
import food from './assets/images/food.png'

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";

// import project1 from "./assets/images/projects/img1.png";
// import project2 from "./assets/images/projects/img2.png";
// import project3 from "./assets/images/projects/img3.png";
// import person_project from "./assets/images/projects/person.png";

// import avatar1 from "./assets/images/Testimonials/avatar1.png";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import {BsFillPersonFill} from "react-icons/bs";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Collaboration Run",
    firstName: "Chhetaz",
    LastName: "Running Squad",
    btnText: "Enroll Now",
    image: Hero_person,
    hero_content: [
      {
        count: "06 August 2023",
        text: "Sunday, 5.45 AM Onwards",
      },
      // {
      //   count: "20+",
      //   text: "Projects Worked in my career",
      // },
    ],
  },
  skills: {
    title: "Schedule",
    subtitle: "Program Flow",
    skills_content: [
      {
        name: "Meeting Time",
        para: "05:15AM Onwards",
        logo: stopwatch,
      },
      {
        name: "National Anthem",
        para: "05:30AM - 05:45AM ",
        logo: flag,
      },
      {
        name: "Start RUN",
        para: "05:45AM Onwards",
        logo: run,
      },
      {
        name: "Breakfast",
        para: "07:00AM Onwards",
        logo: food,
      },
      // {
      //   name: "Sketch",
      //   para: "Lorem ipsum text  dummy",
      //   logo: sketch,
      // },
      // {
      //   name: "Python",
      //   para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Tracks",
    subtitle: "OPTIONS PROVIDED",
    service_content: [
      {
        title: "5KM",
        para: "So, let's make today legendary! Embrace the challenge, embrace the thrill, and embrace the feeling of absolute accomplishment as you cross that 5 km mark. You've got this! Believe in yourself and show the world what you're made of! Go out there and make it happen!",
                logo: services_logo1,
      },
      {
        title: "10KM",
        para: "So, let the adrenaline flow, let the joy of running consume you, and let your heart guide you through those 10 km. You're unstoppable, and nothing can stand in your way. Go out there and conquer this challenge with a smile on your face and fire in your soul. The world is cheering you on, and today, you're shining brighter than ever before! Run like the wind, and let the magic happen! You've got this!",        
        logo: services_logo2,
      },
      // {
      //   title: "PhotoShop Editing",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo3,
      // },
    ],
  },
  Projects: {
    title: "Starting Point",
    subtitle: "Ready, Set, Go!",
    // image: person_project,
    project_content: [
      {
        title: "Gym Website",
        // image: project1,
      },
      {
        title: "Social Media web",
        // image: project2,
      },
      {
        title: "Creative Website",
        // image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Countdown",
    subtitle: "SEE YOU SOON!",
    // testimonials_content: [
    //   {
    //     review:
    //       "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    //     img: avatar1,
    //     name: "JOHN DOE",
    //   },
    //   {
    //     review:
    //       "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    //     img: avatar2,
    //     name: "Tom Alex",
    //   },
    //   {
    //     review:
    //       "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    //     img: avatar3,
    //     name: "Johnny",
    //   },
    //   {
    //     review:
    //       "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    //     img: avatar4,
    //     name: "ROBBIN",
    //   },
    // ],
  },
  Hireme: {
    // title: "Hire Me",
    // subtitle: "FOR YOUR PROJECTS",
    // image1: Hireme_person,
    // image2: Hireme_person2,
    // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    // btnText: "Hire Me",
  },
  Contact: {
    title: "Contact",
    subtitle: "For further information",
    social_media: [
      {
        text: "Raja Khandelwal",
        icon: BsFillPersonFill,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: 9831020874,
        icon: MdCall,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "Ajay Shah",
        icon: BsFillPersonFill,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        // text: "Raja Khandelwal",
        text: 9883093710,
        icon: MdCall,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "Nikhil Ginoria",
        // text: 9831020874,
        icon: BsFillPersonFill,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        // text: "Raja Khandelwal",
        text: 9836545930,
        icon: MdCall,
        link: "mailto:codeaprogram@gmail.com",
      },
      // {
      //   text: "+91 1234 56778",
      //   icon: MdCall,
      //   link: "https://wa.me/1234567890",
      // },
      // {
      //   text: "codeaprogram",
      //   icon: BsInstagram,
      //   link: "https://www.instagram.com/codeaprogram/",
      // },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
