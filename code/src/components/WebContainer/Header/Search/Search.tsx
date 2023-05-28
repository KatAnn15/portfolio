import styles from "./Search.module.scss";
import menuDb from "../../../../db/menu.db.json";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../../Redux/Slices/tabSlice";
import { setCursorText } from "../../../../Redux/Slices/cursorSlice";
import { RootState } from "../../../../Redux/store";

const Search = () => {
  const { value: cursorText } = useSelector((state: RootState) => state.cursor);
  const dispatch = useDispatch();

  const debounce = (cb: any, time: number) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb.apply(this, args);
      }, time);
    };
  };
  const updateCursorText = (text: string | null) => {
    if (!text) {
      setTimeout(() => {
        dispatch(setCursorText(null));
      }, 500);
      return;
    }
    dispatch(setCursorText(text));
  };

  const searchByKey = debounce((value: string) => {
    if (cursorText) {
      dispatch(setCursorText(null));
    }
    if (!value) {
      dispatch(setActiveTab("home"));
      return;
    }
    menuDb.forEach((menuItem) => {
      menuItem.keys.forEach((key) => {
        if (key.includes(value)) {
          dispatch(setActiveTab(menuItem.value));
        }
      });
    });
  }, 1000);
  return (
    <div
      className={styles.search}
      onMouseEnter={() =>
        updateCursorText(
          'Enter the keyword to search for the relevant tab (e.g. "experience")'
        )
      }
      onMouseLeave={() => updateCursorText(null)}
    >
      <input
        type='text'
        placeholder='Search info by keyword'
        onChange={(e) => searchByKey(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
