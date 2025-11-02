# Qpid

협업용 기본 틀 (Light theme 버전).

## 구조

src/
├─ components/
│   └─ HeaderNav.jsx
├─ sections/
│   ├─ HomeSection.jsx
│   ├─ BackgroundSection.jsx
│   ├─ SystemSection.jsx
│   ├─ ServiceSection.jsx
│   └─ VideoSection.jsx
└─ styles/
    ├─ _reset.scss
    ├─ tokens.scss        ← 공통 컬러/폰트/레이아웃 토큰
    ├─ global.scss        ← 전역 레이아웃/배경
    ├─ HeaderNav.scss     ← GNB 스타일 (상단 고정 pill nav)
    └─ sections/
        ├─ HomeSection.scss
        ├─ BackgroundSection.scss
        ├─ SystemSection.scss
        ├─ ServiceSection.scss
        └─ VideoSection.scss

### 협업 규칙 제안
- 각자 맡은 섹션은 해당 JSX + styles/sections/의 동일한 이름 .scss만 주로 수정.
- 전역 토큰(`styles/tokens.scss`)은 브랜드 컬러, 폰트, spacing 값이 있어서
  이걸 바꾸면 전체가 바뀜 -> 서로 합의하고 수정.

### GNB (HeaderNav)
- 화면 상단에 고정, 가운데 정렬된 pill 형태 네비게이션 바.
- 배경은 화이트(약간 투명) + blur.
- 기본 텍스트 색: 블랙 계열.
- hover 시 오렌지(#FF7B00).
- active(현재 섹션)일 때 파란색(#3D72FF)과 underline bar 표시.

### 섹션 높이 조절
- `styles/sections/*Section.scss` 안의
  `.xxx-section-root`에서 `min-height`, `padding-top`, `padding-bottom` 수정하면 됨.
- 한 화면만 딱 채우고 싶으면 height:100vh 같이 직접 고정해도 가능.

## 실행 방법

```bash
npm install
npm run dev
```

Vite + React 환경입니다.
