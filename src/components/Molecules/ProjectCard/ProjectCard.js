import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "../../Atoms/Images/Image";

const ProjectCard = ({ title,projectTitle, projectText,}) => {
    return (
        <div>
            <div className={styles.projectSection}>
                <h3 className={styles.projectSectionTitle}>{title}</h3>
                <div className={styles.projectShowcase}>
                    <div className={styles.projectImg}>
                        <Image width="250px" height="160px"
                            imgAlt="project"
                            imgSrc="https://unsplash.it/200/206"
                        />
                        <h3 className={styles.projectTitle}>{projectTitle}</h3>
                        <p className={styles.projectText}>{projectText}</p>
                    </div>
                    <div className={styles.projectImg}>
                        <Image width="250px" height="160px"
                            imgAlt="project"
                            imgSrc="https://unsplash.it/200/202"
                        />
                        <h3 className={styles.projectTitle}>{projectTitle}</h3>
                        <p className={styles.projectText}>{projectText}</p>
                    </div>
                    <div className={styles.projectImg}>
                        <Image width="250px" height="160px"
                            imgAlt="project"
                            imgSrc="https://unsplash.it/200/203"
                        />
                        <h3 className={styles.projectTitle}>{projectTitle}</h3>
                        <p className={styles.projectText}>{projectText}</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ProjectCard;