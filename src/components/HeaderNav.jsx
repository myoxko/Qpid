import React from "react";
import "../styles/HeaderNav.scss";

export default function HeaderNav({ activeSection, onSelect }) {
  const navItems = [
    { key: "home", label: "Home" },
    { key: "background", label: "Background" },
    { key: "system", label: "System" },
    { key: "service", label: "Service" },
    { key: "video", label: "Video" },
  ];

  return (
    <header className="gnb">
      <div className="gnb-inner">
        <div className="logo">Qpid</div>
        <nav className="gnb-links">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={
                "gnb-link" +
                (activeSection === item.key ? " is-active" : "")
              }
              onClick={() => onSelect(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
