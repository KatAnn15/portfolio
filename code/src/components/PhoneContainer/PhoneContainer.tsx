import { CSSProperties, useRef } from "react";
import styles from "./PhoneContainer.module.scss";
import InfiniteScroll from "../PhoneContent/InfiniteScroll/InfiniteScroll";
import TopBar from "../PhoneContent/TopBar/TopBar";
import BottomBar from "../PhoneContent/BottomBar/BottomBar";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Modes } from "../../Redux/Slices/modeSlice";
import Frame from "./Frame/Frame";
import { cx } from "../../utils/classConstructor";

const PhoneContainer = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { value: mode } = useSelector((state: RootState) => state.mode);
  const { value: siteScale } = useSelector(
    (state: RootState) => state.siteScale
  );

  const getContainerStyle: () => CSSProperties = () =>
    mode === Modes.Web
      ? {
          width: `${(ref.current?.clientWidth || 0) * siteScale}px`,
          height: `${(ref.current?.clientHeight || 0) * siteScale}px`,
          transition: `all .7s`,
        }
      : {};

  return (
    <div className={styles["app-content"]}>
      <Frame />
      <div
        className={cx({
          [styles["phone-container"]]: true,
          "phone-container": true,
        })}
        style={getContainerStyle()}
        ref={ref}
      >
        <img
          src='/assets/images/iphone.png'
          alt='main phone content that scales up and down'
          className={styles.image}
        />
        <div className={styles["content-wrapper"]}>
          <TopBar />
          <InfiniteScroll />
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default PhoneContainer;
