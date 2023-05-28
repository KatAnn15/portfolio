import styles from "./Frame.module.scss";

const Frame = () => {
  return (
    <div id="frame" className={styles.frame}>
      <div className={`${styles.vertical} ${styles.line}`} />
      <div className={`${styles.horizontal} ${styles.line}`} />
    </div>
  );
};

export default Frame;
