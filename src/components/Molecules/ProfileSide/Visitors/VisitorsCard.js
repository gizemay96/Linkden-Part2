import React from "react";
import styles from "./VisitorsCard.module.scss";
import SideBarCard from "../../../Atoms/SideBarCard/SideBarCard";
import SideBarCardItem from "../../../Atoms/SideBarCardItems/SideBardCardItem";

class VisitorsCard extends React.Component {
    state = {
        visitorList: [],
    };

    componentDidMount() {
        this.fetchList();
    }

    fetchList = async () => {
        const baseUrl = "https://jsonplaceholder.typicode.com";
        const response = await fetch(`${baseUrl}/users`);
        const data = await response.json();

        this.setState({ visitorList: data });
    };

    render() {
        return (
            <SideBarCard
                cardName="VISITORS"
                topLink
                topLinkName="VIEW ALL"
            >

                <div>
                    {this.state.visitorList.map((visitor, key) => (
                        <SideBarCardItem 
                        key={key}
                        flexItem
                        withImage
                        imgStyle="circle"
                        imgHeight="52px"
                        imgWidth="52px"
                        src={`https://unsplash.it/200/20${visitor.id}`}
                        itemTitle={visitor.name}
                        itemText={visitor.company.name}
                        >
                        </SideBarCardItem>
                    ))}
                </div>


            </SideBarCard>
        );
    }
}

export default VisitorsCard;


