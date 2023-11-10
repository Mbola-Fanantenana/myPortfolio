import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
