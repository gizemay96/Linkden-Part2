import React from "react";
import styles from "./VideoCard.module.scss";
import SideBarCard from "../../../Atoms/SideBarCard/SideBarCard"
import SideBarCardItem from "../../../Atoms/SideBarCardItems/SideBardCardItem";


const VideoCard = () => {




  return (
    <div className={styles.dashboard} >
         <SideBarCard
         cardName="YOU MAY LİKE THESE COURSES"
         bottomLink
         bottomLinkName="SEE ALL RECOMANDETIONS"
         >

              <SideBarCardItem
              flexItem
               itemTitle="UX Foundations:
               Prototyping"
               itemText="27,959 viewers"
               withImage
               imgHeight="52px"
               imgWidth="80px"
               src="https://unsplash.it/200/201"
               >
              </SideBarCardItem>

              <SideBarCardItem
              flexItem
               itemTitle="Designing with
               Adobe XD and pro"
               itemText="27,959 viewers"
               withImage
               imgHeight="52px"
               imgWidth="80px"
               src="https://unsplash.it/200/202"
               >
              </SideBarCardItem>

              <SideBarCardItem
              flexItem
               itemTitle="UX Foundations:
               Styles and GUIs"
               itemText="27,959 viewers"
               withImage
               imgHeight="52px"
               imgWidth="80px"
               src="https://unsplash.it/200/203"
               >
              </SideBarCardItem>

         </SideBarCard>
    </div>

  )

};

export default VideoCard;