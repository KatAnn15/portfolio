import styles from "./SkillItem.module.scss";

const SkillItem = ({
  title,
  tags,
  image,
  background,
  back,
  delay,
}: {
  title: string;
  tags: string[];
  image: string;
  background: string;
  back: string;
  delay: number;
}) => {
  return (
    <div className={styles["skill-item"]}>
      <div
        className={`${styles.front} ${styles.side}`}
        style={
          {
            backgroundColor: background,
            "--delay": `${delay}s`,
          } as React.CSSProperties
        }
      >
        <iframe
          className={styles.frame}
          src={`https://lottie.host/?file=${back}.json`}
          title='lottie animation'
        />
      </div>
      <div
        className={`${styles.back} ${styles.side}`}
        style={
          {
            backgroundColor: background,
            "--delay": `${delay}s`,
          } as React.CSSProperties
        }
      >
        <img
          className={styles.image}
          src={`/assets/images/${image}`}
          alt='background'
        />
        <p className={styles.title}>{title}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <p className={styles.tag} key={index + ""}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
