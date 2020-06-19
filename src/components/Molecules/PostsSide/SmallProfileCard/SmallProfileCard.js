import React from "react";
import styles from "./SmallProfileCard.module.scss";
import Card from "../../../Atoms/Card/Card";
import Image from "../../../Atoms/Images/Image";
import Button from "../../../Atoms/Button/Button";

const SmallProfileCard = ({coverSrc , imgSrc , imgStyle , onClick , btnText}) => {
  return (
    <div>
        <Card>
        <div className={styles.coverImg}>
            <Image
            width="290px"
            height="120px"
            imgSrc={coverSrc}
            ></Image>
        </div>
        <div className={styles.cardBody}>
            <div className={styles.userImg}>
                <Image
                width="100px"
                height="100px"
                imgSrc={imgSrc}
                stil={imgStyle}
                ></Image>
            </div>
            <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
                <h3>Dmitry Kargaev</h3>
            </div>
                <div className={styles.cardInfo}>
                    <p>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.</p>
                </div>
                <div className={styles.cardButtons}>
                    <Button onBtnClick={onClick} buttonText={btnText}></Button>
                </div>
            </div>
        </div>
    </Card>
    </div>
  );
};

export default SmallProfileCard;