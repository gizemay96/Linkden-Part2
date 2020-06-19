import React from "react";
import styles from "./TodosSide.module.scss";
import SideBarCard from "../../Atoms/SideBarCard/SideBarCard"
import Button from "../../Atoms/Button/Button"
import SideBarCardItem from "../../Atoms/SideBarCardItems/SideBardCardItem";
import tracked1 from "../../../img/tracked1.png"
import tracked2 from "../../../img/tracked2.png"
import SearchItems from "../../Atoms/SearchItems/SearchItems";



const TodosSide = () => {
    return (
        <div className={styles.todosSide} >
            <SideBarCard>
                <Button
                    buttonText="POST A TODO"></Button>
            </SideBarCard>


            <div className={styles.Search}>
                <SideBarCard
                    cardName="MY SEARCHES"
                    topLink
                    topLinkName="EDIT LIST"
                >
                     <SearchItems
                    title="UX/UI designer"
                    text="Remote"
                    number="+240"
                    icon={<i className="far fa-bell-slash"></i>}
                />

                <SearchItems
                    title="UX/UI designer"
                    text="Remote"
                    icon={<i className="far fa-bell"></i>}
                />

                <SearchItems
                    title="UX/UI designer"
                    text="Remote"
                    icon={<i className="far fa-bell"></i>}
                />


                </SideBarCard>
            </div>

            <SideBarCard
                cardName="TRACKED TODOS"
            >
                <SideBarCardItem
                    flexItem
                    withImage
                    imgHeight="52px"
                    imgWidth="52px"
                    src={tracked1}
                    imgStyle="circle"
                    itemTitle="UX/UI Designer"
                    itemText="Upwork"
                />

                <SideBarCardItem
                    flexItem
                    withImage
                    imgHeight="52px"
                    imgWidth="52px"
                    src={tracked2}
                    imgStyle="circle"
                    itemTitle="UX/UI Designer"
                    itemText="Upwork"
                />

            </SideBarCard>

            <SideBarCard
                cardName="YOU MAY LİKE THESE COURSES"
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
                />

                <SideBarCardItem
                    flexItem
                    itemTitle="UX Foundations:
               Prototyping"
                    itemText="27,959 viewers"
                    withImage
                    imgHeight="52px"
                    imgWidth="80px"
                    src="https://unsplash.it/200/202"
                />

                <SideBarCardItem
                    flexItem
                    itemTitle="UX Foundations:
               Prototyping"
                    itemText="27,959 viewers"
                    withImage
                    imgHeight="52px"
                    imgWidth="80px"
                    src="https://unsplash.it/200/203"
                />

            </SideBarCard>
        </div>

    )

};

export default TodosSide;