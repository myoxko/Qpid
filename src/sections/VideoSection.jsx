import React, { useRef, useEffect, useState, useCallback } from "react";
import "../styles/sections/VideoSection.scss";

import posterImg from "../assets/images_jm/video_poster.png";
import introMp4 from "../assets/videos_jm/Qpid_Video.mp4";

// ▼ 목업 기본 이미지(원하는 파일명으로 교체)
import mockTopDefault from "../assets/images_jm/mock_top.png";
import mockLeftDefault from "../assets/images_jm/mock_left.png";
import mockRightDefault from "../assets/images_jm/mock_right.png";

import bridgeImg from "../assets/images_jm/bridge_img.png"

import iconPlanner from "../assets/images_jm/planner.png";
import iconDes1   from "../assets/images_jm/des1.png";
import iconDes2   from "../assets/images_jm/des2.png";
import iconDes3   from "../assets/images_jm/des3.png";
import iconDev1   from "../assets/images_jm/dev1.png";
import iconDev2   from "../assets/images_jm/dev2.png";

const MEMBERS = [
  { role: "PLANNER",  name: "최현영", icon: iconPlanner },
  { role: "DESIGNER", name: "김민서", icon: iconDes1   },
  { role: "DESIGNER", name: "백유리", icon: iconDes2   },
  { role: "DESIGNER", name: "노도희", icon: iconDes3   },
  { role: "DEVELOPER",name: "홍정민", icon: iconDev1   },
  { role: "DEVELOPER",name: "조민서", icon: iconDev2   },
];

export default function VideoSection({
  src = introMp4,
  poster = posterImg,
  // 목업 이미지/타이틀 옵션
  mockTop = mockTopDefault,
  mockLeft = mockLeftDefault,
  mockRight = mockRightDefault,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  const onKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePlay();
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleEnded = () => setIsPlaying(false);
    v.addEventListener("ended", handleEnded);
    return () => v.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section className="video-section-root">
      {/* 비디오 영역 */}
      <div
        className={`video-shell ${isPlaying ? "is-playing" : "is-paused"}`}
        onClick={togglePlay}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex={0}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "영상 일시정지" : "영상 재생"}
      >
        <video
          ref={videoRef}
          className="video-el"
          src={src}
          poster={poster}
          preload="metadata"
          controls={false}
          playsInline
        />
        {!isPlaying && (
          <div className="video-overlay">
            <div className="play-cta">영상 재생</div>
          </div>
        )}
      </div>

      {/* 목업 3장 영역 (비디오 바로 아래) */}
      <div className="mockups">
        
        <div className="mockups-grid">
          <figure className="mockup-card mockup-card--top">
            <img src={mockTop} alt="앱 메인 화면 목업" />
          </figure>
          <figure className="mockup-card">
            <img src={mockLeft} alt="앱 화면 목업(좌측)" />
          </figure>
          <figure className="mockup-card">
            <img src={mockRight} alt="앱 화면 목업(우측)" />
          </figure>
        </div>
      </div>

      <div className="bridge-img">
        <img src={bridgeImg} alt="새로운 지식 커뮤니케이션" />
      </div>

      <section className="thanks-section-root">
      <div className="thanks-card">
        <h3 className="thanks-title">Thank you for watching!</h3>

        <ul className="thanks-grid">
          {MEMBERS.map((m, i) => (
            <li className="thanks-item" key={i}>
              <figure className="thanks-fig">
                <img
                  className="thanks-icon"
                  src={m.icon}
                  alt={`${m.role} 아이콘`}
                />
                <figcaption className="thanks-caption">
                  <div className="thanks-role">{m.role}</div>
                  <div className="thanks-name">{m.name}</div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <small className="thanks-copy">
          © 2025 Qpid. Crafted with curiosity and connection.
        </small>
      </div>
    </section>
    </section>

    
  );
}
