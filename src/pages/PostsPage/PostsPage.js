import React from "react";
import styles from "./PostPage.module.scss"
import PostListLayout from "../../layouts/PostListLayout/PostListLayout"
import SideBar from "../../components/Organism/SideBar/SideBar"

const PostsPage = ({history}) => {
  return (
    <div className={styles.postPage}>
        <PostListLayout history={history}
        titleKey="title"/>
        <SideBar history={history} postPage></SideBar>
    </div>
  );
};

export default PostsPage;
