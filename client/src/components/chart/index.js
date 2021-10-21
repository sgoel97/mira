import React from "react";

import BigChart from "./img/BigChart.png";

import styles from "./style.module.scss";

const Chart = () => {
  return (
    <div className={styles["container"]}>
      <img src={BigChart} alt="" />
    </div>
  );
};

export default Chart;
