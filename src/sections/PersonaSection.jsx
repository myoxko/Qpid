import React from "react";
import "../styles/sections/personaSection.scss";

import persona_avatars from "../assets/images_ms/persona_avatars.svg";
import persona_journeymap from "../assets/images_ms/persona_journeymap.svg";



export default function PersonaSection() {
  return (
    <div className="persona-section-root">
      <div className="persona-section-inner">
        {/* 페르소나 타이틀 영역 */}
        <div className="persona-left-block">
          <h2 className="persona-title">PERSONA</h2>
        </div>

        <img
          src={persona_avatars}
          alt="교수 학생 페르소나"
          className="persona_avatars"
        />

        {/* 유저 저니맵 타이틀 영역 */}
        <div className="persona-left-block">
          <h2 className="persona-title">USER JOURNEY MAP</h2>
        </div>

        <img
          src={persona_journeymap}
          alt="유저 저니맵"
          className="persona_journeymap"
        />

        <div className="persona-end">
          <p className="persona-sub">
            단 한 명의 사용자도 놓치지 않는{" "}
            <span className="persona-span">맞춤형 서비스</span> 제공
          </p>
        </div>

        <div className="key-top-block">
          <h2 className="key-title">KEY SERVICE</h2>
          <p className="key-sub">
            AI 매칭 → 채팅형 Q&amp;A → 피드백 기록/데이터화로 이어지는 <br />
            <span className="key-span">순환 구조로 지식 커뮤니케이션 경험</span>
            을 제공합니다.
          </p>
        </div>

{/* ───────────────────────────────── */}
{/* 2x2 KEY SERVICE GRID */}
{/* ───────────────────────────────── */}
<section className="service-grid-section">
  <div className="service-grid">
    {/* 1. 홈 */}
    <article className="service-panel service-panel--home">
      <div className="service-panel-inner">
        {/* 위: 비주얼 */}
        <div className="service-panel-body service-panel-body--home">
          <div className="service-visual service-visual--home">
            {/* 봉투 애니메이션 들어갈 영역 */}
          </div>
        </div>

        {/* 아래: pill + 제목 */}
        <div className="service-panel-header">
          <button className="service-title-pill">홈</button>
          <h3 className="service-panel-title">
            질문 의도 분석 및
            <br />
            최적의 지식/전문가 연결
          </h3>
        </div>
      </div>
    </article>

    {/* 2. 커뮤니티 */}
    <article className="service-panel service-panel--community">
      <div className="service-panel-inner">
        <div className="service-panel-body service-panel-body--community">
          <div className="service-visual service-visual--community">
            {/* 원형 레이더 + 아바타 영역 */}
          </div>
        </div>

        <div className="service-panel-header">
          <button className="service-title-pill">커뮤니티</button>
          <h3 className="service-panel-title">
            지식을 나누고,
            <br />
            함께 성장하는 대화의 공간
          </h3>
        </div>
      </div>
    </article>

    {/* 3. 채팅 */}
    <article className="service-panel service-panel--chat">
      <div className="service-panel-inner">
        <div className="service-panel-body service-panel-body--chat">
          <div className="service-visual service-visual--chat">
            {/* 말풍선/채팅 UI 영역 */}
          </div>
        </div>

        <div className="service-panel-header">
          <button className="service-title-pill">채팅</button>
          <h3 className="service-panel-title">
            단발성 Q&amp;A를 넘어
            <br />
            대화로 경험 확장
          </h3>
        </div>
      </div>
    </article>

    {/* 4. 마이페이지 */}
    <article className="service-panel service-panel--mypage">
      <div className="service-panel-inner">
        <div className="service-panel-body service-panel-body--mypage">
          <div className="service-visual service-visual--mypage">
            {/* 카드형 통계/리스트 영역 */}
          </div>
        </div>

        <div className="service-panel-header">
          <button className="service-title-pill">마이페이지</button>
          <h3 className="service-panel-title">
            경험을 기록하고
            <br />
            지식으로 정제/축적
          </h3>
        </div>
      </div>
    </article>
  </div>
</section>
      </div>
    </div>
  );
}
