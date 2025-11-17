import React from "react";
import "../styles/sections/BackgroundSection.scss";

// BackgroundSection
// - 이 섹션은 'background' 영역입니다.
// - 섹션 전용 스타일은 src/styles/sections/BackgroundSection.scss 에서 관리합니다.
// - 공통 컬러/폰트 토큰은 src/styles/tokens.scss 참고.
// - 섹션 높이/레이아웃은 .background-section-root 안에서 min-height, padding 등만 수정하면 됩니다.
//
// 협업 규칙:
// 1) 각자 맡은 섹션의 jsx + 해당 scss만 기본적으로 수정.
// 2) 공통 토큰(tokes.scss) 바꾸면 전체 바뀌니까 PR 리뷰 후 수정.


import background_jun from "../assets/images_ms/background_jun.svg";
import background_prof from "../assets/images_ms/background_prof.svg";
import background_plat from "../assets/images_ms/background_plat.svg";



export default function BackgroundSection() {
  return (
    <div className="background-section-root">
      <div className="background-section-inner">
        <h2 className="background-title">Background</h2>

        <p className="background-sub">
        이 부분 교수님께 직접 여쭤볼 수 있다면 얼마나 좋을까? 하지만 <br />
         현실은 학교 수업 밖에서 교수님을 만날 방법이 없습니다.
        </p>

        <p className="background-desc">
        전국 수많은 교수님의 지식은 열려 있지만 학생들은 여전히 질문조차 <br />
        꺼내기 어려운 환경에 머물러 있죠. 그래서 우리는, <span className="bg-span">질문이 멈추지 않는 공간</span>을 만들고자 합니다.
        </p>

        {/* =============================== */}

        <h2 className="problem-title">PROBLEM</h2>

        <p className="problem-sub">
        일방적인 지식 전달로는 채워지지 않는, 그 깊은 <span className="prob-sub-span">연결의 갈증</span>
        </p>

        {/* 여기부터 글래스모피즘 카드 3개 */}
        <div className="background-cards">
          {/* 학생의 문제 */}
          <article className="bg-card">
            <p className="bg-card-label">학생의 문제</p>
            <img
              src={background_jun}
              alt="학생 이모지"
              className="bg-card-emoji"
            />
            <p className="bg-card-text">
              원하는 답을 찾기 어렵고
              <br />
              질문의 깊이가 부족해요.
            </p>
          </article>

          {/* 교수의 문제 */}
          <article className="bg-card">
            <p className="bg-card-label">교수의 문제</p>
            <img
              src={background_prof}
              alt="교수 이모지"
              className="bg-card-emoji"
            />
            <p className="bg-card-text">
              반복적인 질문 응답이
              <br />
              노동처럼 느껴져요.
            </p>
          </article>

          {/* 기존 플랫폼의 한계 */}
          <article className="bg-card">
            <p className="bg-card-label">기존 플랫폼의 한계</p>
            <img
              src={background_plat}
              alt="플랫폼 이모지"
              className="bg-card-emoji"
            />
            <p className="bg-card-text">
              전문성이 부족하고
              <br />
              학문적 교류가 일어나지 않아요.
            </p>
          </article>
          </div>
      </div>
    </div>
  );
}
