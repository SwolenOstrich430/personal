import React from "react";
import "./index.css";
import projectsData from "./data.json";
import Project from "../../components/project";

function Projects() {
    return (
        <div className="about-content-container">
            <div className="main-content-container">
                <h2 className="about-header-display">Projects</h2>
                <div className="projects-container">
                     {projectsData.map((project, i) => {
                         return (
                            <Project 
                                description={project.description}
                                motivation={project.motivation}
                                repsonsibilities={project.repsonsibilities}
                                imageSrc={project.imageSrc}
                                imageAlt={project.imageAlt}
                                name={project.name}
                                demoSrc={project.demoSrc}
                                githubLink={project.githubLink}
                                needsHr={projectsData.length - 1 !== i}
                            />
                         )
                     })}
                </div>
            </div>
        </div>
    )
}

export default Projects;