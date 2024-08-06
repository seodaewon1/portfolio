import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PortSkill } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Section5() {
  useEffect(() => {
    // section5 초기 설정
    gsap.set("#section5 .desc .word", { opacity: 0 });

    // section5 애니메이션 타임라인 설정
    const t5 = gsap.timeline();

    t5.to("#section5 .desc .word", {
      opacity: 1,
      duration: 1,
      stagger: { amount: 1, from: "random" },
      ease: "expo.Out",
    });

    // section5에 ScrollTrigger 생성 (애니메이션용)
    ScrollTrigger.create({
      animation: t5,
      trigger: "#section5",
      start: "top bottom",
      end: "30% top",
      scrub: true,
      markers: false,
    });

    // section5에 ScrollTrigger 생성 (헤더 색상 변경용)
    // ScrollTrigger.create({
    //   trigger: "#section5",
    //   start: "top top",
    //   end: "30% top",
    //   onEnter: () => {
    //     document.querySelector("#header").classList.add("white-theme");
    //     document.querySelector(".weather").classList.add("white-theme");
    //   },
    //   onLeaveBack: () => {
    //     document.querySelector("#header").classList.remove("white-theme");
    //     document.querySelector(".weather").classList.remove("white-theme");
    //   },
    // });

    // 퍼센트 애니메이션을 dt 요소에 연결하기
    const skilldata = document.querySelectorAll("dt");
    skilldata.forEach((dt) => {
      const gauge = dt.querySelector(".gauge");
      if (gauge) {
        const finalPercent = gauge.dataset.percent;
        gsap.fromTo(
          gauge,
          {
            textContent: "0%",
          },
          {
            textContent: finalPercent + "%",
            snap: "textContent",
            scrollTrigger: {
              trigger: dt,
              start: "top 80%", // dt 요소의 상단이 뷰포트의 80%에 닿을 때 애니메이션 시작
              end: "bottom 20%", // dt 요소의 하단이 뷰포트의 20%에 닿을 때 애니메이션 종료
              toggleActions: "play none none none",
            },
            ease: "none",
            duration: 2,
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="section5">
      <div className="desc split">
        Let me take this opportunity to elaborate on the diverse technical
        skills I possess and how I have applied them in my projects.
      </div>

      <div className="sec5-text">
        <div className="text-left">
          <h3>Which Stack do you use?</h3>
        </div>
        <div className="text-right">
          <dl>
            {PortSkill.map((skill, key) => (
              <div key={key}>
                <dt className="noTop">
                  {skill.title}
                  <p className="gauge" data-percent={skill.percent}></p>
                </dt>
                <dd>{skill.desc1}</dd>
                <dd>{skill.desc2}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
