import React from "react";
import styles from "./PageLine.module.scss";

const PageLine = ({lineText , lineLink}) => {
  return (
    <div  className={styles.lineGroup}>
        <div className={styles.leftLine}></div>
        <div className={styles.textStyle}><h5>{lineText}</h5><a className={styles.linkStyle} href="?">{lineLink}</a></div>
        <div className={styles.rightLine}></div>
    </div>

  )

};

export default PageLine;