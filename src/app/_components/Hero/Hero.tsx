import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>퍼블리싱 PL · 13년차</p>
        <h1 className={styles.title}>
          쇼핑몰부터 은행 시스템까지,
          <br />
          <span className={styles.title__accent}>13년째 화면을 완성</span>하고
          있습니다.
        </h1>
        <p className={styles.lead}>
          jQuery부터 React·TypeScript까지, 금융·통신·제조·유통·공공 영역의 6개
          기업에서 33개 프로젝트를 퍼블리싱했습니다. 최근에는 PL을 넘어
          팀장으로서 여러 프로젝트를 동시에 이끌고 있습니다.
        </p>
        <div className={styles.meta}>
          <span className={styles.meta__item}>퍼블리싱 PL · 팀장</span>
          <span className={styles.meta__item}>React · TypeScript</span>
          <span className={styles.meta__item}>프레임아웃 재직 중</span>
        </div>
        <div className={styles.actions}>
          <a href="#projects" className={styles["button--primary"]}>
            대표 프로젝트 보기
          </a>
          <a href="#career" className={styles["button--secondary"]}>
            전체 경력 보기
          </a>
        </div>
      </div>
    </section>
  );
}
