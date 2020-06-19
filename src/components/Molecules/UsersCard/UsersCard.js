import React from "react";
import styles from "./UsersCard.module.scss";
import Card from "../../Atoms/Card/Card";
import Image from "../../Atoms/Images/Image";
import Button from "../../Atoms/Button/Button";

const UsersCard = ({ imgSrc, imgAlt, userName, userEmail, onCardClick,phoneNumber }) => {
  return (
    <button onClick={onCardClick} className={styles.buttonCard}>
      <div className={styles.cardContent}>
        <Image imgSrc={imgSrc} imgAlt={imgAlt} width="52px" stil="circle" />
        <div className={styles.userText}>
          <h3 className={styles.userName}>{userName}</h3>
          <p className={styles.userEmail}>{userEmail}</p>
        </div>
      </div>
      <p className={styles.phoneNum}>Phone :   {phoneNumber} </p>
    </button>
  );
};

export default UsersCard;
