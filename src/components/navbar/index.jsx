import React from "react";
import "./index.css";


function Navbar() {
    return (
        <div className="navbar-container">
            <img className="main-profile-picture" src="/portfolio-image.png" alt="me, dad, chris at graduation"/>            
            <h4 className="navbar-name-display">Peter Connelly</h4>
            <h4 className="navbar-hopeful-position-display">Software Developer</h4>
            <div className="navbar-link-container">
                <a className="navbar-link" href="/">About</a>
                <a className="navbar-link" href="/projects">Projects</a>
                <a className="navbar-link" href="/contact">Contact</a>
                <a className="navbar-link" href="/read">Things to Read</a>
            </div>
            <div className="more-stuff-display">
                <h3>More of my stuff</h3>
            </div>
            <div className="navbar-social-container">
                <a href="https://www.github.com/SwolenOstrich430" target="_blank" rel="noopener noreferrer">
                    <img className="social-link-image" src="/github-logo.png" alt="github-logo" />
                </a>
                <a href="https://www.linkedin.com/in/peter-connelly-14186616b" target="_blank" rel="noopener noreferrer">
                    <img className="social-link-image" src="/linkedin-logo.png" alt="linkedin-logo"/>
                </a>
                <a href="https://dzone.com/users/3776082/devada-peterc.html" target="_blank" rel="noopener noreferrer">
                    <img className="social-link-image" src="/writing-logo.jpg" alt="pencil-outline"/>
                </a>
            </div>
            <div className="navbar-image-overlay"></div>
        </div>
    )
}

export default Navbar;