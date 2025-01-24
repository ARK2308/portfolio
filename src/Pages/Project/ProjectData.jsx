import React from 'react'
// animated project images 
import brainspace from '../../project-assets/brainspace.png'
import lazarev from '../../project-assets/lazarev.png'
import hello from '../../project-assets/wethinkelastic.png'
// react project imags 
import movieapp from '../../project-assets/movieapp.png'
import addtocart from '../../project-assets/addtocart.png'
import portfolio from '../../project-assets/portfolio.png'


// backend project 
import recipeHub from '../../project-assets/recipe1.png'
import socialmedia from '../../project-assets/socialmedia.jpg'

const projectData = [
    // animated project series 
    {
        projName: "We Think Elastic",
        img: hello,
        live: "https://devanshi-bilthare.github.io/we-think-elastic/",
        github: "https://github.com/ARK2308/we-think-elastic",
        skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
        disc: "We Think Elastic is a website where I've poured all my creativity and considerable thought. It incorporates GSAP animations and numerous scroll trigger effects. This creative website is designed purely for user satisfaction and showcases my mastery of animations",
        status: "completed",
        type: "animated"
    },
     {
        projName: "BrainSpace",
        img: brainspace,
        live: "https://brain-space-git-main-abdul-raheem-s-projects-c66332ac.vercel.app/",
        github: "https://github.com/ARK2308/brain_space-main",
        skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
        disc: "Brain Space: Developed with a focus on creating captivating animations and a visually appealing user interface. Utilized skills in animation design, UI/UX design, and front-end development to craft an engaging user experience.",
        status: "completed",
        type: "animated"
    },
    {
        projName: "Lazarave",
        img: lazarev,
        live: "https://lazarev-main-git-main-abdul-raheem-s-projects-c66332ac.vercel.app/",
        github: "https://github.com/ARK2308/lazarev-main",
        skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
        disc: " Crafted with a focus on immersive GSAP animations and a visually striking user interface. Emphasized modern UI/UX design principles and advanced front-end development techniques to deliver a dynamic and interactive experience that captivates users and elevates engagement.",
        status: "completed",
        type: "animated"
    },

    //   react  project series
    {
        projName: "Movie App",
        img: movieapp,
        live: "https://abdul-movieapp-123krkr.netlify.app/",
        github: "https://github.com/ARK2308/MovieApp",
        skilused: ["React", "Tailwind CSS", "Redux Toolkit", "Axios", "GSAP", "TMDB"],
        disc: "Movie App is a dynamic platform built with React, featuring GSAP-powered animations and smooth scroll effects for an engaging user experience. The app fetches real-time data using Axios and manages state efficiently with Redux Toolkit, creating a seamless and visually captivating interface tailored for movie enthusiasts.",
        status: "completed",
        type: "react"
    },
    {
        projName: "Add-To-Cart (Redux-Toolkit)",
        img: addtocart,
        live: "https://comforting-licorice-f1a976.netlify.app/",
        github: "https://github.com/ARK2308/AddtoCart-Redux-ToolKit",
        skilused: ["React", "Tailwind CSS", "Redux Toolkit", "Bootstrap"],
        disc: "Add-To-Cart is a fully responsive and interactive e-commerce cart system built with React. It leverages Redux Toolkit for state management, ensuring a seamless and efficient shopping experience. Styled with Tailwind CSS and Bootstrap, the app features a clean and modern design. Users can add, remove, and update products in their cart with ease, showcasing a perfect blend of functionality and aesthetics.",
        status: "completed",
        type: "react"
    },
    {
        projName: "My Portfolio",
        img: portfolio,
        live: "https://celadon-youtiao-c1830a.netlify.app/",
        github: "",
        skilused: ["React", "JavaScript", "HTML", "CSS"],
        disc: "I've crafted my portfolio to exhibit diverse projects and skills, offering insight into my capabilities. Learn more about me through this platform, complete with links to my socials. Explore my journey and discover how I bring creativity and expertise to each endeavor.",
        status: "completed",
        type: "react"
    },

    // backend project data 
    {
        projName: "Recipe Hub",
        img: recipeHub,
        live: "",
        github: "https://github.com/ARK2308/recipe-hub-main",
        skilused: ["MongoDB", "Node Js", "JavaScript", "Tailwind", "Express", "Ejs", "Multer", "Passport", "Nodemailer"],
        disc: " Key features include user authentication (sign up/log in), profile customization, followers and posts management, and seamless recipe creation and editing. Users can explore recipes from others, interact by liking, commenting, or saving, and follow other users. The home page highlights recent recipes and new users, fostering a vibrant cooking community.",
        status: "completed",
        type: "backend"
    },
    {
        projName: "Social Media",
        img: socialmedia,
        live: "https://social-media-n9y5.onrender.com/",
        github: "https://github.com/ARK2308/socialmedia10-main",
        skilused: ["MongoDB", "Node.js", "JavaScript", "EJS", "Tailwind CSS", "ImageKit", "Socket.IO", "Razorpay"],
        disc: "Social Media is a dynamic full-stack application that combines powerful backend capabilities with visually appealing front-end design. Built using Node.js and MongoDB, it ensures robust and scalable data handling. The app features real-time chat functionality powered by Socket.IO, image uploads integrated with ImageKit, and a seamless payment gateway using Razorpay. Designed with EJS templates and styled with Tailwind CSS, it offers a responsive and engaging user experience. From secure user authentication to interactive features, this project is a showcase of modern web development at its best.",
        status: "completed",
        type: "backend"
    },
    {
        projName: "Social Media",
        img: socialmedia,
        live: "https://social-media-n9y5.onrender.com/",
        github: "https://github.com/ARK2308/socialmedia10-main",
        skilused: ["MongoDB", "Node.js", "JavaScript", "EJS", "Tailwind CSS", "ImageKit", "Socket.IO", "Razorpay"],
        disc: "Social Media is a dynamic full-stack application that combines powerful backend capabilities with visually appealing front-end design. Built using Node.js and MongoDB, it ensures robust and scalable data handling. The app features real-time chat functionality powered by Socket.IO, image uploads integrated with ImageKit, and a seamless payment gateway using Razorpay. Designed with EJS templates and styled with Tailwind CSS, it offers a responsive and engaging user experience. From secure user authentication to interactive features, this project is a showcase of modern web development at its best.",
        status: "completed",
        type: "backend"
    },


]


export default projectData