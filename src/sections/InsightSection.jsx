import React, { useEffect, useRef } from "react";
import "../styles/sections/InsightSection.scss";

import whiteCircle from "../assets/images_ms/insight_whitecircle.svg";
import blueFlower from "../assets/images_ms/insight_blueflower.svg";
import orangeFlower from "../assets/images_ms/insight_orangeflower.svg";
import yellowFlower from "../assets/images_ms/insight_yellowflower.svg";
import paperPlane from "../assets/images_ms/insight_paperplane.svg";
import insight_stroke from "../assets/images_ms/insight_stroke.svg";

export default function InsightSection() {
  const leftCards = [
    {
      text: "학생들이 익명으로 질문하니까 더 솔직한 의견을 주는 것 같아요.",
      author: "- 건축공학과 교수 김○석",
      accent: false,
    },
    {
      text:
        "학생들이 대면으로 질문했을 때 그에 맞는 답변과 참고 자료들을 바로바로 볼 수 없어서 불편합니다.",
      author: "- 시각디자인과 교수 박○수",
      accent: false,
    },
    {
      text: "학생 상담도 플랫폼에서 이어지면 좋겠어요.",
      author: "- 광고브랜드학과 교수 최○영",
      accent: "blue",
    },
    {
      text: "강의 피드백을 한눈에 볼 수 있는 게 편리했어요.",
      author: "- 미디어학부 교수 이○지",
      accent: false,
    },
  ];

  const rightCards = [
    {
      text: "전국 대학생, 교수님과 소통하고 싶지만 막혀 있어 답답해요.",
      author: "- 경영학과 3학년 김○진",
      accent: "orange",
    },
    {
      text:
        "교수님께 질문은 하고 싶지만, 늘 우리 학과·우리 전공 안에서만 답을 얻으니까 시야가 좁아지는 느낌이에요.",
      author: "- 미디어디자인과 2학년 공○영",
      accent: false,
    },
    {
      text:
        "늘 비슷한 질문만 반복되다 보니 새로운 시각에서 대화할 기회가 부족합니다.",
      author: "- 시각디자인과 2학년 최○빈",
      accent: false,
    },
    {
      text:
        "다른 전공이나 다른 학교 교수님께도 묻고 싶은데, 연결할 방법이 전혀 없어서 답답합니다.",
      author: "- 해양환경과 4학년 김○보",
      accent: false,
    },
  ];

  const researchCards = [
    {
      id: "/01",
      title: "질문 피로 해소",
      icon: blueFlower,
    },
    {
      id: "/02",
      title: "집중도 향상",
      icon: orangeFlower,
    },
    {
      id: "/03",
      title: "학습 만족도 증가",
      icon: yellowFlower,
    },
  ];

  const researchSectionRef = useRef(null);

  // 스크롤로 들어올 때마다 애니메이션 다시 재생
  useEffect(() => {
    const section = researchSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        } else {
          section.classList.remove("is-visible");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="insight-section-root">
      <div className="insight-section-inner">
        {/* IN DEPTH INTERVIEW 섹션 */}
        <div className="insight-left-block">
          <h2 className="interview-title">IN DEPTH INTERVIEW</h2>
          <p className="interview-sub">
            인터뷰를 통해 교수와 학생, 서로가 가지고 <br />
            있는 생각들을 알아봤습니다
          </p>
        </div>

        <div className="insight-summary-and-quotes">
          {/* 왼쪽 - 교수 */}
          <div className="insight-column insight-column-left">
            <p className="insight-summary">
              대학교 강의 및 학생 커뮤니티 운영중인 교수 36명을 인터뷰하여
              학교 내 소통의 문제점과 연결의 한계를 파악했습니다.
            </p>

            <div className="insight-card-list">
              {leftCards.map((card, idx) => (
                <div
                  key={idx}
                  className={[
                    "insight-quote-card",
                    card.accent === "blue" ? "is-accent-blue" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p className="insight-quote-text">{card.text}</p>
                  <p className="insight-quote-author">{card.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 가운데 세로 라인 */}
          <div className="insight-divider" />

          {/* 오른쪽 - 학생 */}
          <div className="insight-column insight-column-right">
            <p className="insight-summary">
              대학생 및 대학원생 83명을 대상으로 교수와의 소통 경험과 참여
              방식의 불편함을 심층 인터뷰했습니다.
            </p>

            <div className="insight-card-list">
              {rightCards.map((card, idx) => (
                <div
                  key={idx}
                  className={[
                    "insight-quote-card",
                    card.accent === "orange" ? "is-accent-orange" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p className="insight-quote-text">{card.text}</p>
                  <p className="insight-quote-author">{card.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RESEARCH INSIGHTS 섹션 */}
        <section
          className="research-insights-section"
          ref={researchSectionRef}
        >
          {/* 상단: 텍스트만 */}
          <div className="research-top-row">
            <div className="research-text-block">
              <span className="research-label">RESEARCH INSIGHTS</span>
              <h2 className="research-title">
                인터뷰 의견을 모아 교수와 학생의 <br />
                구체적인 인사이트를 발견했어요
              </h2>
            </div>
          </div>

          {/* 섹션 전체를 가로지르는 비행기 레이어 */}
          {/* <div className="research-plane-layer">
            <svg
              className="research-plane-path"
              viewBox="0 0 1440 360"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 300 Q 420 230 780 250 T 1440 160"
                fill="none"
                stroke="#2E6BFF"
                strokeWidth="3"
                strokeDasharray="6 12"
              />
            </svg>

            <img
              src={paperPlane}
              alt="paper plane"
              className="research-paper-plane"
            />
          </div> */}

            <img
              src={paperPlane}
              alt="paper plane"
              className="paper-plane-lock"
            />

            <img
              src={insight_stroke}
              alt="paper plane"
              className="insight_stroke"
            />

          {/* 아래: 카드 3개 + 결과 텍스트 (좌/우) */}
          <div className="research-main-row">
            <div className="research-cards-row">
              {researchCards.map((card) => (
                <div key={card.id} className="research-card">
                  <div className="research-card-top">
                    <span className="research-card-id">{card.id}</span>
                  </div>
                  <div className="research-card-icon-wrap">
                    <img
                      src={whiteCircle}
                      alt=""
                      className="research-card-circle"
                    />
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="research-card-flower"
                    />
                  </div>
                  <p className="research-card-title">{card.title}</p>
                </div>
              ))}
            </div>

            <div className="research-result-block">
              <span className="research-result-pill">결과</span>
              <p className="research-result-text">
                학생과 교수의 <br />
                지식 커뮤니케이션을 최적화하여<br />
                <span className="research-result-highlight">
                  지식 소통의 더 커진 세상
                </span>
                을 열어줍니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
