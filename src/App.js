import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
