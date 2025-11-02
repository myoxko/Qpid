import React from "react";
import "../styles/sections/ServiceSection.scss";

// ServiceSection
// - 'service' 영역.
// - 이 섹션은 서비스 관련 컨텐츠가 들어갈 자리입니다.
// - 스타일, 정렬, 높이 조절은 ServiceSection.scss 쪽에서 할 수 있게 분리돼 있습니다.

export default function ServiceSection() {
  return (
    <div className="service-section-root">
      <div className="service-section-inner">
        <h2 className="service-title">SERVICE</h2>
        <p className="service-desc">
          Write content for service section here.
        </p>
      </div>
    </div>
  );
}
