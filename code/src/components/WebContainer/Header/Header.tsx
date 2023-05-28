import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import styles from "./Header.module.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => {
  return (
    <div id='header' className={styles.header}>
      <Logo />
      <Search />
      <ThemeSwitch />
    </div>
  );
};

export default Header;
