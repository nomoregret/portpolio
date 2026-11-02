import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>연락처</h2>
        <p className={styles.desc}>편하게 연락 주세요.</p>
        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.item__label}>Email</span>
            <span className={styles.item__value}>[이메일 주소 입력]</span>
          </div>
          <div className={styles.item}>
            <span className={styles.item__label}>연락처</span>
            <span className={styles.item__value}>[전화번호 입력]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
