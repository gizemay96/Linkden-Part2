import React, { Children } from "react";
import styles from "./Button.module.scss";

const Button = ({onBtnClick, buttonText , transparent,children}) => {
  const btnClasses = `${styles.btn} ${transparent ? styles.Transparent : ""}`
  return (
   <>
   
   <button className={btnClasses} onClick={onBtnClick}>{buttonText}</button>

  {children}

   </>
  );
};

export default Button;
