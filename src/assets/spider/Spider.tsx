// "use client";
// import { useEffect, useMemo, useState } from "react";
// import { loadSlim } from "@tsparticles/slim"; // Убедитесь, что этот пакет установлен
// import Particles from "react-tsparticles";
// import type { Engine, ISourceOptions, Container } from "tsparticles-engine";

// interface SpiderProps {
//   id: string; // ID элемента, где будет отображаться анимация
// }

// const Spider: React.FC<SpiderProps> = ({ id }) => {
//   const particlesInit = async (engine: Engine): Promise<void> => {
//     await loadSlim(engine); // Загрузка движка
//   };

//   const particlesLoaded = (container?: Container): void => {
//     console.log(container); // Лог контейнера, если он существует
//   };

//   const options: ISourceOptions = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: "#000000",
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onHover: {
//             enable: true, // Включаем реакцию на наведение
//             mode: "repulse", // Режим отталкивания
//           },
//           onClick: {
//             enable: false, // Отключаем реакцию на клик
//           },
//         },
//         modes: {
//           repulse: {
//             distance: 100, // Дистанция отталкивания
//             duration: 0.4, // Длительность эффекта
//           },
//         },
//       },

//       particles: {
//         color: {
//           value: "#d6ef0e",
//         },
//         links: {
//           color: "#d6ef0e",
//           distance: 150,
//           enable: true,
//           opacity: 0.7,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: true,
//           speed: 1,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 150,
//         },
//         opacity: {
//           value: 1.0,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 3 },
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   );

//   return (
//     <Particles
//       id={id}
//       init={particlesInit} // Используем правильный метод для инициализации
//       loaded={particlesLoaded} // Передаём функцию для загрузки контейнера
//       options={options}
//     />
//   );
// };

// export default Spider;
