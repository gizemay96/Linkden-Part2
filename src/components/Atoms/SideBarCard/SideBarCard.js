import React from "react";
import styles from "./SideBarCard.module.scss";

const SideBarCard = ({ children, flexCard, cardName, topLink, topLinkName, bottomLink, bottomLinkName }) => {
  const cardClasses = `${styles.card} ${flexCard ? styles.flexCard : ""}`
  const topLinkStyles = `${styles.links}`
  return (
    <div className={cardClasses}>

      <div className={styles.cardHeader}>
        <div className={styles.cardTitle} >
        <h6>{cardName}</h6>
        </div>
       <div className={topLinkStyles}>
       {
            topLink ? (
                <a href="?"><h6>{topLinkName}</h6></a>
            ) :
              ""
          }

       </div>
      </div>

      <div className={styles.cardItems}>{children}</div>


      <>
        {
          bottomLink ? (
            <div className={styles.bottomLink}>
              <a href="?"><h6>{bottomLinkName}</h6></a>
            </div>
          ) :
            ""
        }
      </>

    </div>

  )

};

export default SideBarCard;
