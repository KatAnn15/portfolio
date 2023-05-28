import React, { CSSProperties } from "react";
import "./chargeIcon.scss";

const ChargeIcon = ({ charge }: { charge: number }) => {
  const getChargeIconStyle = () =>
    ({ "--charge": charge / 100 } as CSSProperties);
  return <div className="charge-icon" style={getChargeIconStyle()}></div>;
};

export default ChargeIcon;
