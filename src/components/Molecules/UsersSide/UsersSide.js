import React from "react";
import styles from "./UsersSide.module.scss";
import SideBarCard from "../../Atoms/SideBarCard/SideBarCard"



const UsersSide = () => {
    return (
        <div className={styles.usersSide} >
            <SideBarCard>

                <div className={styles.cardItem}>
                    <div className={styles.cardLink}>
                        <i className="fas fa-link"></i>
                        <h5>CONNECTIONS</h5>
                    </div>
                    <h6>{Math.floor(Math.random() * 10000)}</h6>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardLink}>
                        <i className="far fa-dot-circle"></i>
                        <h5>INVITATIONS</h5>
                    </div>
                    <h6 className={styles.invitationsNum}>{Math.floor(Math.random() * 10)}<div></div></h6>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardLink}>
                        <i className="fas fa-archive"></i>
                        <h5>TEAMMATES</h5>
                    </div>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardLink}>
                        <i className="fas fa-user-friends"></i>
                        <h5>GROUPS</h5>
                    </div>
                    <h6>{Math.floor(Math.random() * 10)}</h6>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardLink}>
                        <i className="far fa-file"></i>
                        <h5>PAGES</h5>
                    </div>
                    <h6>{Math.floor(Math.random() * 100)}</h6>
                </div>

                <div className={styles.cardItem}>
                    <div className={styles.cardLink}>
                        <i className="fas fa-hashtag"></i>
                        <h5>HASHTAGS</h5>
                    </div>
                    <h6>{Math.floor(Math.random() * 10)}</h6>
                </div>

            </SideBarCard>
        </div>

    )

};

export default UsersSide;