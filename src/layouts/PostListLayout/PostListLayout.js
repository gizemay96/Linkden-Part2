import React from "react";
import PostCard from "../../components//Molecules/PostCard/PostCard";
import TextInput from "../../components/Molecules/TextInput/TextInput"
import PageLine from "../../components/Atoms/PageLine/PageLine";



class PostListLayout extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }
  fetchTodos = async () => {
    const pathname = this.props.history.location.pathname;
    const postId = pathname.split('/')[pathname.split('/').length-2];

    const baseUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
    const response = await fetch(`${baseUrl}${postId}`);
    const data = await response.json();

    this.setState({ posts: data }, () => {
    });
  };

  render() {
    return (
      <div className="container">

        <TextInput
          post
          inputTitle="NEW POST"
          placeHolder="What’s on your mind?"
        />

        <PageLine lineText="SORT BY" lineLink=": TRENDING"></PageLine>

        {
          this.state.posts.map((post, key) => (
            <PostCard
              key={key}
              title={post.title}
              text={post.body}
              src={`https://unsplash.it/200/20${post.id}`}
            />
          ))
        }
      </div>
    );
  }
}

export default PostListLayout;