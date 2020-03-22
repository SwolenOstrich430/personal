import React from "react";
import "./index.css";


function About() {
    return (
        <div className="about-content-container">
            <div className="main-content-container">
                <h2 className="about-header-display">About Me</h2>
                <h3 className="about-me-content-header">Who I Am</h3>
                <div className="about-me-content-display">
                    <p>Hi! I'm Peter Connelly. This past year, I graduated from Elon University with a 
                       major in Creative Writing and a minor in Computer Science. Wanting to 
                       pursue development further, I attended a coding bootcamp at UNC. 
                    </p>
                    <p>I work as a technical editor for DZone.com where I currate and write
                       content focused on an enterprise Java stack. 
                    </p>
                </div>
                <h3 className="about-me-content-header">What I'm Interested in</h3>
                <div className="about-me-content-display">
                    <p>
                       Currently, I'm just trying to learn as much as I can. I'm focused on 
                       better understanding how lower-level languages and data structures work, 
                       learning Redux and how React functions under-the-hood, and working to 
                       learn how to better manage dependencies in my code by researching design patterns 
                       (and listening to the occassional Uncle Bob talk).
                    </p>
                </div>
            </div>            
        </div>
    )
}

export default About;