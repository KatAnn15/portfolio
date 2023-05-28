import styles from "./Home.module.scss";
import baseStyles from "../Content.module.scss";
import { cx } from "../../../../../utils/classConstructor";
import { useDispatch } from "react-redux";
import { setCursorText } from "../../../../../Redux/Slices/cursorSlice";

const Home = () => {
  const dispatch = useDispatch();
  const updateCursorText = (text: string | null) => {
    if (!text) {
      setTimeout(() => {
        dispatch(setCursorText(text));
      }, 500);
      return;
    }
    dispatch(setCursorText(text));
  };
  return (
    <div
      className={cx({
        [styles.content]: true,
        [baseStyles["content-item"]]: true,
      })}
    >
      <img src='/assets/images/nature.jpg' alt='' className={styles.bg} />
      <div className={styles.info}>
        <h2
          onMouseEnter={() =>
            updateCursorText(
              "Hi! My name is Kateryna, I am a frontend developer from Ukraine :)"
            )
          }
          onMouseLeave={() => updateCursorText(null)}
        >
          Kateryna Annienkova
        </h2>
        <div className={styles["animated-wrapper"]}>
          <p>I am a </p>
          <div className={styles.animated}>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
