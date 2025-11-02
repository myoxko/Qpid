import React from "react";
import "../styles/sections/SystemSection.scss";

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
    <div className="system-section-root">
      <div className="system-section-inner">
        <h2 className="system-title">System</h2>
        <p className="system-desc">
          Write content for system section here.
        </p>
      </div>
    </div>
  );
}
