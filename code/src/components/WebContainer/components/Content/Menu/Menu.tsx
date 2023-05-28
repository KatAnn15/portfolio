import styles from "./Menu.module.scss";
import menuList from "../../../../../db/menu.db.json";
import { useSearchParams } from "react-router-dom";
import { cx } from "../../../../../utils/classConstructor";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab as setTab } from "../../../../../Redux/Slices/tabSlice";
import { RootState } from "../../../../../Redux/store";

interface MenuItemType {
  label: string;
  value: string;
}

const MenuItem = ({
  data,
  isActive,
  setActiveIndex,
}: {
  data: MenuItemType;
  isActive: boolean;
  setActiveIndex: () => void;
}) => {
  return (
    <div
      className={cx({ [styles["menu-item"]]: true, [styles.active]: isActive })}
      onClick={() => {
        setActiveIndex();
      }}
    >
      <img src={`/assets/images/menu/${data.value}.svg`} alt={data.value} />
      <p className='collapse-on-980'>{data.label}</p>
    </div>
  );
};

const Menu = () => {
  const { value: activeTab } = useSelector(
    (state: RootState) => state.activeTab
  );
  const setSearchParams = useSearchParams()[1];
  const dispatch = useDispatch();

  const setActive = (param: string) => {
    if (param && param !== "home") setSearchParams({ tab: param });
    else setSearchParams({});
    dispatch(setTab(param));
  };

  return (
    <div className={styles["nav-menu"]}>
      <div className={styles["menu-list"]}>
        {menuList.map((item: MenuItemType, index: number) => (
          <MenuItem
            data={item}
            isActive={item.value === activeTab}
            setActiveIndex={() => setActive(item.value)}
            key={String(index)}
          />
        ))}
      </div>
      <div className={styles.date}>2023</div>
    </div>
  );
};

export default Menu;
