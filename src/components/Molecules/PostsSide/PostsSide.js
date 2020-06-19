import React from "react";
import styles from "./PostsSide.module.scss";
import SideBarCard from "../../Atoms/SideBarCard/SideBarCard"
import SideBarCardItem from "../../Atoms/SideBarCardItems/SideBardCardItem";
import SmallProfileCard from "./SmallProfileCard/SmallProfileCard";



const PostsSide = () => {
    return (
        <div className={styles.postsSide} >

            <div className={styles.postSideProfile}>
                <SmallProfileCard
                    coverSrc="https://unsplash.it/200/201"
                    imgSrc="https://unsplash.it/200/202"
                    imgStyle="circle"
                    btnText="WRITE NEW POST"
                >

                </SmallProfileCard>
            </div>

            <div className={styles.postsSideGroup}>
                <SideBarCard
                    cardName="MY GROUPS"
                    topLink
                    topLinkName="EDIT LIST"
                    bottomLink
                    bottomLinkName="SHOW ALL (8)"
                >

                    <SideBarCardItem
                        flexItem
                        withImage
                        imgStyle="circle"
                        imgWidth="52px"
                        imgHeight="52px"
                        src="https://unsplash.it/200/201"
                        itemTitle="Moscow State 
            Linguistical University"
                        itemText="-"
                    />

                    <SideBarCardItem
                        flexItem
                        withImage
                        imgStyle="circle"
                        imgWidth="52px"
                        imgHeight="52px"
                        src="https://unsplash.it/200/204"
                        itemTitle="Digital freelancers
                    group"
                        itemText="-"
                    />

                    <SideBarCardItem
                        flexItem
                        withImage
                        imgStyle="circle"
                        imgWidth="52px"
                        imgHeight="52px"
                        src="https://unsplash.it/200/207"
                        itemTitle="Interaction design association"
                        itemText="-"
                    />

                </SideBarCard>

                <div className={styles.hasgtagCard}>
                <SideBarCard
                cardName="TRENDING HASHTAGS"
                >
                    <div className={styles.hashtags}>
                        <button>#work</button>
                        <button>#business</button>
                        <button>#hr</button>
                        <button>#userinterface</button>
                        <button>#digital</button>
                        <button>#userexperience</button>
                        <button>#ux</button>
                        <button>#ui</button>
                        <button>#freelance</button>
                    </div>
                    
                </SideBarCard>
                </div>


                <SideBarCard
                    cardName="TRENDING ARTICLES"
                >

                    <SideBarCardItem
                        flexItem
                        withImage
                        imgWidth="80px"
                        imgHeight="52px"
                        src="https://unsplash.it/200/201"
                        itemTitle="How I make
                        cool designs?"
                        itemText="6,340 viewers"
                    />

                    <SideBarCardItem
                        flexItem
                        withImage
                        imgWidth="80px"
                        imgHeight="52px"
                        src="https://unsplash.it/200/206"
                        itemTitle="Advices for
                        young HR-manage"
                        itemText="8,123 viewers"
                    />

                    <SideBarCardItem
                        flexItem
                        withImage
                        imgWidth="80px"
                        imgHeight="52px"
                        src="https://unsplash.it/200/209"
                        itemTitle="A little about
                        usability testing"
                        itemText="3,912 viewers"
                    />

                </SideBarCard>




            </div>

        </div>

    )

};

export default PostsSide;

