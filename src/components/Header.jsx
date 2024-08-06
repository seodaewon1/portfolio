import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Header = () => {
  const location = useLocation(); // 현재 URL의 위치를 가져옵니다.

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(href);

      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: targetElement,
        });
      }
    };

    const anchors = document.querySelectorAll("header ul li a");

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    // ScrollTrigger 설정
    const scrollTrigger = ScrollTrigger.create({
      trigger: "#section5",
      start: "top top",
      end: "30% top",
      onEnter: () => {
        document.querySelector("#header").classList.add("white-theme");
        document.querySelector(".weather").classList.add("white-theme");
      },
      onLeaveBack: () => {
        document.querySelector("#header").classList.remove("white-theme");
        document.querySelector(".weather").classList.remove("white-theme");
      },
    });

    // Cleanup: ScrollTrigger 인스턴스를 제거하여 메모리 누수를 방지합니다.
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
      scrollTrigger.kill();
    };
  }, [location]);

  return (
    <>
      <header id="header">
        <div className="left">
          <h1>
            <Link to="https://seodaewon1.github.io/meo-port/index6.html">
              FRONT+END
            </Link>
          </h1>
        </div>
        <ul>
          <li>
            <a href="#section2">About</a>
          </li>
          <li>
            <a href="#section3">Project</a>
          </li>
          <li>
            <a href="#section5">Skill</a>
          </li>
          <li>
            <a href="#section6">Comment</a>
          </li>
        </ul>
        <div className="right">
          <div>
            <span className="date"></span>
          </div>
          <div>Weather : sun</div>
        </div>
      </header>
      <div className="weather">
        <div>
          Now : <span className="rightNum">0</span>
        </div>
        <div>
          Time : <span className="time">00:00:00</span>
        </div>
      </div>
    </>
  );
};

export default Header;
