import React from "react";
import "../styles/sections/HomeSection.scss";

// HomeSection
// - 이 섹션은 'home' 영역입니다.
// - 섹션 전용 스타일은 src/styles/sections/HomeSection.scss 에서 관리합니다.
// - 공통 컬러/폰트 토큰은 src/styles/tokens.scss 참고.
// - 섹션 높이/레이아웃은 .home-section-root 안에서 min-height, padding 등만 수정하면 됩니다.
//
// 협업 규칙:
// 1) 각자 맡은 섹션의 jsx + 해당 scss만 기본적으로 수정.
// 2) 공통 토큰(tokes.scss) 바꾸면 전체 바뀌니까 PR 리뷰 후 수정.

import Qpid_logo from "../assets/images_ms/Qpid_logo.svg";
import home_phone1 from "../assets/images_ms/home_phone1.svg";
import home_phone2 from "../assets/images_ms/home_phone2.svg";
// import home_document_blue from "../assets/images_ms/home_document_blue.svg";
// import home_document_orange from "../assets/images_ms/home_document_orange.svg";
// import home_box from "../assets/images_ms/home_box.svg";
import home_flower_5dot from "../assets/images_ms/home_flower_5dot.svg";
import home_flower_clover from "../assets/images_ms/home_flower_clover.svg";
import home_flower_star from "../assets/images_ms/home_flower_clover.svg";
import home_flower_star_blur from "../assets/images_ms/home_flower_star.svg";
import home_union from "../assets/images_ms/home_union.svg";
import home_union_op from "../assets/images_ms/home_union_op.svg";
import home_circle from "../assets/images_ms/home_circle.svg";


export default function HomeSection() {
  return (
    <div className="home-section-root">
      <div className="home-section-inner">
        {/* ===== 히어로 전체 (원 + 로고 + 폰) ===== */}
        <div className="home-hero">
          {/* 배경 반원 */}
          <img
            src={home_circle}
            alt="배경 원"
            className="home-circle"
          />

          {/* 로고 + 카피 영역 (원 안에 들어가는 부분) */}
          <div className="home-hero-main">
            <img
              src={Qpid_logo}
              alt="큐피드 로고"
              className="home-logo-image"
            />

            {/* 원래 카피 텍스트 위치 (지금은 더미) */}
            <p className="home-tagline">
              교수와 학생을 잇는<br />
              AI 매칭 기반 지식 교류 서비스
            </p>
          </div>

          {/* 폰 두 개 나란히 */}
          <div className="home-phones">
            <img
              src={home_phone1}
              alt="홈 목업1"
              className="home-phone home-phone--left"
            />
            <img
              src={home_phone2}
              alt="홈 목업2"
              className="home-phone home-phone--right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}