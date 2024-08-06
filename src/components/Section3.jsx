import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PortList } from "../constants";

export default function Section3() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray("#section3 .port");
    let totalWidth = 0;

    sections.forEach((section) => {
      totalWidth += section.offsetWidth + 20;
    });

    gsap.to("#section3 .port-wrap", {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#section3",
        pin: true,
        scrub: 1,
        start: "top 65.8px",
        end: () => "+=" + (totalWidth - window.innerWidth),
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="section3">
      <h4>{"{포트폴리오}"}</h4>
      <div className="port-wrap">
        {PortList.map((PortList, key) => (
          <div className="port p1" key={key}>
            <img src={PortList.img} alt="#" />
            <div className="info">
              <h5>{PortList.title}</h5>
              <p>
                {PortList.desc1}
                <br />
                {PortList.desc2}
              </p>
            </div>
            <div className="skill">
              <span>
                <a
                  href={PortList.codeSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PortList.code}
                </a>
              </span>
              <span>
                <a
                  href={PortList.siteSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PortList.site}
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
