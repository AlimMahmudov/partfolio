"use client";
import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { useLanguageStore } from "@/stores/LanguageStore";
import Link from "next/link";

interface LinksType {
  name: string;
  link: string;
}

interface BurgerMenuProps {
  links: LinksType[];
  isOpen: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen }) => {
  const { language, setLanguage } = useLanguageStore();
  const { t } = useLanguageStore();
  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as "ru" | "en";
    setLanguage(selectedLanguage);
  };
  return (
    <div
      className={
        isOpen ? ` ${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
      <div className={scss.content}>
        <div className={scss.nav}>
          {links.map((item, index) => (
            <h2 key={index}>
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
            </h2>
          ))}
        </div>
        {/* <div className={scss.buutons}>
                <select onChange={handleChangeLanguage} value={language}>
                  <option value="en">EN</option>
                  <option value="ru">RU</option>
                </select>
                <Link href={"/Alim Makhmudov.pdf"} target={"_blank"}>
                  <button className={scss.btn}>{t("Header.resume")}</button>
                </Link>
              </div> */}
        <div className={scss.buttons}>
          <select onChange={handleChangeLanguage} value={language}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
          <Link href={"/Alim Makhmudov.pdf"} target={"_blank"}>
            <button className={scss.btn}>{t("Header.resume")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
