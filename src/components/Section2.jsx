import React, { useEffect } from "react";
import Image1 from "../assets/img/KakaoTalk_20240725_092842023_04.jpg";
import Image2 from "../assets/img/KakaoTalk_20240725_045559787_04.jpg";
import Image3 from "../assets/img/KakaoTalk_20240725_045559787_03.jpg";
import Image4 from "../assets/img/KakaoTalk_20240725_045559787_05.jpg";
import Image5 from "../assets/img/KakaoTalk_20240725_092842023.jpg";
import Image6 from "../assets/img/KakaoTalk_20240725_092842023_01.jpg";
import Image7 from "../assets/img/KakaoTalk_20240725_092842023_02.jpg";
import Image8 from "../assets/img/insta.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Section2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t3 = gsap.timeline();

    gsap.set(".about1 .text1 p .line", { y: 100, opacity: 0 });
    gsap.set(".about1 .text1 h4 .line", { y: 100, opacity: 0 });
    gsap.set(".about2", { y: 100, opacity: 0 });

    t3.to(
      ".about1 .text1 p .line",
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: { amount: 1 },
        ease: "expo.out",
      },
      "c"
    )
      .to(
        ".about1 .text1 h4 .line",
        { y: 0, opacity: 1, duration: 1, ease: "expo.out" },
        "c"
      )
      .to(".about2", { y: 0, opacity: 1, ease: "expo.out" })
      .to(
        ".about2 .img8 img",
        {
          x: "32vw",
          y: "-13vw",
          duration: 1,
          rotate: -558,
          opacity: 1,
          ease: "expo.out",
        },
        "d"
      )
      .to(
        ".about2 .img7 img",
        {
          x: "28vw",
          y: "13vw",
          duration: 1,
          rotate: -305,
          opacity: 1,
          ease: "expo.out",
        },
        "d"
      )
      .to(
        ".about2 .img6 img",
        {
          x: "13vw",
          y: 0,
          duration: 1,
          rotate: -370,
          opacity: 1,
          ease: "expo.out",
        },
        "d"
      )
      .to(
        ".about2 .img5 img",
        {
          x: "-20vw",
          y: "1vw",
          duration: 1,
          rotate: 410,
          opacity: 1,
          ease: "expo.out",
        },
        "d"
      )
      .to(
        ".about2 .img4 img",
        {
          x: "3vw",
          y: "-15vw",
          duration: 1,
          rotate: -300,
          opacity: 1,
          ease: "expo.out",
        },
        "d"
      )
      .to(
        ".about2 .img3 img",
        {
          x: "-4vw",
          y: "13vw",
          duration: 1,
          rotate: 300,
          opacity: 1,
          ease: "expo.out",
        },
        "d"
      )
      .to(
        ".about2 .img2 img",
        {
          x: "-35vw",
          y: "-15vw",
          duration: 1,
          rotate: 380,
          opacity: 1,
          ease: "expo.out",
        },
        "d"
      )
      .to(
        ".about2 .img1 img",
        {
          x: "-34vw",
          y: "15vw",
          duration: 1,
          rotate: 300,
          opacity: 1,
          ease: "expo.out",
        },
        "d"
      );

    ScrollTrigger.create({
      animation: t3,
      trigger: "#section2",
      pin: true,
      start: "top top",
      end: "+=10000",
      scrub: 2,
      markers: false,
    });
  }, []);

  return (
    <div id="section2">
      <div className="about1">
        <div className="text1">
          <h4 className="split">
            <span className="line">서대원</span>
          </h4>
          <p className="split">
            <span className="line">
              저는 미디어콘텐츠과, 스마트콘텐츠과를 전공하였습니다.
            </span>
            <br />
            <span className="line">
              콘텐츠 제작과 영상 편집에 대해 공부하였지만 흥미가 점차 떨어지게
            </span>
            <br />
            <span className="line">
              되면서 평소 컴퓨터를 다루기 좋아하였기에 여러가지 알아보던 중
            </span>
            <br />
            <span className="line">
              코딩이라는 주제를 접하게 되었고 그 중 프론트 앤드 개발자에 대해
              알게
            </span>
            <br />
            <span className="line">
              되어 학원을 다니며 배우게 되었습니다. 코딩을 자세히 배워 가는
            </span>
            <br />
            <span className="line">
              과정에서 제 머리속에서 구상한 코드대로 만들어지는 결과를 보니 점차
            </span>
            <br />
            <span className="line">
              흥미가 생기기 시작하여 지금에 프론트 엔드 개발자를 꿈꾸게
            </span>
            <br />
            <span className="line">되었습니다.</span>
          </p>
        </div>
      </div>
      <div className="about2">
        <div className="img1">
          <img src={Image1} alt="Image1" />
        </div>
        <div className="img2">
          <img src={Image2} alt="Image2" />
        </div>
        <div className="img3">
          <img src={Image3} alt="Image3" />
        </div>
        <div className="img4">
          <img src={Image4} alt="Image4" />
        </div>
        <div className="img5">
          <img src={Image5} alt="Image5" />
        </div>
        <div className="img6">
          <img src={Image6} alt="Image6" />
        </div>
        <div className="img7">
          <img src={Image7} alt="Image7" />
        </div>
        <div className="img8">
          <img src={Image8} alt="Image8" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
