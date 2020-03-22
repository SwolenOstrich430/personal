import React from "react";
import "./index.css";
import ContactForm from "../../components/contactform";


function Contact() {
    return (
        <div className="about-content-container">
            <div className="main-content-container">
                <h2 className="about-header-display">Contact</h2>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;