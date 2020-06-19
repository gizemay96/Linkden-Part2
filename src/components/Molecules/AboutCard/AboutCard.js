import React from "react";
import styles from "./AboutCard.module.scss";
import Image from "../../Atoms/Images/Image";

const ProjectCard = ({ name,username, companyName, catchPhrase,bottomLink}) => {
    return (
        <div>
            <div className={styles.aboutSection}>
            <h3 className={styles.aboutTitle}>About</h3>
            <p className={styles.aboutText}>
             Hi I am {name} !  My frends are call me {username}. <br></br> My Company name is {companyName}. And our CatchPhrase  `` {catchPhrase} !``
            </p>
            <a href="?">{bottomLink}</a>
          </div>

        </div>
    );
};

export default ProjectCard;