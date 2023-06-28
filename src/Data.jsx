import { BsBook } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.jpeg";
import courses2 from "./assets/courses2.jpeg";
import courses3 from "./assets/courses3.jpeg";
import courses4 from "./assets/courses4.jpeg";
import courses5 from "./assets/courses5.jpeg";
import courses6 from "./assets/courses6.jpeg";
import courses7 from "./assets/courses7.jpeg";
import courses8 from "./assets/courses8.jpeg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

import AVTR1 from  "./assets/favour.jpg";
import AVTR2 from  "./assets/Timilehin.jpeg";
import AVTR3 from  "./assets/Raji.jpg";
import AVTR4 from  "./assets/Aliyu.jpeg";
import AVTR5 from  "./assets/Ganiyu.jpg";
import AVTR6 from  "./assets/Bukola.jpg";
import AVTR7 from  "./assets/popoola.jpeg";


export const navLinks = [
  // {
  //   id: 1,
  //   href: "home",
  //   link: "Home",
  // },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 2,
    href: "registration",
    link: "Registration",
  },
  {
    id: 3,
    href: "/courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "tutors",
    link: "Tutors",
  },
  {
    id: 5,
    href: "contactus",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <BsBook />,
    category: "100L",
    view : "View Courses",
  },
  {
    id: 2,
    icon: <BsFillPenFill />,
    category: "200L",
    view : "View Courses",
    
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "300L",
    view : "View Courses",
  },
//   {
//     id: 4,
//     icon: <MdOutlineScience />,
//     category: "Research Writing",
//     view : "View More",
//   },
];

export const subjects = [
  {
    id: 1, 
    level: "100L",
    first: "1. Microeconomics for beginners",
    second: "2. Mathematical Economics for beginners",
    third: "3. Macroeconomics for beginners",
    forth: "4. The Nigerian Economy",
    button: "Enroll"
  },
  {
    id: 2,
    level: "200L",
    first: "1. Intermediate Microeconomics I",
    second: "2. Intermediate Mathematical Economics I",
    third: "3. Intermediate Macroeconomics I",
    forth: "4. Economic Development",
    button: "Enroll"
  },
  {
    id: 3,
    level: "300L",
    first: "1. Intermediate Microeconomics II",
    second: "2. Intermediate Mathematical Economics II",
    third: "3. Intermediate Macroeconomics II",
    forth: "4. Econometrics",
    fifth: "5. Research writing",
    button: "Enroll"
  },
]

export const courses = [
   {
    id: 1,
    image: courses1,
    category: "Microeconomics",
    title: "Microeconomics for beginners",
    rating: 4.9,
    participants: 500,
    price: "#1000",
    Level: 100,
  },
  {
    id: 2,
    image: courses2,
    category: "Macroeconomics",
    title: "Mathematical Economics for beginners",
    rating: 4.8,
    participants: 700,
    price: "#1200",
    Level: 100,
  },
  {
    id: 3,
    image: courses3,
    category: "Finance",
    title: "Macroeconomics for beginners",
    rating: 4.9,
    participants: 300,
    price: "#9900",
    Level: 100,
  },
  {
    id: 4,
    image: courses4,
    category: "Quantitative Economics",
    title: "The Nigerian Economy",
    rating: 4.7,
    participants: 600,
    price: "#8500",
    Level: 100,
  },
  {
    id: 5,
    image: courses5,
    category: "International Economics",
    title: "Intermediate Microeconomics I",
    rating: 4.9,
    participants: 500,
    price: "#1050",
    Level: 200,
  },
  {
    id: 6,
    image: courses6,
    category: "History Of Economics",
    title: "Intermediate Mathematical Economics I",
    rating: 4.9,
    participants: 500,
    price: "#1050",
    Level: 300,
  },
  {
    id: 7,
    image: courses7,
    category: "Applied Microeconomics",
    title: "Intermediate Macroeconomics I",
    rating: 4.9,
    participants: 500,
    price: "#1050",
    Level: 300,
  },
  {
    id: 8,
    image: courses8,
    category: "Quantitative Economics",
    title: "Economic Development",
    rating: 4.9,
    participants: 500,
    price: "#1050",
    Level: 200,
  },
];

