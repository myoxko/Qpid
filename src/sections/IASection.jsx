import React from "react";
import "../styles/sections/IASection.scss";

import ia_diagram from "../assets/images_ms/ia_diagram.svg";
import ia_userflow from "../assets/images_ms/ia_userflow.svg";

export default function IASection() {

  return (
    <div className="ia-section-root">
      <div className="ia-section-inner">
          <h2 className="ia-title">MENU STRUCTURE DIAGRAM</h2>
        <img
            src={ia_diagram}
            alt="정보구조도"
            className="ia_diagram"
        />

          <h2 className="ia-title">USER FLOW</h2>
          <img
            src={ia_userflow}
            alt="유저 플로우"
            className="ia_userflow"
        />
      </div>
    </div>
  );
}
