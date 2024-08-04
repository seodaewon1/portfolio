import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section4 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // section4 초기 설정
    gsap.set("#section4 .desc .word", { opacity: 0 });
    gsap.set("#section4 .section4__text .text__code", {
      opacity: 0,
      x: 200,
    });
    gsap.set("#section4 .section4__text .text__list", {
      opacity: 0,
      x: -200,
    });
    gsap.set("#section4 .list>ul>li", { opacity: 0, y: 200 });

    // section4 애니메이션 타임라인 설정
    const t4 = gsap.timeline();

    t4.to("#section4 .desc .word", {
      opacity: 1,
      ease: "expo.Out",
      stagger: { amount: 1, from: "random" },
    })
      .to(
        "#section4 .section4__text .text__code",
        {
          opacity: 1,
          duration: 1,
          ease: "expo.Out",
          x: 0,
        },
        "e"
      )
      .to(
        "#section4 .section4__text .text__list",
        {
          opacity: 1,
          duration: 1,
          ease: "expo.Out",
          x: 0,
        },
        "e"
      )
      .to("#section4 .list>ul>li", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.Out",
        stagger: { amount: 1, from: "start" },
      });

    // section4에 ScrollTrigger 생성
    ScrollTrigger.create({
      animation: t4,
      trigger: "#section4",
      start: "top 80%", // start 포지션 조정
      end: "bottom 80%", // end 포지션 조정
      scrub: 2,
      markers: false, // 디버깅을 위해 마커 추가
    });

    // 컴포넌트 언마운트 시 ScrollTrigger 인스턴스 정리
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="section4">
      <div className="desc split">
        제가 배운 것을 기록하고
        <br />
        정리하여 저의 스킬을 볼 수 있도록 하였습니다.
      </div>
      <div className="section4__text">
        <div className="text__code">code</div>
        <div className="text__list">list</div>
      </div>
      <div className="list">
        <ul>
          <li>
            <span>Quiz Game</span>
            <em>Javascript</em>
            <div className="list__codeview">
              <strong>
                자바스크립트를 이용하여 제작한 퀴즈사이트입니다. 정보처리기능사
                필기 100문제를 풀어 볼 수 있습니다.
              </strong>
              <a href="https://seodaewon1.github.io/class2024/quiz/index.html">
                CODEVIEW
              </a>
            </div>
          </li>
          <li>
            <span>PHP BLOG</span>
            <em>PHP</em>
            <div className="list__codeview">
              <strong>
                PHP를 활용하여 제작한 블로그 사이트입니다. PHP에 개념과 로그인,
                게시판 기능을 구현하였습니다.
              </strong>
              <a href="http://eodnjs1019.dothome.co.kr/">CODEVIEW</a>
            </div>
          </li>
          <li>
            <span>MySQL</span>
            <em>MySQL 셋팅</em>
            <div className="list__codeview">
              <strong>
                MySQL에 세팅법을 정리하여, MySQL에 사용법에 대해
                숙지하고있습니다.
              </strong>
              <a href="https://seodaewon1.github.io/class2024/mysql/index.html">
                CODEVIEW
              </a>
            </div>
          </li>
          <li>
            <span>PYTHON</span>
            <em>PYTHON CROLLING</em>
            <div className="list__codeview">
              <strong>
                파이썬을 활용하여 크롤링을 통한 정보를 GITHUB에 저장하였습니다.
              </strong>
              <a href="https://github.com/seodaewon1/movie-chart">CODEVIEW</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section4;
