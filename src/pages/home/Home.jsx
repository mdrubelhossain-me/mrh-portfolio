import React from "react";
import Hero from "./Hero";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";

const Home = () => (
  <>
    <section id="about">
      <Hero />
    </section>
    <section id="projects" className="py-20 px-5 md:px-2">
      <div className="container mx-auto">
        <Projects />
      </div>
    </section>
    <section id="skills" className="py-20 bg-gray-50 px-5 md:px-2">
      <div className="container mx-auto">
        <Skills />
      </div>
    </section>
    <section id="contact" className="py-20 px-5 md:px-2">
      <div className="container mx-auto">
        <Contact/>
      </div>
    </section>
  </>
);

export default Home;
