import React from "react";
import styles from "./SideBarCardItem.module.scss";
import Image from "../../Atoms/Images/Image"

const SideBarCardItem = ({ withImage, imgStyle, itemTitle,itemTitle2, itemText, flexItem, imgWidth,imgHeight, children,src,icon}) => {
  const cardItemClasses = `${flexItem ? styles.flexItem : ""}`



  return (
    <div className={cardItemClasses} >
      {
        withImage ? (
          <Image
            stil={imgStyle}
            width={imgWidth}
            height={imgHeight}
            imgSrc={src}
          ></Image>
        ) :
          ""
      }

      {
        itemTitle && itemText ? (

          <div className={`${styles.textItem} texts`}>
            <h5>{itemTitle}
            <span className={styles.titleTwo}>{itemTitle2}</span>
            <span className={styles.titleTwo}>{icon}</span>
            </h5>

            <p>{itemText}</p>
          </div>
        ) : 
          ""
      }

      {children}


    </div>

  )

};

export default SideBarCardItem;
