import styles from "./SmartDevelopment.module.scss";
import SectionHeader from "../SectionHeader";

const SmartDevelopment = () => {
  const renderLogo = (width: number, height: number) => (
    <img
      className={styles.logo}
      style={{ width: `${width}px`, height: `${height}px` }}
      src='/assets/images/smart.jpeg'
      alt='smart development logo'
    />
  );
  return (
    <div className={`section ${styles["smart-development-wrapper"]}`}>
      <SectionHeader
        title={<h2 className={styles.title}>Smart Development</h2>}
        renderLogo={renderLogo}
        subtitle="We use innovative development approaches with the latest most optimized software. Maintain code easily!"
      />
    </div>
  );
};

export default SmartDevelopment;
