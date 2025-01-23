import React from 'react'
// animated project images 
import brainspace from '../../project-assets/brainspace.png'
import lazarev from  '../../project-assets/lazarev.png'
import hello from '../../project-assets/wethinkelastic.png'
// react project imags 
import movieapp from '../../project-assets/movieapp.png'

const projectData = [
    {
 // animated project series 
      projName:"BrainSpace",
      img: brainspace,
      live: "https://brain-space-git-main-abdul-raheem-s-projects-c66332ac.vercel.app/",
      github: "https://github.com/ARK2308/brain_space-main",
      skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
      disc: "Brain Space: Developed with a focus on creating captivating animations and a visually appealing user interface. Utilized skills in animation design, UI/UX design, and front-end development to craft an engaging user experience.",
      status: "completed",
      type:"animated"
    },
    {
      projName:"Lazarave",
      img: lazarev,
      live: "https://lazarev-main-git-main-abdul-raheem-s-projects-c66332ac.vercel.app/",
      github: "https://github.com/ARK2308/lazarev-main",
      skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
      disc: " Crafted with a focus on immersive GSAP animations and a visually striking user interface. Emphasized modern UI/UX design principles and advanced front-end development techniques to deliver a dynamic and interactive experience that captivates users and elevates engagement.",
      status: "completed",
      type:"animated"
    },
    {
        projName:"We Think Elastic",
        img:hello,
        live: "https://devanshi-bilthare.github.io/we-think-elastic/",
        github: "https://github.com/Devanshi-Bilthare/we-think-elastic",
        skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
        disc: "We Think Elastic is a website where I've poured all my creativity and considerable thought. It incorporates GSAP animations and numerous scroll trigger effects. This creative website is designed purely for user satisfaction and showcases my mastery of animations",
        status: "completed",
        type:"animated" 
      },
    //   react  project series
    {
        projName: "Movie App",
        img: movieapp,
        live: "https://app.netlify.com/sites/inspiring-seahorse-cad8fb/overview",
        github: "https://github.com/ARK2308/MovieApp",
        skilused: ["React", "Tailwind CSS", "Redux Toolkit", "Axios", "GSAP" ,"TMDB"],
        disc: "Movie App is a dynamic platform built with React, featuring GSAP-powered animations and smooth scroll effects for an engaging user experience. The app fetches real-time data using Axios and manages state efficiently with Redux Toolkit, creating a seamless and visually captivating interface tailored for movie enthusiasts.",
        status: "completed",
        type: "react"
    },
    
]


    export default projectData