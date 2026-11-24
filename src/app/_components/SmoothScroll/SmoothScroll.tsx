"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import styles from "./SmoothScroll.module.scss";

// Locomotive Scroll v5 (Lenis 기반, 네이티브 스크롤 유지).
// [data-scroll] 요소에 is-inview 클래스를 붙이고, data-scroll-speed로 패럴랙스를 준다.
// prefers-reduced-motion 사용자는 layout.tsx의 인라인 스크립트가 has-scroll-motion을 붙이지 않으므로 초기화하지 않는다.
export default function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("has-scroll-motion")) return;

    const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

    const scroll = new LocomotiveScroll({
      // 요소가 화면 하단에서 15% 올라왔을 때 is-inview — 등장 장면이 눈에 보이도록
      triggerRootMargin: "0px 0px -15% 0px",
      lenisOptions: {
        anchors: { offset: -headerHeight },
      },
      scrollCallback: ({ progress }) => {
        root.style.setProperty("--scroll-progress", String(progress));
      },
    });

    return () => {
      scroll.destroy();
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return <div className={styles.progress} aria-hidden="true" />;
}
