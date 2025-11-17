import React from 'react';
import '../styles/sections/SystemSection.scss';

import ImgBlue from '../assets/images_jm/designSystemIMG1.png';
import ImgDark from '../assets/images_jm/designSystemIMG2.png';
import ImgNote from '../assets/images_jm/designSystemIMG3.png';

import PalettePrimary from '../assets/images_jm/palettePrimary.png';
import PaletteSub from '../assets/images_jm/paletteSub.png';
import PaletteGray from '../assets/images_jm/paletteGray.png';

import LogoMark from '../assets/images_jm/designSystemLogo.png';
import LogoMark2 from '../assets/images_jm/designSystemLogo2.png';
import Mockup from '../assets/images_jm/SystemSectionMockup.png';

// SystemSection
// - 이 섹션은 'system' 영역입니다.
// - 섹션 전용 스타일은 src/styles/sections/SystemSection.scss 에서 관리합니다.
// - 공통 컬러/폰트 토큰은 src/styles/tokens.scss 참고.
// - 섹션 높이/레이아웃은 .system-section-root 안에서 min-height, padding 등만 수정하면 됩니다.
//
// 협업 규칙:
// 1) 각자 맡은 섹션의 jsx + 해당 scss만 기본적으로 수정.
// 2) 공통 토큰(tokes.scss) 바꾸면 전체 바뀌니까 PR 리뷰 후 수정.

export default function SystemSection() {
  return (
    <section className="system-section-root">
      <div className="system-section-inner">
        {/* =========================
            [1] 상단 DESIGN 블록
            ========================= */}
        <div className="system-section-1">
          {/* 1. 제목 + 설명 영역 (세로) */}
          <div className="system-1-intro">
            <h2 className="system-title">DESIGN</h2>
            <p className="system-desc">
            편지(Envelope) 메타포를 활용하여 메시지 교환과 피드백 과정을 
            <br />
            직관적이고 친근하게 표현했으며, 지나치게 형식적이지 않으면서도 
            <br />
            신뢰감과 전문성을 유지하도록 디자인했습니다.
            </p>
          </div>

          {/* 2. 이미지 카드 영역 (가로 레이아웃) */}
          <div className="system-1-images">
            {/* 컬럼 1 */}
            <div className="img-col img-col-1">
              <div className="system-img-card">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${ImgBlue})`,
                  }}
                />
                <div className="card-caption">
                  https://kr.pinterest.com/pin/211174977772549/
                </div>
              </div>
            </div>

            {/* 컬럼 2 */}
            <div className="img-col img-col-2">
              <div className="system-img-card">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${ImgDark})`,
                  }}
                />
                <div className="card-caption">
                  https://kr.pinterest.com/pin/211174977772549/
                </div>
              </div>
            </div>

            {/* 컬럼 3 */}
            <div className="img-col img-col-3">
              <div className="system-img-card">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${ImgNote})`,
                  }}
                />
                <div className="card-caption">
                  https://kr.pinterest.com/pin/211174977772549/
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            [2] 하단 DESIGN SYSTEM 블록
            ========================= */}
        <div className="system-section-2">
          {/* 1. 인트로 영역 (그리드 아님) */}
          <div className="system-grid-intro">
            <div className="system-intro">
              <div className="system-intro-head">
                <h2 className="system-title">
                  DESIGN
                  <br />
                  SYSTEM
                </h2>
              </div>

              <p className="system-desc">
              큐피드의 비주얼 시스템은 차가운 지식과 따뜻한 감정이 만나는 지점을 표현합니다.
              <br />
              이 조화는 서비스가 지향하는 본질을 담고 있으며, 선명한 블루와 따뜻한 오렌지, 
              <br /> 
              그리고 신뢰감 있는 타이포그래피를 통해 지식과 감정이 공존하는 대화의 공간을 시각화합니다. 
              <br />
              여기에 네온 그린을 교수와 학생을 연결하는 ‘연결의 색’으로 활용하여, 
              <br />
              지식의 흐름과 상호작용을 상징적으로 표현했습니다.
              </p>
            </div>
          </div>

          {/* 2. 그 이후(컬러 팔레트 / 타이포그래피)를 2컬럼 그리드로 */}
          <div className="system-grid-rest">
            {/* 왼쪽 컬럼 */}
            <div className="system-left-col">
              <div className="color-block">
                <h3 className="block-title">Color</h3>

                <div className="palette-block">
                  <div className="palette-label">Primary</div>

                  <div className="palette-image-wrapper">
                    <img
                      src={PalettePrimary}
                      alt="Primary color cards (Main, Light, Main2, Background)"
                      className="palette-image"
                    />
                  </div>
                </div>

                {/* Sub 섹션 */}
                <div className="palette-block">
                  <div className="palette-label">Sub</div>

                  <div className="palette-image-wrapper">
                    <img
                      src={PaletteSub}
                      alt="Sub color cards (Neon accent)"
                      className="palette-image"
                    />
                  </div>
                </div>

                {/* Grayscale 섹션 */}
                <div className="palette-block">
                  <div className="palette-label">Grayscale</div>

                  <div className="palette-image-wrapper">
                    <img
                      src={PaletteGray}
                      alt="Grayscale chips"
                      className="palette-image"
                    />
                  </div>
                </div>
                {/* palette-group */}
              </div>
              {/* color-block */}
            </div>

            {/* 오른쪽 컬럼 */}
            <div className="system-right-col">
              <div className="typography-block">
                <h3 className="block-title">Typography</h3>

                <div className="type-family">
                  <p className="type-font-name">
                    Pretendard
                    <br />
                    <span className="type-font-name">프리텐다드</span>
                  </p>
                </div>

                <ul className="type-scale-list">
                  <li className="type-row">
                    <span className="type-label">Heading 1</span>
                    <span className="type-style">Regular, 60</span>
                  </li>
                  <li className="type-row">
                    <span className="type-label">Heading 1</span>
                    <span className="type-style">Semibold, 20</span>
                  </li>
                  <li className="type-row">
                    <span className="type-label">Heading 2</span>
                    <span className="type-style">Medium, 20</span>
                  </li>
                  <li className="type-row">
                    <span className="type-label">Title</span>
                    <span className="type-style">Semibold, 24</span>
                  </li>
                  <li className="type-row">
                    <span className="type-label">Subtitle 2</span>
                    <span className="type-style">Medium, 16</span>
                  </li>
                  <li className="type-row">
                    <span className="type-label">Body 1</span>
                    <span className="type-style">Regular, 16</span>
                  </li>
                  <li className="type-row">
                    <span className="type-label">Body 2</span>
                    <span className="type-style">Regular, 14</span>
                  </li>
                  <li className="type-row">
                    <span className="type-label">Caption 1</span>
                    <span className="type-style">Semibold, 16</span>
                  </li>
                  <li className="type-row">
                    <span className="type-label">Caption 2</span>
                    <span className="type-style">Regular, 12</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* system-grid-rest */}
        </div>
        {/* /system-section-2 */}
      </div>
      {/* /system-section-inner */}
      <div className="system-section-logo">
        <div className="system-section-logo-title">Logo</div>
        <div
          className="system-section-logo-image"
          style={{
            backgroundImage: `url(${LogoMark})`,
          }}
        />
      </div>
      <div className="system-section-logo2">
      <div
          className="system-section-logo-image2"
          style={{
            backgroundImage: `url(${LogoMark2})`,
          }}
        />
      </div>
      <div className="system-section-mockup">
      <div
          className="system-section-mockup-img"
          style={{
            backgroundImage: `url(${Mockup})`,
          }}
        />
      </div>
    </section>
  );
}
