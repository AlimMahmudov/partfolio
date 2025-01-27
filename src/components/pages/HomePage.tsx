"use client";
import React, { useEffect } from "react";
import Welcome from "./homeSections/Welcome";
import AboutMe from "./homeSections/AboutMe";
import Concat from "./homeSections/Contcat";
import Works from "./homeSections/Works";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./homeSections/Skills";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Welcome />
      <Skills />
      <AboutMe />
      <Works />
      <Concat />
    </>
  );
};

export default HomePage;
