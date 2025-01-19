/////////////////
"use client";
import scss from "../header/Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import { useLanguageStore } from "@/stores/LanguageStore";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const { t } = useLanguageStore();

  const links = [
    {
      name: t("Header.home"),
      link: "home",
    },
    {
      name: t("Header.about"),
      link: "about",
    },

    {
      name: t("Header.works"),
      link: "work",
    },
    {
      name: t("Header.contact"),
      link: "contcat",
    },
  ];

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as "ru" | "en";
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <ScrollLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              <h3>AlimMah</h3>
            </ScrollLink>
          </div>

          {isMobile ? (
            <>
              <button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
                Burger
              </button>
              <BurgerMenu links={links} isOpen={isOpen} />
            </>
          ) : (
            <>
              <div className={scss.nav}>
                <ul>
                  {links.map((item, index) => (
                    <li key={index}>
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
                    </li>
                  ))}
                </ul>
              </div>
              <div className={scss.buutons}>
                <select onChange={handleChangeLanguage} value={language}>
                  <option value="ru">RU</option>
                  <option value="ky">EN</option>
                </select>
                <button className={scss.btn}>{t("Header.resume")}</button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

/////////////////////////
