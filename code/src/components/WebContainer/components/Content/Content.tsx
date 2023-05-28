import Header from "../../Header/Header";
import Home from "./Home/Home";
import styles from "./Content.module.scss";
import Menu from "./Menu/Menu";
import ProfileCard from "./ProfileCard/ProfileCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Cursor from "../Cursor/Cursor";
import { CSSProperties, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const themeStyles = {
  light: {
    "--web-color": "white",
    "--web-bg-color": "rgba(0, 0, 0, 0.788)",
    "--web-nav-color": "#013220",
    "--web-nav-bg-color": "white",
    "--web-secondary-color": "rgb(221, 221, 221)",
  },
  dark: {
    "--web-color": "#013220",
    "--web-bg-color": "white",
    "--web-nav-color": "white",
    "--web-nav-bg-color": "rgba(0, 0, 0, 0.788)",
    "--web-secondary-color": "#5A5A5A",
  },
};

const Content = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const { value } = useSelector((state: RootState) => state.activeTab);
  const { value: theme } = useSelector((state: RootState) => state.theme);

  const setSearchParams = useSearchParams()[1];

  const getSiteColors = useCallback(() => {
    return themeStyles[theme] as CSSProperties;
  }, [theme]);

  useEffect(() => {
    if (value === "home") {
      setSearchParams(undefined);
    } else {
      setSearchParams({ tab: value });
    }
  }, [value, setSearchParams]);

  const updateCursorPos = ({
    clientX,
    clientY,
  }: {
    clientX: number;
    clientY: number;
  }) => {
    setPos({ x: clientX, y: clientY });
  };

  const { value: activeTab } = useSelector(
    (state: RootState) => state.activeTab
  );
  return (
    <div
      className={styles.wrapper}
      onMouseMove={updateCursorPos}
      style={getSiteColors()}
    >
      <Cursor x={pos.x} y={pos.y} />
      <Header />
      <div className={styles["desktop-content"]}>
        <ProfileCard />
        <Menu />
        {activeTab === "home" && <Home />}
        {activeTab === "about" && <About />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "contact" && <Contact />}
        {activeTab === "skills" && <Skills />}
      </div>
    </div>
  );
};

export default Content;
