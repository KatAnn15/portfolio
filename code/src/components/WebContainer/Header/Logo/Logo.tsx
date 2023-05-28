import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img
        src='/assets/images/heart.svg'
        className={styles.heart}
        alt='logo in heart shape'
      />
      <h3>
        K<span>ateryna</span>
      </h3>
      <h3 className='collapse-on-980'>
        A<span>nn</span>
      </h3>
    </div>
  );
};

export default Logo;