export const coursess = {
  All: [
  {
   id: 1,
   image: courses1,
   category: "Microeconomics",
   title: "Microeconomics for beginners",
   rating: 4.9,
   participants: 500,
   price: 1000,
   Level: 100,
   details: "This course introduces the basic principles of microeconomics through lectures, case studies, and problem sets. Students will learn about topics such as supply and demand, consumer behavior, and market structures."
 },
 {
   id: 2,
   image: courses2,
   category: "Macroeconomics",
   title: "Mathematical Economics for beginners",
   rating: 4.8,
   participants: 700,
   price: 1200,
   Level: 100,
   details: "This course will cover the fundamental concepts of macroeconomics, including national income, inflation, and unemployment. Students will also learn how to use mathematical models to analyze economic phenomena."
 },
 {
   id: 3,
   image: courses3,
   category: "Finance",
   title: "Macroeconomics for beginners",
   rating: 4.9,
   participants: 300,
   price: 9900,
   Level: 100,
   details: "This course is an introduction to macroeconomic theory and policy. Students will study topics such as economic growth, monetary policy, and fiscal policy, and will learn how to evaluate macroeconomic policies using data and statistical techniques."
 },
 {
   id: 4,
   image: courses4,
   category: "Quantitative Economics",
   title: "The Nigerian Economy",
   rating: 4.7,
   participants: 600,
   price: 8500,
   Level: 100,
   details: "This course provides an overview of the Nigerian economy, including its history, current state, and future prospects. Students will learn about the factors that drive economic growth and development in Nigeria, and will analyze the country's economic policies and institutions."
 },
 {
   id: 5,
   image: courses5,
   category: "International Economics",
   title: "Intermediate Microeconomics I",
   rating: 4.9,
   participants: 500,
   price: 1050,
   Level: 200,
   details: "This course builds on the principles of microeconomics introduced in the introductory course. Students will study more advanced topics such as game theory, externalities, and public goods, and will learn how to apply microeconomic models to real-world problems."
 },
 {
   id: 6,
   image: courses6,
   category: "History Of Economics",
   title: "Intermediate Mathematical Economics I",
   rating: 4.9,
   participants: 500,
   price: 1050,
   Level: 300,
   details: "This course is a continuation of the mathematical economics sequence, and will cover topics such as optimization, linear algebra, and dynamic programming. Students will develop the mathematical tools necessary for advanced economic analysis."
 },
 {
  id: 7,
  image: courses3,
  category: "Finance",
  title: "Macroeconomics for beginners",
  rating: 4.9,
  participants: 300,
  price: 9900,
  Level: 100,
  details: "This course builds on the concepts introduced in the introductory macroeconomics course, and will cover topics such as economic fluctuations, international trade, monetary and fiscal policies, and the role of central banks in the economy. Students will learn how to analyze macroeconomic data and use basic models to understand the behavior of key macroeconomic variables. The course will also discuss current macroeconomic issues and debates, such as inflation, unemployment, and the effectiveness of government interventions."
},
 {
  id: 8,
  image: courses8,
  category: "Quantitative Economics",
  title: "Economic Development",
  rating: 4.9,
  participants: 500,
  price: 1050,
  Level: 200,
  details: "This course will cover the theories and practices of economic development, with a focus on low and middle-income countries. Students will learn about different development models, policies, and strategies, and will explore case studies of successful and unsuccessful development experiences. The course will also discuss contemporary debates on development, including issues related to sustainability, inequality, and globalization."
}
],

"100L": [
  {
    id: 1,
    image: courses1,
    category: "Microeconomics",
    title: "Microeconomics for beginners",
    rating: 4.9,
    participants: 500,
    price: 1000,
    Level: 100,
    details: "This course introduces the basic principles of microeconomics through lectures, case studies, and problem sets. Students will learn about topics such as supply and demand, consumer behavior, and market structures."
  },
  {
    id: 2,
    image: courses2,
    category: "Macroeconomics",
    title: "Mathematical Economics for beginners",
    rating: 4.8,
    participants: 700,
    price: 1200,
    Level: 100,
    details: "This course will cover the fundamental concepts of macroeconomics, including national income, inflation, and unemployment. Students will also learn how to use mathematical models to analyze economic phenomena."
  },
  {
    id: 3,
    image: courses3,
    category: "Finance",
    title: "Macroeconomics for beginners",
    rating: 4.9,
    participants: 300,
    price: 9900,
    Level: 100,
    details: "This course is an introduction to macroeconomic theory and policy. Students will study topics such as economic growth, monetary policy, and fiscal policy, and will learn how to evaluate macroeconomic policies using data and statistical techniques."
  },
  {
    id: 4,
    image: courses4,
    category: "Quantitative Economics",
    title: "The Nigerian Economy",
    rating: 4.7,
    participants: 600,
    price: 8500,
    Level: 100,
    details: "This course provides an overview of the Nigerian economy, including its history, current state, and future prospects. Students will learn about the factors that drive economic growth and development in Nigeria, and will analyze the country's economic policies and institutions."
  },
],


"200L": [
  {
    id: 1,
    image: courses5,
    category: "International Economics",
    title: "Intermediate Microeconomics I",
    rating: 4.9,
    participants: 500,
    price: 1050,
    Level: 200,
    details: "This course builds on the principles of microeconomics introduced in the introductory course. Students will study more advanced topics such as game theory, externalities, and public goods, and will learn how to apply microeconomic models to real-world problems."
  },
  {
    id: 2,
    image: courses8,
    category: "Quantitative Economics",
    title: "Economic Development",
    rating: 4.9,
    participants: 500,
    price: 1050,
    Level: 200,
    details: "This course will cover the theories and practices of economic development, with a focus on low and middle-income countries. Students will learn about different development models, policies, and strategies, and will explore case studies of successful and unsuccessful development experiences. The course will also discuss contemporary debates on development, including issues related to sustainability, inequality, and globalization."
  }
],
 "300L": [
  {
    id: 1,
    image: courses6,
    category: "History Of Economics",
    title: "Intermediate Mathematical Economics I",
    rating: 4.9,
    participants: 500,
    price: 1050,
    Level: 300,
    details: "This course is a continuation of the mathematical economics sequence, and will cover topics such as optimization, linear algebra, and dynamic programming. Students will develop the mathematical tools necessary for advanced economic analysis."
  },

 ]
}


