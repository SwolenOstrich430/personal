import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
