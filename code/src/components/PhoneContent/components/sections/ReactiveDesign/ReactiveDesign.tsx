import styles from "./ReactiveDesign.module.scss";
import SectionHeader from "../SectionHeader";

const ReactiveDesign = () => {
  const renderLogo = (width: number, height: number) => (
    <img
      className={styles.logo}
      style={{ width: `${width}px`, height: `${height}px` }}
      src='/assets/images/react-logo.png'
      alt='website logo in the shape of a purple heart'
    />
  );
  return (
    <div className={`section ${styles["reactive-design-wrapper"]}`}>
      <SectionHeader
        title="Create reactive designs"
        renderLogo={renderLogo}
        subtitle="Tell us your ideas and we will implement it with the minimum effort and maximum agility"
      />
    </div>
  );
};

export default ReactiveDesign;
