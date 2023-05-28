import { cx } from "../../../../../utils/classConstructor";
import "./About.scss";
import Services from "./Services/Services";
import styles from "../Content.module.scss";
import { useDispatch } from "react-redux";
import { setCursorText } from "../../../../../Redux/Slices/cursorSlice";

const personalInfo = {
  "First name": "Kateryna",
  "Last name": "Annienkova",
  Residence: "Ukraine, Rivne oblast, Dubno town",
  Availability: "Remote, Freelance",
  "Main Email": "katherineviegh@gmail.com",
  "Secondary Email": "callondemand.wix@gmail.com",
  Phone: "+38 (095) 167 26 19",
};

const About = () => {
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

  return (
    <div
      className={cx({
        "about-wrapper": true,
        [styles["content-item"]]: true,
      })}
    >
      <h2>About Me</h2>
      <hr />
      <div className='about-content'>
        <div className='about-info'>
          <h3>Front End Web Development</h3>
          <p>
            Hi, I am Kateryna, a frontend developer with 3 years working in IT,
            2 years in development and 1 year of commercial web development.
          </p>
          <p>
            I am passionate about working with interesting projects that help me
            and my clients change the world for the best.
          </p>
          <p>
            Looking forward to joining a progressive team and bring innovation
            to the established project or creating a new tool that would assist
            the society!
          </p>
        </div>
        <div className='about-personal'>
          {Object.entries(personalInfo).map(([key, value]) => (
            <p key={key}>
              {key}: <span>{value}</span>
            </p>
          ))}
        </div>
        <div
          className='about-services'
          onMouseEnter={() =>
            updateCursorText(
              "These are the services I can provide for you, dear partner. Surely, this list is incomplete and I can learn new things upon demand, depending on the project needs"
            )
          }
          onMouseLeave={() => updateCursorText(null)}
        >
          <h3>Services</h3>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default About;