export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is MOG school of Economics?",
  },
  {
    id: 2,
    title: "What is the format of your online courses?",
  },
  {
    id: 3,
    title: "What level of Economics expertise do I need to have to enroll in your courses?",
  },
  {
    id: 4,
    title: "How much do your courses cost?",
  },
];


export const data = [
  {
    avatar: AVTR1,
    review: "I've been taking online Economics tutorials for two years to catch up on my studies. I find the lessons enjoyable and accommodating, with an effective teaching approach that corrects errors before demonstrating how to do things correctly. Overall, it's been a positive experience and I've learned a lot.",
    name: "Favour",
    school: "University Of Ibadan"
  },
  {
    avatar: AVTR2,
    review: "I highly recommend the Economics classes as they have helped me overcome the challenges I faced in Economics. The platform is great for problem-solving and has been an excellent resource for me.",
    name: "Ogunwewimo Timileyin",
    school: "Olabisi Onabanjo University"
  },
  {
    avatar: AVTR3,
    review: "MOG ECONOMICS has been a great blessing to me since day one. The program's standard exams, brainstorming, assignments, and quizzes have improved my grades and understanding of Economics. I appreciate how it thoroughly covers all necessary topics for each semester, giving me the confidence to defend myself as an Economics student. I am sincerely grateful for the program's efforts and highly recommend it.",
    name: "Raji Opeyemi",
    school: "University Of Ibadan"
  },
  {
    avatar: AVTR4,
    review: "MOG Economics has really helped me a lot especially in the mathematical aspect of Economics. The explanations on various topics are clear enough to understand. Thank you MOG Economics for this.",
    name: "Aliu Funmilayo",
    school: "University of Ibadan"
  },
  {
    avatar: AVTR5,
    review: "My name is Ganiyu Dasola. A student of University of Ibadan.I just want to say Thank you to MOG class. Thank you for answering my questions,even the smallest one.And  thank you for helping me understand the courses I'm confused about.MOG class makes learning more enjoyable.",
    name: "Ganiyu Dasola.",
    school: "University of Ibadan"
  },
  {
    avatar: AVTR6,
    review: "My name is Bukola Oke, an Economics student of the University Of Ibadan. MOG Economics brought light to my understanding of Economics when I enrolled in year 2, it took me away from the cramming which I did in year 1, to even teaching my colleagues in year 2 and 3. Thank you MOG Economics.",
    name: "Bukola Oke.",
    school: "University of Ibadan"
  },
  {
    avatar: AVTR7,
    review: "MOG Economics makes me find my fitting in the school of Economics. It has been the reason for being naturally ahead with the aid of their well simplified concepts in mathematical Economics and theories. I bless the day u get to know about the academy.",
    name: "Popoola Matthew",
    school: "Ahmadu Bello University"
  },
]

export const tutors = [
  {
  id: 1,
  image: courses1,
  name: 'Sola Adebowale',
  job: 'Principles of Microeconomics',
  socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
  id: 2,
  image: courses2,
  name: 'Daniel Akinlade',
  job: 'Macroeconomic Theory',
  socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
  id: 3,
  image: courses3,
  name: 'Edem Okonkwo',
  job: 'International Trade',
  socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
  id: 4,
  image: courses4,
  name: 'Chukwuemeka Onyekachi',
  job: 'Development Economics',
  socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
  id: 5,
  image: courses5,
  name: 'Diana Okafor',
  job: 'Monetary Economics',
  socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
  id: 6,
  image: courses6,
  name: 'Wayne Adeleke',
  job: 'Econometrics',
  socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  }
  ]

  export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
