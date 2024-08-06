import React from "react";

export default function Section6() {
  return (
    <div id="section6">
      <div class="sec6-text">
        <div class="text-left">
          <h3>WHICH STATCK DO SAY HI!</h3>
        </div>
        <div class="text-right">
          <div class="comment-wrap">
            <div class="comment noTop">
              <span class="title">
                1. <em>첫번째 댓글</em>{" "}
              </span>
              <p class="cont">
                정말 인상적이에요! 포트폴리오에서 당신의 창의성과 세심함이
                느껴집니다. 앞으로의 작품들도 기대돼요!
                <span class="auth">머원(30분전)</span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                2. <em>두번째 댓글</em>
              </span>
              <p class="cont">
                포트폴리오 구성이 정말 뛰어나네요. 프로젝트 하나하나에서 당신의
                열정과 전문성이 돋보입니다.
                <span class="auth">머투(30분전)</span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                3. <em>세번째 댓글</em>
              </span>
              <p class="cont">
                와, 정말 멋진 포트폴리오네요! 특히 [특정 프로젝트]가
                인상적이었어요. 훌륭한 작업입니다!
                <span class="auth">머쓰리(1시간)</span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                4. <em>네번째 댓글</em>
              </span>
              <p class="cont">
                이렇게 다양한 스킬셋을 가진 분은 처음 봐요. 당신의 포트폴리오는
                진정으로 영감을 줍니다.
                <span class="auth">머포(4일전) </span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                5. <em>네번째 댓글</em>
              </span>
              <p class="cont">
                디자인과 내용 모두 완벽하네요! 당신의 포트폴리오는 다른
                사람들에게 좋은 예가 될 것 같아요.
                <span class="auth">머파이브(4일전) </span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                6. <em>네번째 댓글</em>
              </span>
              <p class="cont">
                각 프로젝트마다 세부사항을 잘 설명해주셔서 이해하기 쉬웠어요.
                정말 탁월한 포트폴리오입니다!
                <span class="auth">머식스(4일전)</span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                7. <em>네번째 댓글</em>
              </span>
              <p class="cont">
                당신의 작품들은 혁신적이고 독창적이네요. 포트폴리오 전체가 매우
                인상 깊습니다.
                <span class="auth">머세븐(4일전) </span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                8. <em>네번째 댓글</em>
              </span>
              <p class="cont">
                프로젝트마다 당신의 기술적 능력과 창의성이 잘 드러나 있어요.
                훌륭한 포트폴리오입니다!
                <span class="auth">머에잇(4일전) </span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                9. <em>네번째 댓글</em>
              </span>
              <p class="cont">
                포트폴리오를 통해 당신의 전문성과 경험을 잘 알 수 있었어요. 정말
                멋진 작업들입니다!
                <span class="auth">머나인(4일전) </span>
              </p>
            </div>
            <div class="comment">
              <span class="title">
                10. <em>네번째 댓글</em>
              </span>
              <p class="cont">
                당신의 포트폴리오는 단순히 보기 좋은 것뿐만 아니라 매우
                실용적이네요. 많은 것을 배웠습니다.
                <span class="auth">머텐(4일전) </span>
              </p>
            </div>

            <div class="comment">
              <span class="title">
                <em>댓글 쓰기</em>
              </span>
              <div class="cont comment__form">
                <form action="/" method="POST">
                  <fieldset>
                    <legend className="blind">댓글 쓰기 영역</legend>
                    <div class="input">
                      <label htmlFor="youName" className="required blind">
                        글쓴이
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="youName"
                        placeholder="이름"
                      />
                      <label htmlFor="youName" className="required blind">
                        비밀번호
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="youName"
                        placeholder="비밀번호"
                      />
                    </div>
                    <div class="text">
                      <label htmlFor="youConts" className="required blind">
                        글 내용
                      </label>
                      <textarea
                        name="content"
                        id="youConts"
                        placeholder="댓글은 적당히 써주세요!"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn__style2 mt30">
                      댓글 쓰기
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
