import React from "react";
import styles from "./Dashboard.module.scss";
import SideBarCard from "../../../Atoms/SideBarCard/SideBarCard"


const Dashboard = () => {




  return (
    <div className={styles.dashboard} >
         <SideBarCard
         cardName="YOUR DASHBOARD"
         topLink
         topLinkName="GO TO STATS">
             <h1>{Math.floor(Math.random() * 1000)}</h1>
             <p>views today</p>
             <h1>{Math.floor(Math.random() * 100)}</h1>
             <p>posts views</p>
             <h1>{Math.floor(Math.random() * 100)}</h1>
             <p>search appereances</p>
                
         </SideBarCard>
    </div>

  )

};

export default Dashboard;