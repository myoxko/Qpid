import React from "react";
import "../styles/sections/personaSection.scss";

import persona_avatars from "../assets/images_ms/persona_avatars.svg";
import persona_journeymap from "../assets/images_ms/persona_journeymap.svg";

export default function personaSection() {

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
          단 한 명의 사용자도 놓치지 않는 <span className="persona-span">맞춤형 서비스</span> 제공
          </p>
        </div>

        <div className="key-top-block">
          <h2 className="key-title">KEY SERVICE</h2>

          <p className="key-sub">
          AI 매칭 → 채팅형 Q&A → 피드백 기록/데이터화로 이어지는  <br/>
          <span className="key-span">순환 구조로 지식 커뮤니케이션 경험</span>을 제공합니다.
          </p>
        </div>

      </div>
    </div>
  );
}
