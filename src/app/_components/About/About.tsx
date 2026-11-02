import styles from "./About.module.scss";

const STRENGTHS = [
  {
    title: "다양한 산업군 경험",
    desc: "금융(국민은행·전북은행), 제조·유통(포스코·캐논·조폐공사·롯데월드), 대기업 그룹사(삼성·동아그룹) 등 11개 기업에서 프로젝트를 수행했습니다.",
  },
  {
    title: "레거시 → 모던 스택 전환",
    desc: "jQuery 기반 퍼블리싱으로 시작해, 국민은행 프로젝트를 계기로 React·TypeScript 기반 작업으로 전환했습니다.",
  },
  {
    title: "PL에서 팀장으로",
    desc: "퍼블리싱PL로 다수 프로젝트를 리딩했고, 동아홀딩스 건에서는 팀장으로서 5개 프로젝트를 동시에 관리했습니다.",
  },
  {
    title: "컨벤션 · 품질 관리",
    desc: "롯데월드 등 장기 프로젝트에서 코드 컨벤션과 컴포넌트 구조를 수립하고, 팀원 코드리뷰를 주도했습니다.",
  },
];

const SKILLS = [
  "HTML",
  "CSS / SCSS",
  "JavaScript",
  "jQuery",
  "React",
  "TypeScript",
  "Vue",
  "Ant Design",
  "Gulp",
  "웹접근성 (WCAG / KWCAG)",
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>핵심 역량</h2>
        <div className={styles.grid}>
          {STRENGTHS.map((item) => (
            <div key={item.title} className={styles.card}>
              <p className={styles.card__title}>{item.title}</p>
              <p className={styles.card__desc}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.skills}>
          <p className={styles.skills__label}>기술 스택</p>
          <ul className={styles.skills__list}>
            {SKILLS.map((skill) => (
              <li key={skill} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
