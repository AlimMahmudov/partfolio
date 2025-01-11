import React from "react";
import scss from "../homeSections/Works.module.scss";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
// import photo1 from "../../../assets/Снимок экрана от 2024-08-04 03-31-56.png";
// import photo2 from "../../../assets/Снимок экрана от 2024-08-04 03-00-51.png";
// import photo3 from "../../../assets/Снимок экрана от 2024-08-04 03-03-43.png";

import restaran from "@/assets/images/Снимок экрана от 2025-01-11 21-33-55.png";
import barber from "@/assets/images/Снимок экрана от 2025-01-11 21-35-29.png";
import course from "@/assets/images/Снимок экрана от 2025-01-11 21-36-35.png";
import ortodont from "@/assets/images/Снимок экрана от 2025-01-11 21-37-05.png";
import starwars from "@/assets/images/Снимок экрана от 2025-01-11 21-37-41.png";

const Works = () => {
  return (
    <section id="work" className={scss.Works}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.firstText}>
            <h1>PROJECTS</h1>
            <h2>Each project is a unique piece of development</h2>
          </div>
          <div className={scss.blog}>
            <div className={scss.card}>
              <div className={scss.text}>
                <h1>Call of Duty</h1>
                <p>
                  Сделано на Next.js, TypeScript: онлайн-запись в
                  разрабатываемую парикмахерскую — удобный способ выбрать
                  подходящую дату, время и парикмахера, не выходя из дома.
                  Сервис позволяет быстро ознакомиться с услугами, ценами и
                  свободными окнами, а также указать свои контактные данные.
                  После записи вы получите подтверждение, а все детали вашего
                  визита будут учтены!
                </p>
                <div className={scss.box}>
                  <h3>
                    Code <FaGithub />
                  </h3>
                  <h3>
                    Live Demo <BsBoxArrowUpRight />
                  </h3>
                </div>
              </div>
              <div className={scss.image}>
                <Image className={scss.photo1} src={restaran} alt="" />
              </div>
            </div>
            {/* ////// */}

            <div className={scss.card2}>
              <div className={scss.image}>
                <Image className={scss.photo2} src={barber} alt="" />
              </div>
              <div className={scss.text}>
                <h1>Temir</h1>
                <p>
                  Сайт на Next.js и TypeScript: Описание стиля, кухни,
                  фотографии блюд и отзывы клиентов помогают вызвать доверие и
                  заинтересовать гостей. Интуитивно понятная навигация,
                  мобильная версия и быстрый доступ к контактам делают сайт
                  удобным для пользователей любого устройства.
                </p>
                <div className={scss.box}>
                  <h3>
                    Code <FaGithub />
                  </h3>
                  <h3>
                    Live Demo <BsBoxArrowUpRight />
                  </h3>
                </div>
              </div>
            </div>

            {/* ///// */}

            <div className={scss.card}>
              <div className={scss.text}>
                <h1>Call of Duty</h1>
                <p>
                  Сайт Ortodont Group является сайтом клиники стоматологии
                  Ortodont Group. На сайте можно найти информацию о клинике,
                  услугах, которые она предоставляет, а также записаться на
                  прием.
                </p>
                <div className={scss.box}>
                  <h3>
                    Code <FaGithub />
                  </h3>
                  <h3>
                    Live Demo <BsBoxArrowUpRight />
                  </h3>
                </div>
              </div>
              <div className={scss.image}>
                <Image className={scss.photo1} src={ortodont} alt="" />
              </div>
            </div>
            {/* ////// */}

            <div className={scss.card2}>
              <div className={scss.image}>
                <Image className={scss.photo2} src={starwars} alt="" />
              </div>
              <div className={scss.text}>
                <h1>Temir</h1>
                <p>
                  Разработали сайт для интернет-магазина ноутбуков EduHub с
                  использованием TypeScript и Next.js. Сайт ориентирован на
                  удобство пользователя и рост продаж. Реализовали функционал
                  корзины. Добавлены фильтры и сортировка для удобного выбора
                  товаров, а также адаптивный дизайн с использованием модулей
                  SCSS. Интегрировали серверные компоненты Next.js для быстрой
                  загрузки страниц и SEO-оптимизации.
                </p>
                <div className={scss.box}>
                  <h3>
                    Code <FaGithub />
                  </h3>
                  <h3>
                    Live Demo <BsBoxArrowUpRight />
                  </h3>
                </div>
              </div>
            </div>

            {/* ////// */}

            <div className={scss.card}>
              <div className={scss.text}>
                <h1>Call of Duty</h1>
                <p>
                  Call of Duty: Modern Warfare 3 (MW3) is a website dedicated to
                  the popular video game. The site provides information about
                  the game, including the plot, characters, gameplay, and modes.
                  Users can find news and updates, trailers, screenshots, and
                  other media. The section also contains frequently asked
                  questions, guides, and a forum for discussing games.
                </p>
                <div className={scss.box}>
                  <h3>
                    Code <FaGithub />
                  </h3>
                  <h3>
                    Live Demo <BsBoxArrowUpRight />
                  </h3>
                </div>
              </div>
              <div className={scss.image}>
                <Image className={scss.photo1} src={course} alt="" />
              </div>
            </div>
            {/* ////// */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
