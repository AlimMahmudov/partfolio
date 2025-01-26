import React from "react";
import scss from "../homeSections/AboutMe.module.scss";
import aboutImg from "../../../assets/fd8894dd2a8a7fe03c77f98532c026ba.jpg";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { useLanguageStore } from "@/stores/LanguageStore";

const AboutMe = () => {
  const { t } = useLanguageStore();
  const links = [
    {
      name: t("About.contact"),
      link: "contcat",
    },
  ];

  return (
    <section id="about" className={scss.AboutMe}>
      <div className="container">
        <div className={scss.content}>
          <div data-aos="fade-up" className={scss.image}>
            <Image src={aboutImg} alt="img" />
          </div>
          <div data-aos="fade-left" className={scss.text}>
            <div className={scss.text_about}>
              <h1>{t("About.about")}</h1>

              <h1 className={scss.me}>{t("About.me")}</h1>
            </div>
            <h2>{t("About.title")}</h2>
            <p>{t("About.desc")}</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
