import React, { useState } from "react";
import "./index.css"; 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import propic from './assets/profile.png';
import NODE from './assets/node.png';
import NEXT from './assets/next.png';
import GIT from './assets/git.png';
import TAILWIND from './assets/tailwind.png';
import CPP from './assets/c++.png';
import CSS from './assets/css.png';
import GITHUB from './assets/github.png';
import HTML from './assets/html.png';
import JS from './assets/js.png';
import MYSQL from './assets/mysql.png';
import ORACLE from './assets/oracle.png';
import REACT from './assets/react.png';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <nav>
        <h1 className="text-gradient" > Hey there!</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="social-icons ">
          <a href="https://github.com/Vish9u-kr01" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vishnu-kumar-9b33a91ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://leetcode.com/vishnukr123/" target="_blank" rel="noreferrer"><TbBrandLeetcode /></a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <img src={propic} alt="Profile" className="hero-img" />
        <h2 className="hero-name ">Hi, I'm Vishnu Kumar</h2>
        <p className="hero-role text-gradient">Frontend Web Developer</p>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>
        <p className="text-gradient">
          Vishnu Kumar, a second-year Computer Science student from BPIT, Delhi,
          passionate about frontend web development and building impactful projects.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="tech-icons">
          <img src={HTML} alt="HTML" />
          <img src={CSS} alt="CSS" />
          <img src={JS} alt="JavaScript" />
          <img src={REACT} alt="React" />
          <img src={ORACLE} alt="ORACLE" />
          <img src={MYSQL} alt="MySQL" />
          <img src={CPP} alt="C/C++" />
          <img src={GITHUB} alt="GitHub" />
          <img src={TAILWIND} alt="tailwind" />
          <img src={GIT} alt="git" />
          <img src={NODE} alt="node" />
          <img src={NEXT} alt="next" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3 className="text-gradient">To-Do List</h3>
          <p className="text-gradient">Built with React and TailwindCSS, featuring LocalStorage persistence.</p>
        </div>

        <div className="project-card">
          <h3 className="text-gradient">Weather App</h3>
          <p className="text-gradient">HTML, CSS, JavaScript with live weather API integration.</p>
        </div>

        <div className="project-card">
          <h3 className="text-gradient">Tic Tac Toe</h3>
          <p className="text-gradient">A fun and interactive game using HTML, CSS, JavaScript.</p>
        </div>

        <div className="project-card">
          <h3 className="text-gradient">Signup Form</h3>
          <p className="text-gradient">Form validation with React, styled using modern CSS techniques.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Get In Touch</h2>
        <p className="text-gradient">Let's Connect. Send me an e-mail through this button and I'll respond as soon as possible.</p>
        <p>Phone: 9873201255</p>
        <a href="mailto:vish9u1424@gmail.com">
        <button className="contact-btn">Let's Connect</button>
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Copyright. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;