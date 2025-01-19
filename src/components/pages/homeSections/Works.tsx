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
      title: "Ресторан 🍽",
      description:
        "Описание стиля, кухни, фотографии блюд и отзывы клиентов помогают вызвать доверие и заинтересовать гостей. Интуитивно понятная навигация, мобильная версия и быстрый доступ к контактам делают сайт удобным для пользователей любого устройства.",
      demo: "https://ortodont.vercel.app/",
      gitHub: "https://github.com/AlimMahmudov/motion-restaurant",
    },
    {
      photo: ortodont,
      title: "Ортодонт 🦷",
      description:
        "Сайт Ortodont Group является сайтом клиники стоматологии Ortodont Group. На сайте можно найти информацию о клинике, услугах, которые она предоставляет, а также записаться на прием.",
      demo: "https://ortodont.vercel.app/",
      gitHub: "https://github.com/AlimMahmudov/ortodont",
    },
    {
      photo: starwars,
      title: "Звездные Войны 🪐",
      description:
        "Разработали сайт для интернет-магазина ноутбуков EduHub с использованием TypeScript и Next.js. Сайт ориентирован на удобство пользователя и рост продаж. Реализовали функционал корзины. Добавлены фильтры и сортировка для удобного выбора товаров, а также адаптивный дизайн с использованием модулей SCSS. Интегрировали серверные компоненты Next.js для быстрой загрузки страниц и SEO-оптимизации.",
      demo: "https://starwars-v1.vercel.app/",
      gitHub: "https://github.com/AlimMahmudov/starwars-v1",
    },
    {
      photo: course,
      title: "IT Курс 🧑‍💻",
      description:
        "IT-курс — это обучение современным технологиям, программированию, веб-разработке, анализу данных и другим востребованным навыкам. Курсы включают практические задания, работу над реальными проектами и поддержку опытных наставников. Подходит для начала карьеры в IT или повышения квалификации.",
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
