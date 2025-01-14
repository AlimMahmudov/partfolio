import React from "react";
import scss from "../homeSections/Skill.module.scss";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiVisualstudiocode } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skill = () => {
  return (
    <section id="skill" className={scss.Skill}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.textStack}>
            <div className={scss.line}></div>
            <h1>MY SKILL</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.images}>
            <div className={scss.stack1}>
              <h1>
                <FaHtml5 />
              </h1>
              <h2>HTML</h2>
            </div>
            {/* 
            <div className={scss.stack2}>
              <h1>
                <FaCss3Alt />
              </h1>
              <h2>CSS</h2>
            </div>

            <div className={scss.stack3}>
              <h1>
                <IoLogoJavascript />
              </h1>
              <h2>JS</h2>
            </div>

            <div className={scss.stack4}>
              <h1>
                <SiTypescript />
              </h1>
              <h2>TS</h2>
            </div>

            <div className={scss.stack5}>
              <h1>
                <SiSass />
              </h1>
              <h2>SCSS</h2>
            </div>

            <div className={scss.stack6}>
              <h1>
                <FaReact />
              </h1>
              <h2>React</h2>
            </div>

            <div className={scss.stack7}>
              <h1>
                <SiRedux />
              </h1>
              <h2>Redux</h2>
            </div>

            <div className={scss.stack8}>
              <h1>
                <SiVite />
              </h1>
              <h2>React-Vite</h2>
            </div>

            <div className={scss.stack9}>
              <h1>
                <RiNextjsFill />
              </h1>
              <h2>NextJS</h2>
            </div>

            <div className={scss.stack10}>
              <h1>
                <SiVisualstudiocode />
              </h1>
              <h2>CSS</h2>
            </div>

            <div className={scss.stack11}>
              <h1>
                <FaFigma />
              </h1>
              <h2>Figma</h2>
            </div>

            <div className={scss.stack12}>
              <h1>
                <FaGithub />
              </h1>
              <h2>GitHub</h2>
            </div>

            <div className={scss.stack13}>
              <h1>
                <FaGitAlt />
              </h1>
              <h2>Git</h2>
            </div>

            <div className={scss.stack14}>
              <h1>
                <RiTailwindCssFill />
              </h1>
              <h2>Tailwind</h2>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
