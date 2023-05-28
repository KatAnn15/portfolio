import { useSelector } from "react-redux";
import styles from "./Cursor.module.scss";
import { RootState } from "../../../../Redux/store";

const Cursor = ({ x, y }: { x: number; y: number }) => {
  const { value } = useSelector((state: RootState) => state.cursor);
  const getSize = () => {
    if (!value) return {};

    const charCount = Math.min(value.length, 70);
    return { width: charCount * 5, height: charCount * 5 };
  };
  return (
    <div
      className={styles.main}
      style={{
        left: x,
        top: Math.min(y, window.innerHeight - (getSize().height || 0)),
        display: value ? "flex" : "none",
        width: getSize().width + "px",
        height: getSize().height + "px",
      }}
    >
      <p>{value}</p>
    </div>
  );
};

export default Cursor;
