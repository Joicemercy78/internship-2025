import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", minWidth: "100vw", color: "white" }}>
      <Navbar />
    <div style={{ paddingTop: "80px" }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </div>
  );
};

export default App;
