import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import "./index.css";


class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "", 
            lastName: "", 
            email: "",
            message: "", 
            errorMessages: []
        }
    }

    isValidEmail = () => {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailRegex.test(this.state.email);
    }

    isValidFirstName = () => {
        return this.state.firstName.length > 1;
    }

    isValidLastName = () => {
        return this.state.lastName.length > 1;
    }

    isValidMessage = () => {
        return this.state.message.length > 20 && this.state.message.length < 500;
    }

    getErrors = () => {
        let errors = []

        if(!this.isValidEmail()) {
            errors.push("Must enter a valid email");
        }

        if(!this.isValidFirstName()) {
            errors.push("First name must be longer than 1 letter");
        }

        if(!this.isValidLastName()) {
            errors.push("Last name must be longer than 1 letter");
        }

        if(!this.isValidMessage()) {
            errors.push(`Message must be between 20 and 500 characters. It's currently ${this.state.message.length} characters`);
        }

        return errors;
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    getTemplateParams = (message) => {
        const templateParams = {
            from_name: `${this.state.firstName} (${this.state.email})`, 
            to_name: `${process.env.EMAIL_NAME}`, 
            subject: "Portfolio Email", 
            message_html: message
        }

        return templateParams;
    }

    clearForm = () => {
        this.setState({
            firstName: "", 
            lastName: "",
            email: "",
            message: "",
            errorMessages: []
        }, () => alert("Your message has been sent!"))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        let potentialErrors = this.getErrors();

        if(potentialErrors.length > 0) {
            this.setState({
                errorMessages: potentialErrors
            })
        } else {
            let templateParams = this.getTemplateParams(this.state.message);

            emailjs.send("gmail", "template_qpBnHz1I", templateParams, process.env.EMAIL_USER_ID)
            .then(result => {
                this.clearForm();
            })
            .catch(error => {   
                this.setState({
                    errorMessages: ["Could not send message. Check your email to make sure it's correct."]
                })
            }) 
        }
    }

    render() {
        return (
            <form id="contact-from-container" className="contact-form-container" onSubmit={this.handleSubmit}>
                <label className="contact-form-label">First Name</label>
                <input
                    className="contact-form-input" 
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="John"
                />
                <label className="contact-form-label">Last Name</label>
                <input 
                    className="contact-form-input" 
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Johnstonson"
                />
                <label className="contact-form-label">Email</label>
                <input 
                    className="contact-form-input" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="jj@gmail.com"
                />
                <label className="contact-form-label">Message</label>
                <textarea 
                    className="contact-form-message-input" 
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Send me something!"
                />
                {this.state.errorMessages.map(errorMessage => {
                    return (
                            <p 
                             className="contact-form-error-message" 
                             key={errorMessage}>{errorMessage}
                           </p>
                        )
                    })
                }
                <button className="contact-form-submit-button">Send!</button>
            </form>
        )
    }
}

export default ContactForm;