import React from "react";
import Image1 from "../assets/img/KakaoTalk_20240725_092842023_04.jpg";
import Image2 from "../assets/img/KakaoTalk_20240725_045559787_04.jpg";
import Image3 from "../assets/img/KakaoTalk_20240725_045559787_03.jpg";
import Image4 from "../assets/img/KakaoTalk_20240725_045559787_05.jpg";
import Image5 from "../assets/img/KakaoTalk_20240725_092842023.jpg";
import Image6 from "../assets/img/KakaoTalk_20240725_092842023_01.jpg";
import Image7 from "../assets/img/KakaoTalk_20240725_092842023_02.jpg";
import Image8 from "../assets/img/insta.jpg";
const Section2 = () => {
  return (
    <div id="section2">
      <div class="about1">
        <div class="text1">
          <h4 class="split">서대원</h4>
          <p class="split">
            저는 미디어콘텐츠과, 스마트콘텐츠과를 전공하였습니다.
            <br />
            콘텐츠 제작과 영상 편집에 대해 공부하였지만 흥미가 점차 떨어지게
            <br />
            되면서 평소 컴퓨터를 다루기 좋아하였기에 여러가지 알아보던 중<br />
            코딩이라는 주제를 접하게 되었고 그 중 프론트 앤드 개발자에 대해 알게
            <br />
            되어 학원을 다니며 배우게 되었습니다. 코딩을 자세히 배워 가는
            <br />
            과정에서 제 머리속에서 구상한 코드대로 만들어지는 결과를 보니 점차
            <br />
            흥미가 생기기 시작하여 지금에 프론트 엔드 개발자를 꿈꾸게
            <br />
            되었습니다.
          </p>
        </div>
      </div>
      <div class="about2">
        <div class="img1">
          <img src={Image1} alt="Image1" />
        </div>
        <div class="img2">
          <img src={Image2} alt="Image2" />
        </div>
        <div class="img3">
          <img src={Image3} alt="Imag3" />
        </div>
        <div class="img4">
          <img src={Image4} alt="Image4" />
        </div>
        <div class="img5">
          <img src={Image5} alt="Image5" />
        </div>
        <div class="img6">
          <img src={Image6} alt="Image6" />
        </div>
        <div class="img7">
          <img src={Image7} alt="Image7" />
        </div>
        <div class="img8">
          <img src={Image8} alt="Image8" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
