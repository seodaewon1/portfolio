// context/userContext.js
import React, { createContext, useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const startTime = new Date();

    // 현재 날짜 업데이트 함수
    function updateCurrentDate() {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const dateElements = document.querySelectorAll(".date");
      dateElements.forEach((element) => {
        element.textContent = formattedDate;
      });
    }

    // 경과 시간 포맷팅 함수
    function formatTime(seconds) {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    // 경과 시간 업데이트 함수
    function updateElapsedTime() {
      const currentTime = new Date();
      const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
      document.querySelector(".time").textContent = formatTime(elapsedSeconds);
    }

    // 초기 실행
    updateCurrentDate(); // 초기 로드 시 날짜 업데이트
    updateElapsedTime(); // 초기 로드 시 경과 시간 업데이트
    setInterval(updateElapsedTime, 1000); // 1초마다 경과 시간 업데이트

    gsap.to(".weather", {
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    function updateScrollPercentage() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = Math.floor(
        (scrollTop / (scrollHeight - clientHeight)) * 100
      );
      const rightNumElement = document.querySelector(".rightNum");
      if (rightNumElement) {
        rightNumElement.textContent = scrollPercentage + "%";
      }
    }

    window.addEventListener("scroll", updateScrollPercentage);

    updateScrollPercentage();
  }, []);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
