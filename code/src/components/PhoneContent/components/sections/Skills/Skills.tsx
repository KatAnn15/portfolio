import styles from "./Skills.module.scss";
import skills from "./skills.json";
import SkillItem from "./SkillItem/SkillItem";

const Skills = () => {
  return (
    <div className={styles["skills-wrapper"]}>
      <div className={styles.repeater}>
        {skills.map((skill, index) => (
          <SkillItem
            {...{ ...skill, delay: index % 2 === 0 ? 2.5 : 3 }}
            key={index + ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
