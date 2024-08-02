import React from "react";
import daewon from "../assets/img/daewon.jpg";
const Section1 = () => {
  return (
    <div id="section1">
      <div class="desc split">
        저는 사용자 친화적인 웹사이트를 만드는 데 열정을 갖고 있는 야심찬
        프론트엔드 개발자를 꿈꾸고 있습니다. 저는 HTML, CSS, JavaScript에 대한
        탄탄한 기초를 갖추고 있으며 React와 같은 최신 프레임워크에서 지속적으로
        기술에 대해 꾸준히 공부하고 있습니다.
      </div>
      <div class="text">
        <div class="t1 parallax__item__left">FRONT</div>
        <div class="t2 parallax__item__right">END</div>
        <div class="t3 parallax__item__left2">PORT</div>
        <div class="img parallax__item__desc">
          <img src={daewon} alt="dd" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
