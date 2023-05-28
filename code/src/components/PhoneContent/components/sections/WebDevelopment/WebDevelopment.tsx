import styles from "./WebDevelopment.module.scss";
import SectionHeader, { Themes } from "../SectionHeader";

const WebDevelopment = () => {
  return (
    <div className={`section ${styles["web-development-wrapper"]}`}>
      <SectionHeader
        title={<h2 className={styles.title}>Custom Solutions</h2>}
        subtitle='Custom solutions with eye-to-eye approach and constant feedback. Show your individuality through website interface and make changes thorugh the development process'
        theme={Themes.Dark}
      />
      <img
        className={styles.cover}
        src='/assets/images/web-dev.jpg'
        alt='laptop animation'
      />
    </div>
  );
};

export default WebDevelopment;
