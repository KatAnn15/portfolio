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
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Content = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const { value } = useSelector((state: RootState) => state.activeTab);
  const setSearchParams = useSearchParams()[1];

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
    <div className={styles.wrapper} onMouseMove={updateCursorPos}>
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
