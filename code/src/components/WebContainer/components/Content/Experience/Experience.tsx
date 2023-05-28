import Timeline from "../../utils/Timeline";
import styles from "./Experience.module.scss";
import baseStyles from "../Content.module.scss";
import { cx } from "../../../../../utils/classConstructor";
import { setCursorText } from "../../../../../Redux/Slices/cursorSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../Redux/store";

const experienceTimelineData = [
  {
    year: "2022",
    label: "Wix.com",
    title: "FrontEnd Developer",
    description:
      "Maintaining existing Wix Editor features and creating new experiences for Wix users",
    icon: "wix",
  },
  {
    year: "2020",
    label: "Wix.com",
    title: "Velo Support Agent",
    description:
      "Consulting Wix users regarding Velo code, detecting and reporting issues with API, monitoring issues resolution status and updating users",
    icon: "wix",
  },
  {
    year: "2020",
    label: "Wix.com",
    title: "Customer Care Agent",
    description:
      "Taking care of our users by replying to their questions and concerns via online channels (chats and phone calls) and emails",
    icon: "wix",
  },
  {
    year: "2020",
    label: "Snov.io",
    title: "Customer Care trainee",
    description:
      "Supporting admin software tools for easier requests management, as well as analyzing and assiting users with their requests",
    icon: "snov",
  },
];

const Experience = () => {
  const { value: theme } = useSelector((state: RootState) => state.theme);
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
        [styles.wrapper]: true,
        [baseStyles["content-item"]]: true,
      })}
    >
      <h2
        onMouseEnter={() =>
          updateCursorText(
            "The last mentioned position is my current occupation. Prior to 2020 I worked in hospitality and teaching"
          )
        }
        onMouseLeave={() => updateCursorText(null)}
      >
        Coding Experience Timeline
      </h2>
      <hr />
      <Timeline
        data={experienceTimelineData}
        theme={theme === "light" ? "standard" : "dark"}
      />
    </div>
  );
};

export default Experience;
