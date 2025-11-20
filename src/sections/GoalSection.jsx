import React, { useEffect, useRef, useState } from "react";
import "../styles/sections/GoalSection.scss";



import goal_position from "../assets/images_ms/goal_position.svg";
import goal_qanda_desc from "../assets/images_ms/goal_qanda_desc.svg";
import goal_piaza_desc from "../assets/images_ms/goal_piaza_desc.svg";
import goal_arrow from "../assets/images_ms/goal_arrow.svg";
import goal_qpid from "../assets/images_ms/goal_qpid.svg";

import goal_stroke from "../assets/images_ms/goal_stroke.svg";
import p_map_stroke from "../assets/images_ms/p_map_stroke.svg";

// const strokeTopRef = useRef(null);
// const strokeBottomRef = useRef(null);
// const [showTopStroke, setShowTopStroke] = useState(false);
// const [showBottomStroke, setShowBottomStroke] = useState(false);

// stroke용
// useEffect(() => {
//   const io = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (!entry.target) return;

//         if (entry.target === strokeTopRef.current) {
//           setShowTopStroke(entry.isIntersecting);
//         }
//         if (entry.target === strokeBottomRef.current) {
//           setShowBottomStroke(entry.isIntersecting);
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );

//   if (strokeTopRef.current) io.observe(strokeTopRef.current);
//   if (strokeBottomRef.current) io.observe(strokeBottomRef.current);

//   return () => io.disconnect();
// }, []);


export default function GoalSection() {
  // 포지셔닝 맵 영역 관찰용
  const mapRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
  
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 뷰포트 안으로 들어오면 true, 나가면 false
          if (entry.isIntersecting) {
            setShowOverlay(true);
          } else {
            setShowOverlay(false);
          }
        });
      },
      { threshold: 0.4 }
    );
  
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="goal-section-root">
      <div className="goal-section-inner">
        {/* 위쪽 stroke */}
        <img
          src={goal_stroke}
          alt="골 svg 애니메이션"
          // ref={strokeTopRef}
          className={"goal-stroke-top"}
        />

        {/* 서브 텍스트 (가운데) */}
        <p className="goal-sub">
          학생과 교수가 AI 매칭을 통해 가장 잘 맞는 지식 교류를 하도록 돕는 <br />
          전문 지식 Q&amp;A 커뮤니티 서비스
        </p>

        {/* 배경 GOAL 텍스트 (가운데) */}
        <p className="goal-bg-text">GOAL</p>

        {/* ← 여기를 따로 묶어서 왼쪽 정렬 */}
        <div className="goal-left-block">
          <h2 className="p-map-title">POSITIONING MAP &amp; ANALYZE</h2>
          <p className="p-map-sub">
            경쟁 서비스들을 분석해 큐피드의 <br />
            방향성과 차별점을 설정했습니다
          </p>

          <p className="p-map-desc">
            신뢰 기반의 대화형 지식 커뮤니케이션 서비스를 지향해요
          </p>

          {/* 포지셔닝 맵 + 분석 이미지 벤토 그리드 */}
          <article className="bg-map" ref={mapRef}>
            {/* 왼쪽 큰 포지셔닝 맵 + 오버레이들 */}
            <div className="bg-main-wrap">
              <img
                src={goal_position}
                alt="포지셔닝 맵"
                className="bg-position"
              />

              {/* 스윽 나타날 화살표 */}
              <img
                src={goal_arrow}
                alt="큐피드 화살표"
                className={
                  "bg-overlay-arrow" + (showOverlay ? " is-visible" : "")
                }
              />

              {/* 스윽 나타날 QPID */}
              {/* 스윽 나타날 QPID + 텍스트 */}
              <div
                className={
                  "bg-overlay-qpid-wrap" + (showOverlay ? " is-visible" : "")
                }
              >
                <img
                  src={goal_qpid}
                  alt="큐피드 로고"
                  className="bg-overlay-qpid"
                />

                <p className="bg-overlay-qpid-text">Our Goal</p>
              </div>
            </div>

            {/* 오른쪽 위/아래 카드들 */}
            <img
              src={goal_qanda_desc}
              alt="콴다 분석"
              className="bg-position"
            />
            <img
              src={goal_piaza_desc}
              alt="피아자 분석"
              className="bg-position"
            />
          </article>
        </div>

        <div className="goal-end">
          {/* 아래쪽 stroke */}
          <img
            src={p_map_stroke}
            alt="포지셔닝 맵 svg 애니메이션"
            // ref={strokeBottomRef}
            className={
              "goal-stroke"
            }
          />
          <p className="goal-sub">
            AI 매칭 기반의 상호작용형 지식 커뮤니케이션 서비스
          </p>
          <p className="goal-desc">
            질문 의도 분석 → 전문가 연결 → 대화형 Q&amp;A → 피드백 축적 <br />
            단순 답변이 아닌, 지식의 순환 구조 구축
          </p>
        </div>
      </div>
    </div>
  );
}
