import React from "react";
import scss from "../homeSections/Welcome.module.scss";
// import user1 from "../../../assets/Снимок экрана от 2024-08-04 06-07-43.png";
import user1 from "../../../assets/images/alimdev2025.jpg";

import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";

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
import Link from "next/link";

const Welcome = () => {
  const { t } = useLanguageStore();

  return (
    <>
      <section id="home" className={scss.Welcome}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.text}>
              <h1 data-aos="fade-right" data-aos-delay="100">
                {t("Welcome.title")}
              </h1>
              <h2 data-aos="fade-right" data-aos-delay="200">
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
              <p data-aos="fade-right" data-aos-delay="300">
                {t("Welcome.desc")}
              </p>
              <div className={scss.icons}>
                <Link
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className={scss.telegram}
                  href="https://t.me/MahmudovAlim"
                  target={"_blank"}
                >
                  <FaTelegramPlane />
                </Link>
                <Link
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className={scss.telegram}
                  href="https://www.instagram.com/alimdev_05"
                  target={"_blank"}
                >
                  <AiFillInstagram />
                </Link>

                <Link
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className={scss.telegram}
                  href="https://github.com/"
                  target={"_blank"}
                >
                  <FaGithub />
                </Link>
                <Link
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className={scss.telegram}
                  href="https://github.com/"
                  target={"_blank"}
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className={scss.image}>
              <Image src={user1} alt="img" />
            </div>
          </div>
          <div className={scss.images}>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className={scss.stack1}
            >
              <FaHtml5 />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className={scss.stack2}
            >
              <FaCss3Alt />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className={scss.stack3}
            >
              <IoLogoJavascript />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className={scss.stack4}
            >
              <SiTypescript />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className={scss.stack5}
            >
              <SiSass />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className={scss.stack6}
            >
              <FaReact />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className={scss.stack7}
            >
              <SiRedux />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className={scss.stack8}
            >
              <SiVite />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="900"
              className={scss.stack9}
            >
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
      </section>
    </>
  );
};

export default Welcome;
