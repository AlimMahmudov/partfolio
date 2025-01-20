"use client";
import React from "react";
import scss from "../homeSections/Contcat.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useLanguageStore } from "@/stores/LanguageStore";

interface IFormTelegram {
  name: string;
  email: string;
  number: number;
  inquiry: string;
  message: string;
}

const Contcat = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();
  const { t } = useLanguageStore();

  const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Email Addres:   <b>${data.email}</b>\n`;
    messageTG += `Number:  <b>${data.number} </b>\n`;
    messageTG += `Inquiry:  <b>${data.inquiry} </b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_TOKEN}/sendMessage`,
      {
        chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      }
    );
    reset();
  };

  return (
    <section id="contcat" className={scss.concat}>
      <div className="container">
        <div data-aos="fade-right" className={scss.content}>
          <div className={scss.ct}>
            <div className={scss.text}>
              <h1>{t("Contact.title")}</h1>
              <h1 className={scss.textMe}>{t("Contact.title2")}</h1>
            </div>

            <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={scss.maus}>
                <input
                  data-aos="fade-right"
                  data-aos-delay="100"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder={t("Contact.name")}
                />
                <input
                  data-aos="fade-right"
                  data-aos-delay="200"
                  type="number"
                  {...register("number", { required: true })}
                  placeholder={t("Contact.number")}
                />
                <input
                  data-aos="fade-right"
                  data-aos-delay="300"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder={t("Contact.email")}
                />
                <input
                  data-aos="fade-right"
                  data-aos-delay="400"
                  type="text"
                  {...register("inquiry", { required: true })}
                  placeholder={t("Contact.inquiry")}
                />
              </div>
              <div className={scss.big}>
                <textarea
                  data-aos-delay="500"
                  data-aos="fade-right"
                  {...register("message", { required: true })}
                  placeholder={t("Contact.message")}
                ></textarea>
              </div>
              <div className={scss.buttonInp}>
                <button className={scss.SuButton} type="submit">
                  {t("Contact.message")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contcat;
