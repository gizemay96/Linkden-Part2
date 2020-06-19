import React from "react";
import styles from "./SearchItems.module.scss";

const SearchItems = ({title , number , text , icon}) => {

  return (
    <div className={styles.searchItem}>
        <div className={styles.itemTitle}>
            <div><h5>{title}</h5></div>
            <div><h5>{number}</h5></div>
        </div>
        <div className={styles.icons}>
        {icon}
        </div>
        <div className={styles.searchText}>
         <h6>{text}</h6>   
        </div>
    </div>

  )

};

export default SearchItems;
