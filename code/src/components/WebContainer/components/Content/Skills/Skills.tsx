import { useDispatch } from "react-redux";
import { setCursorText } from "../../../../../Redux/Slices/cursorSlice";
import { cx } from "../../../../../utils/classConstructor";
import styles from "../Content.module.scss";
import "./Skills.scss";

const skills: { label: string; icon: string }[] = [
  { label: "React", icon: "react" },
  { label: "TypeScript", icon: "ts" },
  { label: "JavaScript", icon: "js" },
  { label: "Velo", icon: "velo" },
  { label: "Wix", icon: "wix" },
  { label: "HTML", icon: "html" },
  { label: "Sass", icon: "sass" },
  { label: "Firebase", icon: "firebase" },
  { label: "REST API", icon: "rest" },
  { label: "Git", icon: "git" },
  { label: "Node.js", icon: "node" },
  { label: "GIMP", icon: "gimp" },
  { label: "Linux", icon: "linux" },
  { label: "TDD", icon: "tdd" },
];

const Skills = () => {
  const dispatch = useDispatch();

  const updateCursorText = (text: string | null) => {
    if (!text) {
      setTimeout(() => {
        dispatch(setCursorText(null));
      }, 500);
      return;
    }
    dispatch(setCursorText(text));
  };

  const SkillCard = ({ label, icon }: { label: string; icon: string }) => (
    <div className='skill-item'>
      <img src={`/assets/images/skills/${icon}.png`} alt='' />
      <p>{label}</p>
    </div>
  );

  return (
    <div
      className={cx({ "skills-wrapper": true, [styles["content-item"]]: true })}
    >
      <h2>Education And Skills</h2>
      <div className='skills-container'>
        {skills.map((skill, i) => (
          <SkillCard {...skill} key={String(i)} />
        ))}
      </div>
      <div
        className='resume-container'
        onMouseEnter={() =>
          updateCursorText(
            "Click the green button to download my resume with more details!"
          )
        }
        onMouseLeave={() => updateCursorText(null)}
      >
        <button onMouseEnter={() => dispatch(setCursorText(null))}>
          <a
            href='/assets/files/Kateryna_Annienkova_-_Frontend_Developer.pdf'
            download
          >
            Click to Download My Resume and See More Info!
          </a>
        </button>
      </div>
    </div>
  );
};

export default Skills;
