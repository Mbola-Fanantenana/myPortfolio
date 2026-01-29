import React from "react";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experiences />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
