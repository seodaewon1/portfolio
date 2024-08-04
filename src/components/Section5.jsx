import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    ScrollTrigger.create({
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
            <dt className="noTop">
              {"{Html & CSS}"}
              <p className="gauge" data-percent="99"></p>
            </dt>
            <dd>
              HTML과 CSS를 사용하여 웹 페이지의 구조와 스타일을 설계하고
              구현했습니다. 시맨틱 마크업을 사용하여 접근성과 SEO를 고려한 웹
              페이지를 작성할 수 있으며, 최신 CSS3 기술을 활용하여 반응형
              디자인과 애니메이션을 구현하는 데 능숙합니다.
            </dd>
            <dd>
              Sass와 같은 CSS 전처리기를 사용하여 유지보수와 재사용성이 높은
              스타일시트를 작성하고, Flexbox와 Grid 레이아웃을 활용하여 복잡한
              레이아웃도 효율적으로 구성할 수 있습니다.
            </dd>
          </dl>
          <dl>
            <dt className="noTop">
              {"{JavaScript}"}
              <p className="gauge" data-percent="90"></p>
            </dt>
            <dd>
              JavaScript를 사용하여 다양한 웹 애플리케이션을 개발했습니다. ES6+
              문법을 적극 활용하여 클린하고 효율적인 코드를 작성했으며, 비동기
              처리와 이벤트 기반 프로그래밍에 능숙합니다.
            </dd>
            <dd>
              React, Node.js 등과 같은 프레임워크와 라이브러리를 활용하여 사용자
              친화적인 인터페이스와 고성능 서버를 구축했습니다.
            </dd>
          </dl>
          <dl>
            <dt>
              {"{PHP & MySQL}"}
              <p className="gauge" data-percent="70"></p>
            </dt>
            <dd>
              PHP와 MySQL을 사용하여 안정적이고 확장 가능한 백엔드 시스템을
              구축했습니다. Laravel과 같은 PHP 프레임워크를 사용하여 MVC
              아키텍처 기반의 웹 애플리케이션을 개발했으며, MySQL 데이터베이스를
              효율적으로 설계하고 최적화했습니다.
            </dd>
            <dd>
              RESTful API를 설계하고 구현하여 프론트엔드와 백엔드 간의 통신을
              원활하게 처리했습니다.
            </dd>
          </dl>
          <dl>
            <dt>
              {"{React.js}"}
              <p className="gauge" data-percent="80"></p>
            </dt>
            <dd>
              React.js를 활용하여 모던 웹 애플리케이션을 구축한 경험이
              풍부합니다. 컴포넌트 기반 아키텍처를 통해 재사용성과 유지보수성을
              극대화했으며, Redux를 사용하여 상태 관리를 효율적으로
              수행했습니다.
            </dd>
            <dd>
              Hook을 활용하여 함수형 컴포넌트를 작성하고, React Router로 복잡한
              네비게이션 로직을 구현했습니다.
            </dd>
          </dl>
          <dl>
            <dt>
              {"{Node.js}"}
              <p className="gauge" data-percent="70"></p>
            </dt>
            <dd>
              Node.js로 고성능 서버 애플리케이션을 개발했습니다. Express.js와
              같은 프레임워크를 사용하여 RESTful API를 구축하고, 실시간 데이터
              처리를 위해 Socket.io를 사용했습니다.
            </dd>
            <dd>
              데이터베이스와의 원활한 통신을 위해 Mongoose와 Sequelize ORM을
              활용했습니다.
            </dd>
          </dl>
          <dl>
            <dt>
              {"{Next.js}"}
              <p className="gauge" data-percent="70"></p>
            </dt>
            <dd>
              Next.js를 사용하여 서버 사이드 렌더링과 정적 사이트 생성 기능을
              갖춘 웹 애플리케이션을 개발했습니다. 페이지 기반 라우팅 시스템을
              통해 SEO를 최적화했으며, API 라우트를 사용하여 서버리스 함수도
              구현했습니다.
            </dd>
            <dd>
              Styled Components와 CSS 모듈을 사용하여 스타일링을 모듈화하고,
              코드 스플리팅을 통해 성능을 최적화했습니다.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
