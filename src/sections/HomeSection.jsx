import React from "react";
import "../styles/sections/HomeSection.scss";

import Qpid_logo from "../assets/images_ms/Qpid_logo.svg";
import home_phone1 from "../assets/images_ms/home_phone1.svg";
import home_phone2 from "../assets/images_ms/home_phone2.svg";
import home_flower_5dot from "../assets/images_ms/home_flower_5dot.svg";
import home_flower_clover from "../assets/images_ms/home_flower_clover.svg";
import home_flower_star from "../assets/images_ms/home_flower_clover.svg";
import home_flower_star_blur from "../assets/images_ms/home_flower_star.svg";
import home_union from "../assets/images_ms/home_union.svg";
import home_union_op from "../assets/images_ms/home_union_op.svg";
import home_circle from "../assets/images_ms/home_circle.svg";

// ... import 부분 동일

export default function HomeSection() {
  return (
    <div className="home-section-root">
      <div className="home-section-inner">
        <div className="home-hero">
          {/* 좌/우 블루 배경 */}
          <img
            src={home_union}
            alt=""
            className="home-union home-union--left"
            aria-hidden="true"
          />
          <img
            src={home_union_op}
            alt=""
            className="home-union home-union--right"
            aria-hidden="true"
          />

          {/* ===== 흰 반원 + 로고 + 폰 + 데코 ===== */}
          <div className="home-hero-visual">
            {/* 흰 반원 */}
            <img
              src={home_circle}
              alt="큐피드 메인 배경"
              className="home-circle"
            />

            {/* 큰 Qpid 로고 (배경 역할) */}
            <div className="home-hero-main">
              <img
                src={Qpid_logo}
                alt="큐피드 로고"
                className="home-logo-image"
              />
            </div>

            {/* 👉 카피를 따로 빼서 폰 위에 배치 */}
            <p className="home-tagline">
              교수와 학생을 잇는
              <br />
              AI 매칭 기반 지식 교류 서비스
            </p>

            {/* 폰 두 개 */}
            <div className="home-phones">
              <img
                src={home_phone1}
                alt="학생 앱 화면 목업"
                className="home-phone home-phone--left"
              />
              <img
                src={home_phone2}
                alt="교수 앱 화면 목업"
                className="home-phone home-phone--right"
              />
            </div>

            {/* 꽃/눈송이 데코 */}
            <img
              src={home_flower_5dot}
              alt=""
              aria-hidden="true"
              className="home-deco home-deco--5dot-left"
            />
            <img
              src={home_flower_clover}
              alt=""
              aria-hidden="true"
              className="home-deco home-deco--clover-right"
            />
            <img
              src={home_flower_star}
              alt=""
              aria-hidden="true"
              className="home-deco home-deco--star-left"
            />
            <img
              src={home_flower_star_blur}
              alt=""
              aria-hidden="true"
              className="home-deco home-deco--star-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
