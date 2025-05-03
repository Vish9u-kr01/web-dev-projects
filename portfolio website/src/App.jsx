import React, { useState } from "react";
import "./index.css"; 
import ButtonCV from "./components/button";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
import GMAIL from './assets/gmail.png';
import INSTA from './assets/insta.png';
import LINK from './assets/link.png';
import NPM from './assets/npm.png';
import VITE from './assets/vite.png';
import VSCODE from './assets/vscode.png';
import WINDOWS from './assets/windows.png';


const App = () => {
  const [text] = useTypewriter({
    words: ["Student", "Front-End Developer","UI/UX Designer","Web developer","Video-Editor"],
    loop: {},
  });
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
        <p className="hero-role text-gradient">  {text}
        <Cursor cursorStyle="|" cursorColor="white" /></p>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>
        <p className="text-gradient">
          Vishnu Kumar, a second-year Computer Science student from BPIT, Delhi,
          passionate about frontend web development and building impactful projects.
        </p>
        <div className="relative" data-aos="fade-up" data-aos-duration="800">
							<ButtonCV />
						</div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="tech-icons">
        <div className="icon-track">
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
          <img src={GMAIL} alt="gmail" />
          <img src={INSTA} alt="instagram" />
          <img src={LINK} alt="linkdin" />
          <img src={NPM} alt="npm" />
          <img src={VITE} alt="vite" />
          <img src={VSCODE} alt="vscode" />
          <img src={WINDOWS} alt="windows" />
        </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
        <Card1/>   
        </div>

        <div className="project-card">
        <Card2/>  
        </div>

        <div className="project-card">
        <Card3/>  
        </div>
 
        <div className="project-card">
        <Card4/>  
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
      <div className="container">
      <footer>
        <p>© 2025 Copyright. All rights reserved.</p>
      </footer>
      </div>
    </>
  );
};

export default App;