import React from "react";
import scss from "../homeSections/Welcome.module.scss";
import user1 from "../../../assets/Снимок экрана от 2024-08-04 06-07-43.png";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

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
import { useLanguageStore } from "@/stores/LanguageStore";

const Welcome = () => {
  const { t } = useLanguageStore();

  return (
    <>
      <section id="home" className={scss.Welcome}>
        <div className="container">
          <div className={scss.content}>
            <div data-aos="fade-right" className={scss.text}>
              <h1>{t("Welcome.title")}</h1>
              <h2>
                <Typewriter
                  words={["FRONT-END DEVELOPER"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1500}
                />
              </h2>
              <p>{t("Welcome.desc")}</p>
              <div className={scss.icons}>
                <a className={scss.telegram} href="https://t.me/MahmudovAlim">
                  {" "}
                  <FaTelegramPlane />
                </a>
                <a
                  className={scss.telegram}
                  href="https://www.instagram.com/alimdev_05"
                >
                  {" "}
                  <AiFillInstagram />
                </a>

                <a className={scss.telegram} href="https://github.com/">
                  {" "}
                  <FaGithub />
                </a>
              </div>
            </div>
            <div data-aos="fade-left" className={scss.image}>
              <Image src={user1} alt="" />
            </div>
          </div>
          <div className={scss.images}>
            <div className={scss.stack1}>
              <FaHtml5 />
            </div>
            <div className={scss.stack2}>
              <FaCss3Alt />
            </div>
            <div className={scss.stack3}>
              <IoLogoJavascript />
            </div>
            <div className={scss.stack4}>
              <SiTypescript />
            </div>
            <div className={scss.stack5}>
              <SiSass />
            </div>
            <div className={scss.stack6}>
              <FaReact />
            </div>
            <div className={scss.stack7}>
              <SiRedux />
            </div>
            <div className={scss.stack8}>
              <SiVite />
            </div>
            <div className={scss.stack9}>
              <RiNextjsFill />
            </div>
            <div className={scss.stack10}>
              <SiVisualstudiocode />
            </div>
            <div className={scss.stack11}>
              <FaFigma />
            </div>
            <div className={scss.stack12}>
              <FaGithub />
            </div>
            <div className={scss.stack13}>
              <FaGitAlt />
            </div>
            <div className={scss.stack14}>
              <RiTailwindCssFill />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
