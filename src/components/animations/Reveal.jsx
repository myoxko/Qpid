// src/components/animations/Reveal.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * 사용법
 * <Reveal type="right" delay={0.2}>
 *   <img src={...} alt="..." />
 * </Reveal>
 */
export default function Reveal({
  children,
  type = "up",       // 'up' | 'down' | 'left' | 'right' | 'fade'
  delay = 0,
  duration = 0.7,
  amount = 0.25,     // 화면에 이만큼 들어오면 트리거 (0~1)
  once = true,       // 한 번만 재생할지
  className,
  style,
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: amount, triggerOnce: once });

  useEffect(() => {
    if (inView) controls.start("show");
    else if (!once) controls.start("hidden");
  }, [inView, controls, once]);

  const variantsByType = {
    up:    { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
    down:  { hidden: { opacity: 0, y: -24 }, show: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
    fade:  { hidden: { opacity: 0 }, show: { opacity: 1 } },
  };

  const variants = variantsByType[type] ?? variantsByType.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
