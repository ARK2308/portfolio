import React from "react"
import AnimatedProject from "./AnimatedProject"
import Footer from '../../Components/Footer/Footer'
import ReactProject from "./ReactProject"
import BackendProject from "./BackendProject"

const ProjectParent = () => {

    return (
        <div>
            <ReactProject />
            <BackendProject />

            <AnimatedProject />
            <Footer />
        </div>
    )
}
export default ProjectParent