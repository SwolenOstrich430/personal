import React from "react";
import "./index.css";

function Project(props) {
    return (
        <div className="project-container">
            <div className="project-information-container">
                <div className="project-description-and-motivation-container">
                    <h2 className="project-name-display">{props.name}</h2>
                    <h3 className="project-header-display">Description</h3>
                    <p className="project-description-display">{props.description}</p>
                    <h3 className="project-header-display">
                        {props.motivation ? "Motivation" : "Responsibilities"}
                    </h3>
                    <p className="project-description-display">{props.motivation || props.repsonsibilities}</p>
                </div>
                <div className="project-image-container">
                    <img className="project-image" src={props.imageSrc} alt={props.imageAlt} />
                </div>
            </div>
            <a href={props.githubLink} className="see-on-github-link">See on Github</a>
            { props.needsHr && <hr align="left" className="project-divider"/>}
        </div>
    )
}

export default Project;