import React, { useEffect, useState } from "react";
import styles from "./TopBar.module.scss";
import ChargeIcon from "../components/chargeIcon/charegeIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

const TopBar = () => {
  const date = new Date();
  const initialCharge = 40;

  const [currentTime, setCurrentTime] = useState([
    date.getHours(),
    date.getMinutes(),
  ]);
  const [currentCharge, setCurrentCharge] = useState(initialCharge);
  const { value: siteScale } = useSelector(
    (state: RootState) => state.siteScale
  );

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setCurrentTime([date.getHours(), date.getMinutes()]);
    }, 1000);
    const chargeIntervalId = setInterval(() => {
      if (currentCharge < 100) setCurrentCharge(currentCharge + 1);
      if (currentCharge === 100) {
        clearInterval(chargeIntervalId);
      }
    }, 30);
    return () => {
      clearInterval(timeIntervalId);
      clearInterval(chargeIntervalId);
    };
  });

  const getFormattedTime = () =>
    currentTime.map((item) => ("0" + item).slice(-2)).join(":");

  return (
    <div
      className={styles["top-bar-container"]}
      style={{ height: `${25 * siteScale}px` }}
    >
      <p className={styles.time}>{getFormattedTime()}</p>
      <ChargeIcon charge={currentCharge} />
    </div>
  );
};

export default TopBar;
