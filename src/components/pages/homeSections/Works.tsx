import React from "react";
import scss from "../homeSections/Works.module.scss";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
// import barber from "@/assets/images/Снимок экрана от 2025-01-11 21-33-55.png";
import restaran from "@/assets/newImage/restoranphoto.png";
import barber from "@/assets/newImage/barbershopphoto.png";

import course from "@/assets/newImage/itcoursephoto.png";
import ortodont from "@/assets/newImage/ortodontphoto.png";
import starwars from "@/assets/newImage/starwarsphoto.png";
import Link from "next/link";
import { useLanguageStore } from "@/stores/LanguageStore";

const Works = () => {
  const { t } = useLanguageStore();

  const data = [
    {
      photo: barber,
      title: t("Project.barber"),
      description: t("Project.barber desc"),
      demo: "https://ortodont.vercel.app/",
      gitHub: "https://github.com/AlimMahmudov/ortodont",
    },
    {
      photo: restaran,
      title: t("Project.restoran"),
      description: t("Project.restoran desc"),
      demo: "https://ortodont.vercel.app/",
      gitHub: "https://github.com/AlimMahmudov/motion-restaurant",
    },
    {
      photo: ortodont,
      title: t("Project.ortodont"),
      description: t("Project.ortodont desc"),
      demo: "https://ortodont.vercel.app/",
      gitHub: "https://github.com/AlimMahmudov/ortodont",
    },
    {
      photo: starwars,
      title: t("Project.starwars"),
      description: t("Project.starwars desc"),
      demo: "https://starwars-v1.vercel.app/",
      gitHub: "https://github.com/AlimMahmudov/starwars-v1",
    },
    {
      photo: course,
      title: t("Project.cours"),
      description: t("Project.cours desc"),
      demo: "https://ortodont.vercel.app/",
      gitHub: "https://github.com/AlimMahmudov/it-course",
    },
  ];

  return (
    <section id="work" className={scss.Works}>
      <div className="container">
        <div className={scss.content}>
          <div data-aos="fade-left" className={scss.firstText}>
            <h1>PROJECTS</h1>
            <h2>Each project is a unique piece of development</h2>
          </div>
          <div className={scss.blog}>
            {data.map((el, index) => (
              <div
                data-aos="fade-right"
                className={`${scss.card} ${
                  index % 2 !== 0 ? scss.row__reverse : ""
                }`}
                key={index + 1}
              >
                <div className={scss.text}>
                  <h1>{el.title}</h1>
                  <p>{el.description}</p>
                  <div className={scss.nextjs}>
                    <button>NextJS</button>
                    <button>TypeScript</button>
                    <button>SCSS</button>
                    <button>RestAPI</button>
                  </div>
                  <div className={scss.box}>
                    <h3>
                      <Link href={el.gitHub}>
                        Code <FaGithub />
                      </Link>
                    </h3>
                    <h3>
                      <Link href={el.demo}>
                        Live Demo <BsBoxArrowUpRight />
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className={scss.image}>
                  <Image
                    className={scss.photo1}
                    src={el.photo}
                    alt={el.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
