import React from "react";
import styles from "./ProfileCard.module.scss";
import Card from "../../Atoms/Card/Card";
import Image from "../../Atoms/Images/Image";
import Button from "../../Atoms/Button/Button";

const ProfileCard = ({coverSrc , imgSrc , imgStyle , name , city , street, info , onClick , btnText , onClickBtnTwo , btnTextTwo}) => {
  return (
    <div>
        <Card>
        <div className={styles.coverImg}>
            <Image
            width="850px"
            height="180px"
            imgSrc={coverSrc}
            ></Image>
        </div>
        <div className={styles.cardBody}>
            <div className={styles.userImg}>
                <Image
                width="170px"
                height="170px"
                imgSrc={imgSrc}
                stil={imgStyle}
                ></Image>
            </div>
            <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
                <h3>{name}</h3>
                <p className={styles.locations}><i className="fas fa-location-arrow"></i>  {city} ,{street} </p>
            </div>
                <div className={styles.cardInfo}>
                    <p>{info}</p>
                </div>
                <div className={styles.cardButtons}>
                    <Button onBtnClick={onClick} buttonText={btnText}></Button>
                    <Button transparent onBtnClick={onClickBtnTwo} buttonText={btnTextTwo}></Button>
                </div>
            </div>
        </div>
    </Card>
    </div>
  );
};

export default ProfileCard;
