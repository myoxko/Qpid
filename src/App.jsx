import React, { useRef, useEffect, useState, useCallback } from "react";
import "./styles/app.scss";

import HeaderNav from "./components/HeaderNav.jsx";

import HomeSection from "./sections/HomeSection.jsx";
import BackgroundSection from "./sections/BackgroundSection.jsx";
import GoalSection from "./sections/GoalSection.jsx";
import InsightSection from "./sections/InsightSection.jsx";
import PersonaSection from "./sections/PersonaSection.jsx"
import IASection from "./sections/IASection.jsx"
import SystemSection from "./sections/SystemSection.jsx";
import ServiceSection from "./sections/ServiceSection.jsx";
import VideoSection from "./sections/VideoSection.jsx";

export default function App() {
  // refs for scrolling / highlighting
  const homeRef = useRef(null);
  const backgroundRef = useRef(null);
  const goalRef = useRef(null);
  const insightRef = useRef(null);
  const personaRef = useRef(null);
  const systemRef = useRef(null);
  const iaRef = useRef(null);
  const serviceRef = useRef(null);
  const videoRef = useRef(null);

  // track what section is currently in view
  const [activeSection, setActiveSection] = useState("home");

  // smooth scroll to target section
  const scrollToSection = useCallback((ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  // when GNB button is clicked
  const handleSelect = useCallback(
    (key) => {
      const map = {
        home: homeRef,
        background: backgroundRef,
        system: systemRef,
        service: serviceRef,
        video: videoRef,
      };
      scrollToSection(map[key]);
    },
    [scrollToSection]
  );

  // watch which section is currently most visible -> highlight in nav
  useEffect(() => {
    const list = [
      { key: "home", ref: homeRef },
      { key: "background", ref: backgroundRef },
      { key: "system", ref: systemRef },
      { key: "service", ref: serviceRef },
      { key: "video", ref: videoRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with biggest intersection ratio
        let maxRatio = 0;
        let visibleKey = activeSection;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleKey = entry.target.getAttribute("data-section-key");
          }
        });
        if (visibleKey && visibleKey !== activeSection) {
          setActiveSection(visibleKey);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: [0.25, 0.5, 0.75],
      }
    );

    list.forEach(({ key, ref }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section-key", key);
        observer.observe(ref.current);
      }
    });

    return () => {
      list.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      observer.disconnect();
    };
  }, [activeSection]);

  return (
    <div className="app-shell">
      <HeaderNav activeSection={activeSection} onSelect={handleSelect} />

      <main className="page-main">
        {/* HOME */}
        <section ref={homeRef} className="section-wrapper section-home">
          <HomeSection />
        </section>

        {/* BACKGROUND */}
        <section
          ref={backgroundRef}
          className="section-wrapper section-background"
        >
          <BackgroundSection />
        </section>

        {/* GOAL */}
        <section
          ref={goalRef}
          className="section-wrapper section-background"
        >
          <GoalSection />
        </section>

        {/* INSIGHT */}
        <section
          ref={insightRef}
          className="section-wrapper section-background"
        >
          <InsightSection />
        </section>

        {/* PERSONA */}
        <section
          ref={personaRef}
          className="section-wrapper section-background"
        >
          <PersonaSection />
        </section>

        {/* IA */}
        <section
          ref={iaRef}
          className="section-wrapper section-background"
        >
          <IASection />
        </section>

        {/* SYSTEM */}
        <section ref={systemRef} className="section-wrapper section-system">
          <SystemSection />
        </section>

        {/* SERVICE */}
        <section ref={serviceRef} className="section-wrapper section-service">
          <ServiceSection />
        </section>

        {/* VIDEO */}
        <section ref={videoRef} className="section-wrapper section-video">
          <VideoSection />
        </section>
      </main>
    </div>
  );
}
