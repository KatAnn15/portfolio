import { useEffect, useRef } from "react";
import Text from "../components/text/text";
import styles from "./InfiniteScroll.module.scss";
import { TextAnimations, Directions } from "../../../animations/textAnimations";
import db from "../../../db/animated.json";
import sections from "../components/sections";
import { useDispatch } from "react-redux";
import { Modes, updateMode } from "../../../Redux/Slices/modeSlice";
import { updateScale } from "../../../Redux/Slices/scaleSlice";

interface Animation {
  name: string;
  delay: number;
  duration: number;
  direction: string;
}

const InfiniteScroll = () => {
  const infiniteScrollRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  const getItemAnimation = (animation: Animation | undefined) => {
    if (!animation) return;
    return {
      name: TextAnimations[animation.name as keyof typeof TextAnimations],
      delay: animation.delay,
      duration: animation.duration,
      direction: Directions[animation.direction as keyof typeof Directions],
    };
  };

  useEffect(() => {
    let scroll = 0;
    infiniteScrollRef.current && (infiniteScrollRef.current.scrollTop = 0);
    let intervalId: NodeJS.Timer;
    setTimeout(() => {
      intervalId = setInterval(() => {
        if (infiniteScrollRef.current) {
          infiniteScrollRef.current.scrollTop = scroll;
          scroll += 2.5;
        }
        if (
          infiniteScrollRef.current &&
          scroll >
            infiniteScrollRef.current.scrollHeight -
              infiniteScrollRef.current.clientHeight
        ) {
          dispatch(updateMode(Modes.Web));
          dispatch(updateScale(1.2));
          clearInterval(intervalId);
        }
      }, 1);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  const getAnimated = () => {
    return db.animated.map((item, index) => {
      switch (item.type) {
        case "text":
          return (
            <Text
              content={item.content as string}
              animation={getItemAnimation(item.animation)}
              style={{ width: "100%", ...item.style }}
              key={index + ""}
            />
          );
        case "section":
          const Section = sections[item.name as keyof typeof sections];
          return Section && <Section key={index + ""} />;
        default:
          return <div></div>;
      }
    });
  };
  return (
    <div ref={infiniteScrollRef} className={styles.content}>
      {getAnimated()}
    </div>
  );
};

export default InfiniteScroll;
