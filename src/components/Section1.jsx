import React, { useEffect } from "react";
import daewon from "../assets/img/daewon.jpg";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

const Section1 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    let chars = SplitClient.chars;

    gsap.set(chars, { opacity: 0, y: 150 });
    gsap.set("#header", { top: "-20vw" });
    gsap.set(".weather", { right: "-20vw" });
    gsap.set("#section1 .img", { opacity: 0, y: 300 });
    gsap.set("#section1 .t1", { opacity: 0, y: 200 });
    gsap.set("#section1 .t2", { opacity: 0, y: 200 });
    gsap.set("#section1 .t3", { opacity: 0, y: 200 });

    const tl = gsap.timeline();

    setTimeout(() => {
      tl.to(chars, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: { amount: 1, from: "random" },
        ease: "sine.inOut",
      })
        .to("#header", { top: 0, ease: "sine.inOut", duration: 1 })
        .to(".weather", { right: 20, ease: "sine.inOut", duration: 1 })
        .to("#section1 .img", {
          opacity: 1,
          y: 0,
          ease: "sine.inOut",
          duration: 1,
        })
        .to("#section1 .t1", {
          opacity: 1,
          y: 0,
          ease: "sine.inOut",
          duration: 1,
        })
        .to("#section1 .t2", {
          opacity: 1,
          y: 0,
          ease: "sine.inOut",
          duration: 1,
        })
        .to("#section1 .t3", {
          opacity: 1,
          y: 0,
          ease: "sine.inOut",
          duration: 1,
        });
    }, 1000);

    gsap.utils.toArray(".parallax__item__desc").forEach((item) => {
      gsap.to(item, {
        yPercent: -50,
        ease: "sine.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          markers: false,
          scrub: true,
        },
      });
    });

    gsap.utils.toArray(".parallax__item__left").forEach((item) => {
      gsap.to(item, {
        xPercent: -50,
        ease: "sine.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          markers: false,
          scrub: true,
        },
      });
    });

    gsap.utils.toArray(".parallax__item__right").forEach((item) => {
      gsap.to(item, {
        xPercent: 50,
        ease: "sine.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          markers: false,
          scrub: true,
        },
      });
    });

    gsap.utils.toArray(".parallax__item__left2").forEach((item) => {
      gsap.to(
        item,
        {
          xPercent: -50,
          ease: "sine.inOut",
          duration: 2,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            markers: false,
            scrub: true,
          },
        },
        0.8
      );
    });
  }, []);

  return (
    <div id="section1">
      <div className="desc split">
        저는 사용자 친화적인 웹사이트를 만드는 데 열정을 갖고 있는 야심찬
        프론트엔드 개발자를 꿈꾸고 있습니다. 저는 HTML, CSS, JavaScript에 대한
        탄탄한 기초를 갖추고 있으며 React와 같은 최신 프레임워크에서 지속적으로
        기술에 대해 꾸준히 공부하고 있습니다.
      </div>
      <div className="text">
        <div className="t1 parallax__item__left">FRONT</div>
        <div className="t2 parallax__item__right">END</div>
        <div className="t3 parallax__item__left2">PORT</div>
        <div className="img parallax__item__desc">
          <img src={daewon} alt="dd" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
