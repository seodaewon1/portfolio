import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PortImg, PortInfo } from "../constants";

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
      end: "+=12000",
      scrub: 1,
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
            {PortInfo.map((info, key) => (
              <React.Fragment key={key}>
                <span className="line">{info.line}</span>
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="about2">
        {PortImg.map((img, key) => (
          <div key={key}>
            <div className={img.title}>
              <img src={img.img} alt="Image1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
