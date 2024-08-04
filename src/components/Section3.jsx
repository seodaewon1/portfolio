import React, { useEffect } from "react";
import img1 from "../assets/img/Frame01.jpg";
import img2 from "../assets/img/Frame02.jpg";
import img3 from "../assets/img/Frame03.jpg";
import img4 from "../assets/img/Frame04.jpg";
import img5 from "../assets/img/Frame05.jpg";
import img6 from "../assets/img/Frame06.jpg";
import img7 from "../assets/img/Frame07.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Section3() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray("#section3 .port");
    let totalWidth = 0;

    sections.forEach((section) => {
      totalWidth += section.offsetWidth + 20; // Add margin-right to total width
    });

    gsap.to("#section3 .port-wrap", {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#section3",
        pin: true,
        scrub: 1,
        start: "top top", // Adjusted start position
        end: () => "+=" + (totalWidth - window.innerWidth),
        markers: true, // Enable markers for debugging
      },
    });

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="section3">
      <h4>{"{포트폴리오}"}</h4>
      <div className="port-wrap">
        <div className="port p1">
          <div className="mockup"></div>
          <img src={img1} alt="#" />
          <div className="info">
            <h5>{"{PlayList}"}</h5>
            <p>
              사용자가 자신만의 맞춤형 음악 플레이리스트를 제작하고
              <br />
              관리할 수 있는 YOUTUBE API를 활용하고 REACT로 제작한 사이트입니다.
            </p>
          </div>
          <div className="skill">
            <span>
              <a
                href="https://github.com/seodaewon1/playlist"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODEVIEW
              </a>
            </span>
            <span>
              <a
                href="https://playlist-topaz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SITEVIEW
              </a>
            </span>
          </div>
        </div>

        <div className="port p2">
          <img src={img2} alt="" />
          <div className="info">
            <h5>{"{What to Wear}"}</h5>
            <p>
              REACT와 YOUTUBE API를 이용하여 제작한 사이트로
              <br />
              사용자들에게 지금 환경에 가장 필요한 옷을 제공해주는 웹
              사이트입니다.
            </p>
          </div>
          <div className="skill">
            <span>
              <a
                href="https://github.com/seodaewon1/attraction"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODEVIEW
              </a>
            </span>
            <span>
              <a
                href="https://attraction-rosy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SITEVIEW
              </a>
            </span>
          </div>
        </div>

        <div className="port p3">
          <img src={img3} alt="" />
          <div className="info">
            <h5>{"{BOOKING}"}</h5>
            <p>
              REACT와 PYTHON으로 수집한 데이터를 활용하여
              <br />
              제작한 가장 인기있는 자격증 서점별 랭킹 비교 사이트입니다.
            </p>
          </div>
          <div className="skill">
            <span>
              <a
                href="https://github.com/seodaewon1/booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODEVIEW
              </a>
            </span>
            <span>
              <a
                href="https://booking-ruddy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SITEVIEW
              </a>
            </span>
          </div>
        </div>

        <div className="port p4">
          <img src={img4} alt="" />
          <div className="info">
            <h5>{"{VUE PORT}"}</h5>
            <p>
              VUE.JS를 사용하고 GSAP를 활용하여
              <br />
              스크롤 효과를 보여주는 포트폴리오 제작 사이트입니다.
            </p>
          </div>
          <div className="skill">
            <span>
              <a
                href="https://github.com/seodaewon1/vue-port"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODEVIEW
              </a>
            </span>
            <span>
              <a
                href="https://vue-port-sandy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SITEVIEW
              </a>
            </span>
          </div>
        </div>

        <div className="port p5">
          <img src={img5} alt="" />
          <div className="info">
            <h5>{"{MVKING}"}</h5>
            <p>
              Vue.js, Swiper, The Movie Database(TMDB) api를 사용하여
              <br />
              영화 순위, 평점 개봉예정을 확인할 수 있는 영화 사이트입니다.
            </p>
          </div>
          <div className="skill">
            <span>
              <a
                href="https://github.com/seodaewon1/mvking-vue"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODEVIEW
              </a>
            </span>
            <span>
              <a
                href="https://mvking-vue.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SITEVIEW
              </a>
            </span>
          </div>
        </div>

        <div className="port p6">
          <img src={img6} alt="" />
          <div className="info">
            <h5>{"{MEOLOG}"}</h5>
            <p>
              NODE.JS를 사용하여 제작한 블로그 사이트입니다.
              <br />
              로그인, 게시판 기능을 구현하여 NODE.JS에 사용법을 숙지하였습니다.
            </p>
          </div>
          <div className="skill">
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                loading..
              </a>
            </span>
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                loading..
              </a>
            </span>
          </div>
        </div>

        <div className="port p7">
          <img src={img7} alt="" />
          <div className="info">
            <h5>{"{DRUWA}"}</h5>
            <p>
              NODE.JS를 사용하고 GPS와 지도 API를 사용하여
              <br />
              주변 드라이브 스루 매장을 쉽고 간편하게 찾을 수 있도록 제작한
              사이트입니다.
            </p>
          </div>
          <div className="skill">
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                loading..
              </a>
            </span>
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                loading..
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
