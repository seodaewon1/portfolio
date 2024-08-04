import React, { useEffect } from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Header from "../components/Header";
import Intro from "../components/Intro";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import SplitType from "split-type";

const Home = () => {
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

    const targets = gsap.utils.toArray(".split");
    let SplitClient = new SplitType(targets, {
      type: "lines, words, chars",
    });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

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

    document.querySelectorAll("header ul li a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: this.getAttribute("href"),
        });
      });
    });

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
      const scrollTop = window.scrollY; // 현재 스크롤 위치
      const scrollHeight = document.documentElement.scrollHeight; // 문서의 전체 높이
      const clientHeight = document.documentElement.clientHeight; // 화면의 높이
      const scrollPercentage = Math.floor(
        (scrollTop / (scrollHeight - clientHeight)) * 100
      ); // 스크롤 퍼센티지 계산

      const rightNumElement = document.querySelector(".rightNum");
      if (rightNumElement) {
        rightNumElement.textContent = scrollPercentage + "%"; // 퍼센티지 표시
      }
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", updateScrollPercentage);

    // 초기 실행 (페이지 로드 시 현재 스크롤 위치 표시)
    updateScrollPercentage();
  }, []);

  return (
    <div>
      <Intro />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Home;
