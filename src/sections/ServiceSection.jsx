import React from 'react';
import '../styles/sections/ServiceSection.scss';

import PhoneMain from '../assets/images_jm/serviceSectionMain.png';
import BGflower1 from '../assets/images_jm/serviceSectionBG1.png';
import BGflower2 from '../assets/images_jm/serviceSectionBG2.png';
import BGflower3 from '../assets/images_jm/serviceSectionBG3.png';

/* ⬇️ 온보딩 4장 반드시 import */
import Onb1 from '../assets/images_jm/onboarding_1.png';
import Onb2 from '../assets/images_jm/onboarding_2.png';
import Onb3 from '../assets/images_jm/onboarding_3.png';
import Onb4 from '../assets/images_jm/onboarding_4.png';
import RibbonPNG from '../assets/images_jm/ribbon1.png';

import HomeMain from '../assets/images_jm/home_main.png';
import Home01 from '../assets/images_jm/home_01.png';
import Home02 from '../assets/images_jm/home_02.png';

// 상단 폰(질문 확인 화면)
import FlowTop from '../assets/images_jm/flow_top.png';

// 하단 3장
import Flow04 from '../assets/images_jm/flow_04.png';
import Flow05 from '../assets/images_jm/flow_05.png';
import Flow06 from '../assets/images_jm/flow_06.png';

// 상단 import들 근처에 추가
import ProfHome from '../assets/images_jm/prof_home.png'; // 큰 폰
import ProfList from '../assets/images_jm/prof_list.png'; // 가운데 작은 폰
import ProfChat from '../assets/images_jm/prof_chat.png'; // 오른쪽 작은 폰

// 카드 씬 카드
import BlueCardBG from '../assets/images_jm/card-scene-card1.png'; // 왼쪽 파랑 편지
import OrangeCardBG from '../assets/images_jm/card-scene-card2.png'; // 오른쪽 주황 편지

// 커뮤니티 씬 카드
import PhoneCommLeft from '../assets/images_jm/community_phone_left.png';
import PhoneCommRight from '../assets/images_jm/community_phone_right.png';
import CommunityWaveBG from '../assets/images_jm/community_wave_bg.png';

// 채팅 섹션션
import ChatPhone from '../assets/images_jm/chat_phone.png';
import PaperPlane from '../assets/images_jm/chat_paper_plane.png';
import ChatCurve from '../assets/images_jm/chat_curve.png';

/* ===== MY PAGE SECTION ===== */
import MyPageStudent from '../assets/images_jm/mypage_student.png';
import MyPageProfessor from '../assets/images_jm/mypage_professor.png';
import CardA from '../assets/images_jm/mypage_card_a.png';
import CardB from '../assets/images_jm/mypage_card_b.png';

