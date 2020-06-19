import React from "react";
import styles from "./Image.module.scss";
import "./Image.scss"

const Image = ({ imgSrc, imgAlt,width,height,stil="" }) => {
const imgClasses = `img-${stil}`
  return (
    <div className="card-img">
      <img width={width} height={height} src={imgSrc} alt={imgAlt} className={imgClasses} />
    </div>
  );
};

export default Image;
