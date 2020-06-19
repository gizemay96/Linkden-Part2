import React from "react";
import styles from "./ListLayout.module.scss";
import UsersCard from "../../components/Molecules/UsersCard/UsersCard";
import PageLine from "../../components/Atoms/PageLine/PageLine"

class ListLayout extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const response = await fetch(`${baseUrl}/users`);
    const data = await response.json();

    this.setState({ list: data });
  };

  goToProfile = (id) => {
    const pathname = this.props.history.location.pathname;
    this.props.history.push(`${pathname}/${id}`);
  };

  render() {
    return (
      <div>
        <PageLine lineText="RECENT CONNECTIONS"></PageLine>
        <div className={styles.gridContainer}>

          {this.state.list.map((item, index) => (
            <UsersCard
              key={index}
              imgSrc={`https://unsplash.it/200/20${index}`}
              imgAlt="avatar"
              userName={item.name}
              userEmail={item.email}
              phoneNumber={item.phone}
              buttonText={this.props.buttonText}
              onCardClick={() => {
                this.goToProfile(item.id);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListLayout;