export default function ServiceSection() {
  return (
    <section className="service-section-root">
      <div className="service-section-inner">
        <div className="service-pill">OUR SERVICE</div>

        {/* 배경 꽃 레이어 */}
        <div className="bg-flowers">
          <div
            className="service-section-flower flower--1"
            style={{ backgroundImage: `url(${BGflower1})` }}
          />
          <div
            className="service-section-flower flower--2"
            style={{ backgroundImage: `url(${BGflower2})` }}
          />
          <div
            className="service-section-flower flower--3"
            style={{ backgroundImage: `url(${BGflower3})` }}
          />
        </div>

        <h2 className="service-title">
          지금부터 <span className="accent">큐피드</span>와 함께
          <br />
          지식의 폭을 넓혀볼까요?
        </h2>

        <div className="mockup-wrap">
          <div
            className="service-section-phone-main"
            style={{ backgroundImage: `url(${PhoneMain})` }}
          />
          <div className="bg-circle" />
        </div>

        {/* ===== 온보딩 섹션 ===== */}
        <section className="onboarding-section">
          <div className="onboarding-head">
            <div className="all-pill">ONBOARDING</div>
            <h3 className="onboarding-title">
              지식이 연결될 때, 배움이 깊어집니다.
            </h3>
            <p className="onboarding-desc">
              큐피드는 학생의 질문과 교수의 지식을 연결하여 교실 밖에서도
              지속되는 지적 대화를 만듭니다.
              <br />
              단순한 답변이 아닌, 생각이 확장되는 순간. 큐피드에서 그 배움의
              연결이 시작됩니다.
            </p>
          </div>

          <div className="onboarding-steps">
            <div className="step-labels">
              <div className="step-label">온보딩</div>
              <div className="step-label">로그인 화면</div>
              <div className="step-label">회원가입 화면</div>
              <div className="step-label">시작 화면</div>
            </div>

            <div className="steps-progress">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <div className="onboarding-phones-wrap">
              <div className="ribbon-under-phones">
                <img src={RibbonPNG} alt="장식용 리본" />
              </div>

              <img src={Onb1} alt="온보딩" className="onboarding-phone" />
              <img src={Onb2} alt="로그인 화면" className="onboarding-phone" />
              <img
                src={Onb3}
                alt="회원가입 화면"
                className="onboarding-phone"
              />
              <img src={Onb4} alt="시작 화면" className="onboarding-phone" />
            </div>
          </div>
        </section>
        {/* ===== /온보딩 섹션 ===== */}

        <section className="service-home-section">
          <div className="service-home-head">
            <div className="service-home-pill">HOME</div>
            <h3 className="service-home-title">학습과 연결의 시작</h3>
            <p className="service-home-desc">
              학습과 연결의 시작은 여기서부터. 큐피드는 학생이 궁금한 점을
              손쉽게 질문하고,
              <br />
              교수와의 대화를 통해 지식을 확장할 수 있는 공간입니다. 나의 전공을
              넘어
              <br />
              새로운 배움과 연결을 경험해보세요.
            </p>
          </div>

          {/* ★ 바깥 그리드 없이 카드 하나만 */}
          <div className="service-home-card">
            {/* ★ 카드 내부 2컬럼 */}
            <div className="service-home-card-grid">
              {/* 왼쪽: 큰 폰 */}
              <div className="service-home-card-left">
                <div
                  className="service-home-phone-main"
                  style={{ backgroundImage: `url(${HomeMain})` }}
                />
              </div>

              {/* 오른쪽: 텍스트 + 작은 폰 + 캡션 */}
              <div className="service-home-card-right">
                <div className="service-home-breadcrumb">Home · 학생</div>
                <h4 className="service-home-card-title">
                  학생은 무엇이든 궁금한 점이 있다면
                  <br />
                  교수님께 질문을 보내보세요.
                </h4>
                <p className="service-home-card-desc">
                  질문을 남기면, 교수님이 직접 답변을 통해 소통해 주십니다.
                  <br />
                  이를 통해 실시간 피드백을 받고, 나에게 맞는 학습 지원을 받을
                  수 있습니다.
                </p>

                <div className="service-home-phones-inline">
                  <div
                    className="service-home-phone"
                    style={{ backgroundImage: `url(${Home01})` }}
                  />
                  <div
                    className="service-home-phone"
                    style={{ backgroundImage: `url(${Home02})` }}
                  />
                </div>

                <div className="service-home-captions">
                  <div className="service-home-cap">
                    어떤 분야든 괜찮아요. 궁금한 점이나 고민을 자유롭게
                    적어주세요.
                  </div>
                  <div className="service-home-cap">
                    파일이나 이미지를 첨부하면 교수님이 더 깊이 이해할 수
                    있어요.
                  </div>
                </div>
              </div>
            </div>
            {/* ===== Home 카드 내부: 흐름 플로우 ===== */}
            <div className="service-flow">
              {/* 위: 단일 폰 + 말풍선 */}
              <div className="flow-top">
                <div className="flow-top-phone">
                  <img
                    src={FlowTop}
                    alt="질문 확인 화면"
                    className="flow-phone flow-phone--large"
                  />
                </div>

                <div className="flow-callout">
                  작성한 내용을 다시 한 번 확인해주세요.
                  <br />
                  촬영이 필요나 첨부가 더 필요하다면
                  <br />더 정확한 매칭이 이루어집니다.
                </div>
              </div>
              {/* 구분 점선 */}
              <div className="flow-sep" />

              {/* 아래: 3개 폰 + 점선 라인 + 캡션 */}
              <div className="flow-bottom">
                <div className="flow-item">
                  <div className="flow-phone-wrap">
                    <img
                      src={Flow04}
                      alt="AI가 적합한 교수님 탐색"
                      className="flow-phone"
                    />
                  </div>
                  <p className="flow-cap">
                    AI가 질문을 분석하고 가장 잘 맞는
                    <br />
                    교수님을 찾아드리는 중입니다.
                  </p>
                </div>

                <div className="flow-item">
                  <div className="flow-phone-wrap">
                    <img src={Flow05} alt="교수 선택" className="flow-phone" />
                  </div>
                  <p className="flow-cap">
                    추천된 교수님의 프로필과 평점을 보고
                    <br />
                    원하는 교수님을 선택하세요.
                  </p>
                </div>

                <div className="flow-item">
                  <div className="flow-phone-wrap">
                    <img
                      src={Flow06}
                      alt="질문 전송 완료"
                      className="flow-phone"
                    />
                  </div>
                  <p className="flow-cap">
                    질문이 전송되었습니다. 교수님의
                    <br />
                    답변이 도착하면 알려드릴게요.
                  </p>
                </div>
              </div>
              <div className="flow-sep2" />
            </div>
            {/* ===== /흐름 플로우 ===== */}
          </div>
        </section>

        {/* ===== HOME · 교수 섹션 ===== */}
        <section className="service-home-prof-section">
          <div className="prof-head">
            <div className="prof-breadcrumb">Home · 교수</div>
            <h3 className="prof-title">
              교수는 학생들의 질문을 확인하고
              <br />
              질문에 답할 수 있어요.
            </h3>
            <p className="prof-desc">
              학생들이 남긴 질문을 확인하고, 교수는 직접 답변을 통해 소통할 수
              있습니다.
              <br />
              이를 통해 실시간 피드백과 개별 맞춤형 학습 지원이 가능합니다.
            </p>
          </div>

          <div className="prof-phones-wrap prof-grid">
            {/* 왼쪽: 큰 폰 1개 */}
            <div className="prof-col-left">
              <img
                src={ProfHome}
                alt="교수 홈"
                className="prof-phone prof-phone--big"
              />
            </div>

            {/* 오른쪽: 점선 + 작은 폰 2개 */}
            <div className="prof-col-right">
              <div className="prof-progress-line">
                <span className="line-dot"></span>
              </div>

              <div className="prof-right-phones">
                <img
                  src={ProfList}
                  alt="받은 질문 목록"
                  className="prof-phone"
                />
                <img src={ProfChat} alt="채팅 화면" className="prof-phone" />
              </div>
            </div>
          </div>
        </section>
        {/* ===== 카드 장면 섹션 ===== */}
        <section className="cards-scene">
          <div className="cards-scene-inner">
            {/* 뒤쪽 큰 타원 */}
            <div className="scene-ovals"></div>

            {/* 색종이(도트)들 */}
            <div className="confetti">
              <span className="dot d1"></span>
              <span className="dot d2"></span>
              <span className="dot d3"></span>
              <span className="dot d4"></span>
              <span className="dot d5"></span>
              <span className="dot d6"></span>
              <span className="dot d7"></span>
              <span className="dot d8"></span>
              <span className="dot d8"></span>
              <span className="dot d9"></span>
              <span className="dot d10"></span>
              <span className="dot d11"></span>
            </div>

            {/* 블루 카드 */}
            <div className="card-blue-orange">
              <div
                className="card card--blue"
                style={{ backgroundImage: `url(${BlueCardBG})` }}
              >
                <div className="card-badge">학생들의 질문을 확인해 보세요!</div>
                <div className="card-num">12</div>
                <div className="card-title">오늘의 질문</div>
              </div>

              {/* 오렌지 카드 */}
              <div
                className="card card--orange"
                style={{ backgroundImage: `url(${OrangeCardBG})` }}
              >
                <div className="card-title-sm">오늘의 질문은 무엇인가요?</div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-community-section">
          <div
            className="service-community-bg"
            style={{ backgroundImage: `url(${CommunityWaveBG})` }}
          />

          <div className="service-community-inner">
            {/* 왼쪽: 휴대폰 2장 */}
            <div className="comm-phones">
              <img
                src={PhoneCommLeft}
                alt="커뮤니티 홈 화면"
                className="comm-phone comm-phone--left"
              />
              <img
                src={PhoneCommRight}
                alt="커뮤니티 피드 화면"
                className="comm-phone comm-phone--right"
              />
            </div>

            {/* 오른쪽: 텍스트 */}
            <div className="comm-copy">
              <div className="comm-pill">COMMUNITY · 공동</div>
              <h3 className="comm-title">
                교수와 학생 모두
                <br />
                함께 배우고, 함께 나누는 공간
              </h3>
              <p className="comm-desc">
                커뮤니티는 교수와 학생 모두가 참여할 수 있는 개방형 소통
                공간입니다.
                <br />
                학생들은 학습에 대한 질문이나 의견을 자유롭게 공유하고, 교수는
                <br />
                실시간 피드백과 개별 맞춤형 학습 지원이 가능합니다. 이를 통해
                전공 간
                <br />
                지식 교류와 실질적인 학습 네트워크가 형성됩니다.
              </p>
            </div>
          </div>
        </section>

        <section className="service-chat-section">
          <div className="service-chat-inner">
            {/* 왼쪽: 휴대폰 이미지 */}
            <div className="chat-left">
              <img
                src={ChatPhone}
                alt="채팅 목록 화면"
                className="chat-phone"
              />
            </div>

            {/* 오른쪽: 카피 영역 */}
            <div className="chat-right">
              <div className="chat-pill">CHAT · 공통</div>
              <h3 className="chat-title">지식 교류의 장</h3>
              <p className="chat-desc">
                채팅 화면은 학생과 교수 간의 즉각적인 소통을 가능하게 하는
                공간입니다.
                <br />
                질문을 올리고, 답변을 주고받으며 실시간 피드백을 확인할 수 있어
                학습의
                <br />
                흐름을 놓치지 않습니다. 큐피드를 통해 쌓이는 대화는 단순한
                메시지를 넘어,
                <br />
                개인의 학습 기록과 지식 확장으로 이어지며, 서로의 전문성과
                경험을
                <br />
                연결하는 다리 역할을 합니다.
              </p>
            </div>
            <div className="chat-circle">원</div>
          </div>
          <div className="chat-bg-wrap">
            {/* 점선 곡선 배경 */}
            <div
              className="chat-curve"
              style={{ backgroundImage: `url(${ChatCurve})` }}
            />
            {/* 종이비행기 이미지 (오른쪽 하단) */}
            <img src={PaperPlane} alt="종이비행기" className="chat-plane" />
          </div>
        </section>

        {/*======= MY PAGE ========= */}
        <section className="service-mypage-section">
          <div className="service-mypage-inner">
            {/* 상단 타이틀 */}
            <header className="mypage-head">
              <div className="mypage-pill">MY PAGE</div>
              <h3 className="mypage-title">지식과 성장의 발자취</h3>
              <p className="mypage-desc">
                마이페이지는 여러분의 학습과 소통 기록을 한눈에 확인할 수 있는
                공간입니다. 질문과 답변,
                <br />
                참여 내역을 통해 자신의 학습 여정을 돌아보고, 교수와 학생 모두가
                남긴 경험과 성장을 추적할 수 있습니다.
                <br />
                큐피드에서의 활동이 쌓여 지식의 흐름과 개인의 발전을 시각적으로
                보여주는 공간입니다.
              </p>
            </header>

            {/* 가운데 옅은 블루 하이라이트 밴드 */}
            <div className="mypage-band" />

            {/* ====== 블록 A: 학생 ====== */}
            <section className="mypage-row mypage-row--student">
              {/* 폰 래퍼: width/offset/rotate를 CSS 변수로 제어 */}
              <div
                className="mypage-phone"
                style={{
                  // 필요할 때 값만 바꿔서 쓰면 됨
                  '--phone-w': '460px',
                  '--phone-x': '-12px',
                  '--phone-y': '-8px',
                  '--phone-rotate': '0deg',
                  '--phone-z': '2',
                }}
              >
                <img src={MyPageStudent} alt="마이페이지(학생)" />
              </div>

              <div className="mypage-right">
                <div className="mypage-subpill">My Page · 학생</div>
                <h4 className="mypage-subtitle">
                  나의 질문과 활동을 한눈에 확인해보세요!
                </h4>
                <p className="mypage-right-desc">
                  내가 작성한 질문과 받은 답변, 획득한 뱃지까지 한곳에서 확인할
                  수 있어요.
                  <br />
                  교수님과의 소통 내역도 관리하고, 활동을 꾸준히 이어가 보세요.
                </p>

                {/* 리스트 카드 → 이미지로 교체 */}
                <div className="mypage-cards">
                  <img
                    src={CardA}
                    alt="내 활동 요약"
                    className="mypage-card-img"
                  />
                </div>
              </div>
            </section>

            {/* ====== 블록 B: 교수 ====== */}
            <section className="mypage-row mypage-row--prof">
              <div
                className="mypage-phone"
              >
                <img src={MyPageProfessor} alt="마이페이지(교수)" />
              </div>

              <div className="mypage-right">
                <div className="mypage-subpill">My Page · 교수</div>
                <h4 className="mypage-subtitle">
                  나의 소통과 활동을 한눈에 확인해보세요!
                </h4>
                <p className="mypage-right-desc">
                  학생들에게 답변한 질문, 받은 추천과 배지, 팔로워 현황까지
                  <br />
                  한곳에서 확인할 수 있습니다. 지식 공유의 발자취를 기록하고,
                  <br />
                  학생들과의 소통을 꾸준히 이어가보세요.
                </p>

                {/* 필요 시 교수용 카드 이미지들 */}
                <div className="mypage-cards">
                  <img
                    src={CardB}
                    alt="질문 관리"
                    className="mypage-card-img"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}
