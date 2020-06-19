import React from "react";
import ListLayout from "../../layouts/ListLayout/ListLayout";
import styles from "./UsersPage.module.scss"
import SideBar from "../../components/Organism/SideBar/SideBar"

const UsersPage = ({ history }) => {
  return (
    <div className={styles.UsersPage}>
      <SideBar userPage></SideBar>
      <ListLayout
      imgSrc="https://unsplash.it/200/200"
      imgAlt="avatar"
      history={history}
      buttonText="Go to Profile"
    />
    </div>
  );
};

export default UsersPage;


