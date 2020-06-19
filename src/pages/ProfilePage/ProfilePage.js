import React from "react";
import styles from "./ProfilePage.module.scss";

import SideBar from "../../components/Organism/SideBar/SideBar";
import profileCover from "../../img/profileCover.png";
import Dmitry from "../../img/Dmitry.png";
import ProfileCard from "../../components/Molecules/ProfileCard/ProfileCard";
import ProjectCard from "../../components/Molecules/ProjectCard/ProjectCard"

import AboutCard from "../../components/Molecules/AboutCard/AboutCard"
import ExperienceCard from "../../components/Molecules/ExperienceCard/ExperienceCard";

class ProfilePage extends React.Component {
  state = {
    profileDetails: {},
  };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const pathname = this.props.history.location.pathname;

    const response = await fetch(`${baseUrl}${pathname}`);
    const data = await response.json();

    this.setState({ profileDetails: data }, () => {
    });

    console.log(this.state.profileDetails)
  };

  goTodos = () => {
    const pathname = this.props.history.location.pathname;
    this.props.history.push(`${pathname}/todos`);
  };

  goPosts = () => {
    const pathname = this.props.history.location.pathname;
    this.props.history.push(`${pathname}/posts`);
  };

  render() {
    return (
      <div className={styles.content}>
        <section className={styles.profileSection}>
          <ProfileCard
            coverSrc={profileCover}
            imgSrc={Dmitry}
            imgStyle="circle"
            name={this.state.profileDetails.name}
            city={this.state.profileDetails.address != undefined ? this.state.profileDetails.address.city : ""}
            street={this.state.profileDetails.address != undefined ? this.state.profileDetails.address.street : ""}
            info="Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers."
            btnText="VIEW TODOS"
            onClick={this.goTodos}
            btnTextTwo="VIEW POSTS"
            onClickBtnTwo={this.goPosts}
          >
          </ProfileCard>

          <AboutCard
            name={this.state.profileDetails.name}
            username={this.state.profileDetails.username}
            companyName={this.state.profileDetails.company != undefined ? this.state.profileDetails.company.name : ""}
            catchPhrase={this.state.profileDetails.company != undefined ? this.state.profileDetails.company.catchPhrase : ""}
            bottomLink="SEE MORE"
          />


          <ProjectCard
            title="Projects"
            projectTitle={this.state.profileDetails.username}
            projectText={this.state.profileDetails.email}
          />

          <ExperienceCard
            title="Experience"
            date="3 yrs 3 mos"
            companyName={this.state.profileDetails.company != undefined ? this.state.profileDetails.company.name : ""}
            companyCatchPhrase={this.state.profileDetails.company != undefined ? this.state.profileDetails.company.catchPhrase : ""}
          />
        </section>

        <section>
          <SideBar profilePage></SideBar>
        </section>

      </div>
    );
  }
}

export default ProfilePage;


