import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import SideBar from "../../components/Organism/SideBar/SideBar";
import ProfileCard from "../../components/Molecules/ProfileCard/ProfileCard";
import Button from "../../components/Atoms/Button/Button";


const HomePage = () => {
  return (
  <>
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to Linkedin Project</h1>
      <Link to="/users"><Button buttonText="Click to get users"></Button></Link>
    </div>


  </>

  );
};

export default HomePage;
