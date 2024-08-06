import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PortCode } from "../constants";

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
          {PortCode.map((code, key) => (
            <li key={key}>
              <span>{code.title}</span>
              <em>{code.cate}</em>
              <div className="list__codeview">
                <strong>{code.desc}</strong>
                <a href={code.link} target="_blank" rel="noopener noreferrer">
                  CODEVIEW
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section4;
