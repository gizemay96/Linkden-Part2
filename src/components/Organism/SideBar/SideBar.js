import React from "react";
import ProfileSide from "../../Molecules/ProfileSide/ProfileSide";
import TodosSide from "../../Molecules/TodosSide/TodosSide";
import PostsSide from "../../Molecules/PostsSide/PostsSide";
import UsersSide from "../../Molecules/UsersSide/UsersSide"



const SideBar = ({ children, profilePage, todosPage, postPage , userPage}) => {
  return (
    <div className="side-bar" >
      {
        profilePage ? (
          <ProfileSide />
        ) :
          ""
      }

      {
        todosPage ? (
          <TodosSide />
        ) :
          ""
      }

      {
        postPage ? (
          <PostsSide />
        ) :
          ""
      }

      {
        userPage ? (
          <UsersSide />
        ) :
          ""
      }

      {children}


    </div>

  )

};

export default SideBar;
