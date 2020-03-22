(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{24:function(e,a,t){e.exports=t(44)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(14),i=t.n(s),o=(t(29),t(19)),l=t(5);t(30),t(31);var c=function(){return r.a.createElement("div",{className:"about-content-container"},r.a.createElement("div",{className:"main-content-container"},r.a.createElement("h2",{className:"about-header-display"},"About Me"),r.a.createElement("h3",{className:"about-me-content-header"},"Who I Am"),r.a.createElement("div",{className:"about-me-content-display"},r.a.createElement("p",null,"Hi! I'm Peter Connelly. This past year, I graduated from Elon University with a major in Creative Writing and a minor in Computer Science. Wanting to pursue development further, I attended a coding bootcamp at UNC."),r.a.createElement("p",null,"I work as a technical editor for DZone.com where I currate and write content focused on an enterprise Java stack.")),r.a.createElement("h3",{className:"about-me-content-header"},"What I'm Interested in"),r.a.createElement("div",{className:"about-me-content-display"},r.a.createElement("p",null,"Currently, I'm just trying to learn as much as I can. I'm focused on better understanding how lower-level languages and data structures work, learning Redux and how React functions under-the-hood, and working to learn how to better manage dependencies in my code by researching design patterns (and listening to the occassional Uncle Bob talk)."))))},m=(t(32),t(9));t(33);var u=function(e){return r.a.createElement("div",{className:"project-container"},r.a.createElement("div",{className:"project-information-container"},r.a.createElement("div",{className:"project-description-and-motivation-container"},r.a.createElement("h2",{className:"project-name-display"},e.name),r.a.createElement("h3",{className:"project-header-display"},"Description"),r.a.createElement("p",{className:"project-description-display"},e.description),r.a.createElement("h3",{className:"project-header-display"},e.motivation?"Motivation":"Responsibilities"),r.a.createElement("p",{className:"project-description-display"},e.motivation||e.repsonsibilities)),r.a.createElement("div",{className:"project-image-container"},r.a.createElement("img",{className:"project-image",src:"/personal"+e.imageSrc,alt:e.imageAlt}))),r.a.createElement("a",{href:e.githubLink,className:"see-on-github-link"},"See on Github"),e.needsHr&&r.a.createElement("hr",{align:"left",className:"project-divider"}))};var p=function(){return r.a.createElement("div",{className:"about-content-container"},r.a.createElement("div",{className:"main-content-container"},r.a.createElement("h2",{className:"about-header-display"},"Projects"),r.a.createElement("div",{className:"projects-container"},m.map((function(e,a){return r.a.createElement(u,{description:e.description,motivation:e.motivation,repsonsibilities:e.repsonsibilities,imageSrc:e.imageSrc,imageAlt:e.imageAlt,name:e.name,demoSrc:e.demoSrc,githubLink:e.githubLink,needsHr:m.length-1!==a})})))))},d=(t(34),t(15)),h=t(16),g=t(17),f=t(22),b=t(23),E=t(18),v=(t(37),function(e){Object(b.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,e)).isValidEmail=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.state.email)},n.isValidFirstName=function(){return n.state.firstName.length>1},n.isValidLastName=function(){return n.state.lastName.length>1},n.isValidMessage=function(){return n.state.message.length>20&&n.state.message.length<500},n.getErrors=function(){var e=[];return n.isValidEmail()||e.push("Must enter a valid email"),n.isValidFirstName()||e.push("First name must be longer than 1 letter"),n.isValidLastName()||e.push("Last name must be longer than 1 letter"),n.isValidMessage()||e.push("Message must be between 20 and 500 characters. It's currently ".concat(n.state.message.length," characters")),e},n.handleChange=function(e){var a=e.target,t=a.name,r=a.value;n.setState(Object(d.a)({},t,r))},n.getTemplateParams=function(e){return{from_name:"".concat(n.state.firstName," (").concat(n.state.email,")"),to_name:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/personal",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).EMAIL_NAME),subject:"Portfolio Email",message_html:e}},n.clearForm=function(){n.setState({firstName:"",lastName:"",email:"",message:"",errorMessages:[]},(function(){return alert("Your message has been sent!")}))},n.handleSubmit=function(e){e.preventDefault();var a=n.getErrors();if(a.length>0)n.setState({errorMessages:a});else{var t=n.getTemplateParams(n.state.message);E.send("gmail","template_qpBnHz1I",t,Object({NODE_ENV:"production",PUBLIC_URL:"/personal",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).EMAIL_USER_ID).then((function(e){n.clearForm()})).catch((function(e){n.setState({errorMessages:["Could not send message. Check your email to make sure it's correct."]})}))}},n.state={firstName:"",lastName:"",email:"",message:"",errorMessages:[]},n}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{id:"contact-from-container",className:"contact-form-container",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"contact-form-label"},"First Name"),r.a.createElement("input",{className:"contact-form-input",name:"firstName",value:this.state.firstName,onChange:this.handleChange,type:"text",placeholder:"John"}),r.a.createElement("label",{className:"contact-form-label"},"Last Name"),r.a.createElement("input",{className:"contact-form-input",name:"lastName",value:this.state.lastName,onChange:this.handleChange,type:"text",placeholder:"Johnstonson"}),r.a.createElement("label",{className:"contact-form-label"},"Email"),r.a.createElement("input",{className:"contact-form-input",name:"email",value:this.state.email,onChange:this.handleChange,type:"text",placeholder:"jj@gmail.com"}),r.a.createElement("label",{className:"contact-form-label"},"Message"),r.a.createElement("textarea",{className:"contact-form-message-input",name:"message",value:this.state.message,onChange:this.handleChange,type:"text",placeholder:"Send me something!"}),this.state.errorMessages.map((function(e){return r.a.createElement("p",{className:"contact-form-error-message",key:e},e)})),r.a.createElement("button",{className:"contact-form-submit-button"},"Send!"))}}]),t}(n.Component));var N=function(){return r.a.createElement("div",{className:"about-content-container"},r.a.createElement("div",{className:"main-content-container"},r.a.createElement("h2",{className:"about-header-display"},"Contact"),r.a.createElement(v,null)))};t(38);var w=function(){return r.a.createElement("div",{className:"navbar-container"},r.a.createElement("img",{className:"main-profile-picture",src:"/portfolio-image.png",alt:"me, dad, chris at graduation"}),r.a.createElement("h4",{className:"navbar-name-display"},"Peter Connelly"),r.a.createElement("h4",{className:"navbar-hopeful-position-display"},"Software Developer"),r.a.createElement("div",{className:"navbar-link-container"},r.a.createElement("a",{className:"navbar-link",href:"/personal/"},"About"),r.a.createElement("a",{className:"navbar-link",href:"/personal/projects"},"Projects"),r.a.createElement("a",{className:"navbar-link",href:"/personal/contact"},"Contact")),r.a.createElement("div",{className:"more-stuff-display"},r.a.createElement("h3",null,"More of my stuff")),r.a.createElement("div",{className:"navbar-social-container"},r.a.createElement("a",{href:"https://www.github.com/SwolenOstrich430",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"social-link-image",src:"/personal/github-logo.png",alt:"github-logo"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/peter-connelly-14186616b",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"social-link-image",src:"/personal/linkedin-logo.png",alt:"linkedin-logo"})),r.a.createElement("a",{href:"https://dzone.com/users/3776082/devada-peterc.html",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"social-link-image",src:"/personal/writing-logo.jpg",alt:"pencil-outline"}))),r.a.createElement("div",{className:"navbar-image-overlay"}))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(o.a,null,r.a.createElement(l.a,{exact:!0,path:"/personal/",component:c}),r.a.createElement(l.a,{path:"/personal/projects",component:p}),r.a.createElement(l.a,{path:"/personal/contact",component:N})))};i.a.render(r.a.createElement(y,null),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"name":"Data Structures in C","description":"The project takes a basic implementation of a Stack, Queue, and LinkedList (the latter with JS array methods on it). Currently, I\'m workin to expand each data structure\'s functionality and add a Hash Table.","motivation":"In school, I programmed a little bit in Assembly, a decent amount in Java, and some in Python. For the last 6 months, I\'ve mostly been working in JavaScript. A few weeks ago, I decided to fill in some of the gaps that I had in my understanding of both how data structures and memory work in programming.","imageSrc":"https://images.unsplash.com/photo-1527957557037-d079c24f24be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","imageAlt":"data-structure-in-c","githubLink":"https://www.github.com/SwolenOstrich430/Data_Structures_In_C"},{"name":"Evently","description":"The final project for the bootcamp I attended, Evently is an applciation that allows recreational organizations and members to better organize programs and events.","repsonsibilities":"For the project, I was responsible for authentication and authorization (OIDC with Okta), real-time messaging (socket.io), caching (Redis), and controller-logic.","imageSrc":"/evently-fetaures-page.png","imageAlt":"evently-features-page","githubLink":"https://www.github.com/SwolenOstrich430/Evently"},{"name":"Pillow","description":"Pillow, a Zillow clone, was the result second project in the bootcamp I attended. The application allows for users to search and save properties that they\'re interested in and contact potential landloards and real estate agents.","repsonsibilities":"I was responsible for creating the UI for the property search page, our database schema and some of our controller logic, the messaging feature, and authentication and authorization with bcrypt.","imageSrc":"/pillow-home-page.png","imageAlt":"pillow-home-page","githubLink":"https://www.github.com/SwolenOstrich430/web-project2"},{"name":"Quintessential Currations","description":"Quintessential Currations was the result of the first project in the bootcamp I attended. Quintessential Currations is a music recommendation and management app that lets users search, listen, and save artists and music based on similar artists they\'re interested in.","repsonsibilities":"For the project, I worked helped work with Taste Dive (recommendation program) and Apple Music API and set up user management in Firebase.","imageSrc":"/quintessential-currations-demo.png","imageAlt":"quintessential-currations-demo","githubLink":"https://www.github.com/SwolenOstrich430/Project1"}]')}},[[24,1,2]]]);
//# sourceMappingURL=main.3b97a51d.chunk.js.map