import React from "react";
import styles from "./Card.module.scss";

const Card = ({ children, flexCard = false, cardAction }) => {
  const cardClasses = `${styles.card} ${flexCard ? styles.flexCard : ""}`
  const actionClasses = `${styles.action}`
  return (
    <>
      <div className={cardClasses}>{children}</div>

      <>
        {
          cardAction ? (
            <div className={actionClasses}>
              <div className={styles.actionGroup}>
                <div className={styles.actionNumbers}>
                  <p><i className="far fa-thumbs-up"></i>42</p>
                  <p><i className="far fa-comment"></i>9</p>
                </div>
                <div>
                  <p><i className="fas fa-share-alt"></i>SHARE</p>
                </div>
              </div>
            </div>
          ) :
            ""
        }
      </>

    </>

  )

};

export default Card;
