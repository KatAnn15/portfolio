import React, { ReactElement } from "react";
import styles from "./SectionHeader.module.scss";

export enum Themes {
  Dark = "dark",
  Light = "light",
}

const SectionHeader = ({
  title,
  subtitle,
  renderLogo,
  theme,
}: {
  title: string | ReactElement;
  subtitle?: string;
  renderLogo?: (width: number, height: number) => ReactElement;
  theme?: Themes;
}) => {
  return (
    <div
      className={styles["section-header-wrapper"]}
      style={{
        color: theme === Themes.Dark ? "#cccdce" : "rgb(53, 44, 44)",
      }}
    >
      {typeof title === "string" && <h2 className={styles.title}>{title}</h2>}
      {typeof title === "object" && title}
      <hr
        className={styles.line}
        style={{
          color: theme === Themes.Dark ? "#cccdce" : "rgba(37, 35, 35, 0.281)",
        }}
      />
      {renderLogo && renderLogo(58, 50)}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
