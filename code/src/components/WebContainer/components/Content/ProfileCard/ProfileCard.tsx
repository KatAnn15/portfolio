import styles from "./ProfileCard.module.scss";

const ProfileCard = () => {
  return (
    <div className={styles["profile-card"]}>
        <img src='/assets/images/me.png' className={styles.image} alt="my profile visualiation"/>
      <h3>KATERYNA ANNIENKOVA</h3>
    </div>
  );
};

export default ProfileCard;
