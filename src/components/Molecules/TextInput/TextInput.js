import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({ search,post,inputTitle,placeHolder }) => {
    const searchClasses = `${styles.search}`
    const postClasses = `${styles.post}`
    return (
        <div className={styles.textInputContent}>
            <div className={styles.textInputCard}>
        <div className={styles.textInputTitle}>{inputTitle}</div>

                <>
                    {
                        search ? (
                            <div className={searchClasses}>
                                <input
                                    type="textarea"
                                    placeholder={placeHolder}
                                    className={styles.searchInput}
                                />
                               <div className={styles.searchIcons}>
                               <a href="?"><i className="fas fa-sliders-h"></i></a>
                                <a href="?"><i className="fas fa-search"></i></a>
                               </div>
                            </div>
                        ) :
                            ""
                    }
                </>


                <>
                    {
                        post ? (
                            <div className={postClasses}>
                                <textarea
                                    type="textarea"
                                    placeholder={placeHolder}
                                    className={styles.postInput}
                                />
                                 <div className={styles.postIcons}>
                                 <a href="?"><i className="fas fa-paperclip"></i></a>
                                 <a href="?"><i className="far fa-image"></i></a>
                                 <a href="?"><i className="fas fa-film"></i></a>
                               <a href="?"><i className="far fa-paper-plane"></i></a>
                               </div>
                            </div>
                        ) :
                            ""
                    }
                </>

            </div>
        </div>



    )

};

export default TextInput;

