import React from "react";
import styles from "./ProfileSide.module.scss";
import Dashboard from "./Dashboard/Dashboard";
import VisitorsCard from "./Visitors/VisitorsCard";
import VideoCard from "./VideoCard/VideoCard";


const ProfileSide = () => {
  return (
    <div className={styles.profileSide} >
        <Dashboard></Dashboard>
        <VisitorsCard></VisitorsCard>
        <VideoCard></VideoCard>
    </div>

  )

};

export default ProfileSide;