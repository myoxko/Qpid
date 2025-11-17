import React from "react";
import "../styles/sections/GoalSection.scss";

import goal_qanda from "../assets/images_ms/goal_qanda.svg";

export default function GoalSection() {
  return (
    <div className="goal-section-root">
      <div className="goal-section-inner">

        {/* 서브 텍스트 (가운데) */}
        <p className="goal-sub">
          학생과 교수가 AI 매칭을 통해 가장 잘 맞는 지식 교류를 하도록 돕는 <br />
          전문 지식 Q&A 커뮤니티 서비스
        </p>

        {/* 배경 GOAL 텍스트 (가운데) */}
        <p className="goal-bg-text">GOAL</p>

        {/* ← 여기를 따로 묶어서 왼쪽 정렬 */}
        <div className="goal-left-block">
          <h2 className="p-map-title">POSITIONING MAP & ANALYZE</h2>
          <p className="p-map-sub">
          경쟁 서비스들을 분석해 큐피드의 < br />
          방향성과 차별점을 설정했습니다
            </p>

        <p className="p-map-desc">
        신뢰 기반의 대화형 지식 커뮤니케이션 서비스를 지향해요
        </p>

        <article className="bg-card">
          <p className="bg-card-label">기존 플랫폼의 한계</p>
          <img
            src={goal_qanda}
            alt="콴다 로고"
            className="bg-card-emoji"
          />
          <p className="bg-card-text">
            전문성이 부족하고
            <br />
            학문적 교류가 일어나지 않아요.
          </p>
        </article>
        
        </div>

        <div className="goal-end">
          <p className="goal-sub">
          AI 매칭 기반의 상호작용형 지식 커뮤니케이션 서비스
          </p>
          <p className="goal-desc">
          질문 의도 분석 → 전문가 연결 → 대화형 Q&A → 피드백 축적 <br />
          단순 답변이 아닌, 지식의 순환 구조 구축
          </p>
        </div>


      </div>
    </div>
  );
}
