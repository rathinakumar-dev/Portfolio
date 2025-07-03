import React from "react"; 
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer"; 


const App = () => {
  return (
    <> 
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer /> 
    </>
  );
};

export default App;
