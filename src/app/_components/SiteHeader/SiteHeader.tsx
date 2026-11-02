import styles from "./SiteHeader.module.scss";

const NAV_ITEMS = [
  { href: "#about", label: "소개" },
  { href: "#projects", label: "대표 프로젝트" },
  { href: "#career", label: "경력" },
  { href: "#contact", label: "연락처" },
];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          나영준
        </a>
        <nav className={styles.nav} aria-label="주요 섹션">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={styles.nav__link}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
