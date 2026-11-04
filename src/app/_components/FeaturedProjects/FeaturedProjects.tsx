import { featuredProjects, timeline } from "@/data/career";
import styles from "./FeaturedProjects.module.scss";

export default function FeaturedProjects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>대표 프로젝트</h2>
        <p className={styles.subheading}>
          {timeline.length}개 프로젝트 중 역할과 맥락이 잘 드러나는{" "}
          {featuredProjects.length}개를 골랐습니다.
        </p>
        <div className={styles.list}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.card__head}>
                <h3 className={styles.card__title}>{project.title}</h3>
                <span className={styles.card__period}>{project.period}</span>
              </div>

              <div className={styles.card__meta}>
                <span className={styles.badge}>{project.role}</span>
                <span className={styles["badge--neutral"]}>
                  {project.company}
                </span>
                <span className={styles["badge--neutral"]}>
                  {project.teamSize}
                </span>
                <span className={styles["badge--neutral"]}>
                  {project.scope}
                </span>
              </div>

              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.tech__item}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.block}>
                <p className={styles.block__label}>담당 업무</p>
                <div className={styles.block__list}>
                  {project.duties.map((d) => (
                    <p key={d} className={styles.block__item}>
                      {d}
                    </p>
                  ))}
                </div>
              </div>

              {project.troubleshooting.length > 0 && (
                <div className={styles.block}>
                  <p className={styles.block__label}>트러블슈팅</p>
                  <div className={styles.block__list}>
                    {project.troubleshooting.map((t) => (
                      <p key={t} className={styles.block__item}>
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {project.achievements.length > 0 && (
                <div className={styles.block}>
                  <p className={styles.block__label}>성과</p>
                  <div className={styles.block__list}>
                    {project.achievements.map((a) => (
                      <p key={a} className={styles.block__item}>
                        {a}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  사이트 보기 →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
