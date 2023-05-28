import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div id='header' className={styles.header}>
      <Logo />
      <Search />
    </div>
  );
};

export default Header;
