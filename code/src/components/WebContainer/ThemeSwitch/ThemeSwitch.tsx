import { useDispatch, useSelector } from "react-redux";
import styles from "./ThemeSwitch.module.scss";
import { RootState } from "../../../Redux/store";
import { setTheme } from "../../../Redux/Slices/themeSlice";

const themeStyles = {
  light: {
    spanBg: "green",
    mainBg: "white",
    left: 0,
  },
  dark: { spanBg: "white", mainBg: "green", left: 50 },
};

const ThemeSwitch = () => {
  const { value: theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: themeStyles[theme].mainBg }}
      onClick={toggleTheme}
    >
      <span
        style={{
          backgroundColor: themeStyles[theme].spanBg,
          left: themeStyles[theme].left + "px",
        }}
      ></span>
    </div>
  );
};

export default ThemeSwitch;
