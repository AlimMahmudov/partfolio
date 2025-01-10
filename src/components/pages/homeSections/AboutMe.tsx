import React from "react";
import scss from "../homeSections/AboutMe.module.scss";
import aboutImg from "../../../assets/fd8894dd2a8a7fe03c77f98532c026ba.jpg";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { useLanguageStore } from "@/stores/LanguageStore";

const links = [
  {
    name: "Contact me",
    link: "contcat",
  },
];

const AboutMe = () => {
  const { t } = useLanguageStore();

  return (
    <section id="about" className={scss.AboutMe}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <Image src={aboutImg} alt="" />
          </div>
          <div className={scss.text}>
            <h1>
              About <span>Me</span>
            </h1>
            <h2>Experienced Frontend Developer from Kyrgyzstan</h2>
            <p>{t("Welcome.desc")}</p>
            <div className={scss.buttons}>
              {links.map((item, index) => (
                <button id="work" key={index}>
                  <ScrollLink
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    {item.name}
                  </ScrollLink>
                </button>
              ))}
              {/* <button id="work">my contact</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
