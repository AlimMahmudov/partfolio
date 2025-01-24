"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import scss from "../footer/Footer.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { AiFillInstagram } from "react-icons/ai";
import { useLanguageStore } from "@/stores/LanguageStore";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const { t } = useLanguageStore();
  return (
    <footer className={scss.footer}>
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

          <div className={scss.text}>
            <h2>{t("Footer.Created")}</h2>
            <h2 className={scss.nextts}>{t("Footer.nextTS")}</h2>
          </div>

          <div className={scss.icons}>
            <Link
              className={scss.telegram}
              href="https://t.me/MahmudovAlim"
              target={"_blank"}
            >
              <FaTelegramPlane />
            </Link>
            <Link
              className={scss.telegram}
              href="https://github.com/AlimMahmudov"
              target={"_blank"}
            >
              <FaGithub />
            </Link>

            <Link
              className={scss.telegram}
              href="https://www.instagram.com/alimdev_05"
              target={"_blank"}
            >
              <FaLinkedin />
            </Link>
            <Link
              className={scss.telegram}
              href="https://www.instagram.com/alimdev_05"
              target={"_blank"}
            >
              <AiFillInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
