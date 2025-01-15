"use client";
import React from "react";
import Welcome from "./homeSections/Welcome";
import AboutMe from "./homeSections/AboutMe";
import Concat from "./homeSections/Contcat";
import Experience from "./homeSections/Works";
// import Spider from "@/assets/spider/Spider";
// import Work from "./homeSections/Skill";

const HomePage = () => {
  return (
    <>
      {/* <Spider id="particles" /> */}
      <Welcome />
      <AboutMe />
      <Experience />
      {/* <Work /> */}
      <Concat />
    </>
  );
};

export default HomePage;
