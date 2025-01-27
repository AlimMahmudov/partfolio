import scss from "./Skills.module.scss";
import { FaGithub } from "react-icons/fa";
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
import { FaFigma } from "react-icons/fa6";
import { SiVisualstudiocode } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id={scss.Skills}>
      <div className="container">
        <div className={scss.images}>
          <div data-aos="fade-up" data-aos-delay="100" className={scss.stack1}>
            <FaHtml5 />
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className={scss.stack2}>
            <FaCss3Alt />
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className={scss.stack3}>
            <IoLogoJavascript />
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className={scss.stack4}>
            <SiTypescript />
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className={scss.stack5}>
            <SiSass />
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className={scss.stack6}>
            <FaReact />
          </div>
          <div data-aos="fade-up" data-aos-delay="700" className={scss.stack7}>
            <SiRedux />
          </div>
          <div data-aos="fade-up" data-aos-delay="800" className={scss.stack8}>
            <SiVite />
          </div>
          <div data-aos="fade-up" data-aos-delay="900" className={scss.stack9}>
            <RiNextjsFill />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className={scss.stack10}
          >
            <SiVisualstudiocode />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            className={scss.stack11}
          >
            <FaFigma />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1200"
            className={scss.stack12}
          >
            <FaGithub />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
            className={scss.stack13}
          >
            <FaGitAlt />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1400"
            className={scss.stack14}
          >
            <RiTailwindCssFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
