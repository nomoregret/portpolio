import { timeline, type TimelineProject } from "@/data/career";
import styles from "./CareerTimeline.module.scss";

function groupByYear(projects: TimelineProject[]) {
  const groups: { year: string; items: TimelineProject[] }[] = [];

  for (const project of projects) {
    const year = project.period.slice(0, 4);
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && lastGroup.year === year) {
      lastGroup.items.push(project);
    } else {
      groups.push({ year, items: [project] });
    }
  }

  return groups;
}

export default function CareerTimeline() {
  const groups = groupByYear(timeline);
  const companyCount = new Set(timeline.map((project) => project.company)).size;
  const startYear = timeline[timeline.length - 1]?.period.slice(0, 4);

  return (
    <section id="career" className={styles.section}>
      <div className={styles.inner}>
        <div data-scroll data-reveal>
          <h2 className={styles.heading}>전체 경력</h2>
          <p className={styles.subheading}>
          {startYear}년부터 지금까지, {companyCount}개 회사에서 진행한{" "}
          {timeline.length}개 프로젝트입니다.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.year} className={styles.group} data-scroll>
            <p className={styles.group__year}>{group.year}</p>
            {group.items.map((project, index) => (
              <div
                key={project.id}
                className={styles.row}
                data-scroll
                data-reveal="left"
                style={
                  { "--reveal-delay": `${index * 0.06}s` } as React.CSSProperties
                }
              >
                <div className={styles.row__main}>
                  <p className={styles.row__title}>{project.title}</p>
                  <p className={styles.row__sub}>
                    {project.company} · {project.role} · {project.tech.join(", ")}
                  </p>
                </div>
                <span className={styles.row__period}>{project.period}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
