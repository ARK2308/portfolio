import React from "react"
import AnimatedProject from "./AnimatedProject"
import Footer from '../../Components/Footer/Footer'
import ReactProject from "./ReactProject"

const ProjectParent = ()=>{

    return(
        <div>
            <ReactProject />
            <AnimatedProject/>
            <Footer />
        </div>
    )
}
export default ProjectParent