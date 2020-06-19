import React from "react";
import styles from "./PostCard.module.scss";
import Card from "../../Atoms/Card/Card";
import Image from "../../Atoms/Images/Image";
import Button from "../../Atoms/Button/Button";

const PostCard = ({ title, text, src }) => {
  return (
    <div className={styles.postCard}>
      <Card cardAction>
        <div className={styles.postHeader}>
          <Image imgSrc={src} imgAlt="todos-image" stil="circle" width="52px" height="52px" />
          <div className={styles.postHeaderText}>
          <h5 className={styles.postTitle}>{title}</h5>
          <p className={styles.titleJob}>deneme</p>
          </div>
        </div>
        <div className={styles.postWrapper}>
          <p className={styles.postText}>{text}</p>
        </div>
        <div className={styles.postButton}>
          <Button buttonText="Read More" />
        </div>

      </Card>
    </div>
  );
};

export default PostCard;