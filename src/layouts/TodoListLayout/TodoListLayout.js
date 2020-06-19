import React from "react";
import TodoCard from "../../components/Molecules/TodoCard/TodoCard";
import styles from "./TodoListLayout.module.scss";
import TextInput from "../../components/Molecules/TextInput/TextInput";
import PageLine from "../../components/Atoms/PageLine/PageLine";


class TodoListLayout extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }
  fetchTodos = async () => {
    const pathname = this.props.history.location.pathname;
    const todoId = pathname.split('/')[pathname.split('/').length-2];
    
    const baseUrl = "https://jsonplaceholder.typicode.com/todos?userId=";
    const response = await fetch(`${baseUrl}${todoId}`);
    const data = await response.json();
    
    this.setState({ todos: data }, () => {
    });

  };

  render() {

    return (
      <div className="container">
        <div className="">

          <TextInput search
            inputTitle="YOUR TODOS IN HERE"
            placeHolder="Search todo"
          />

          <PageLine lineText="TODOS FOR YOU"></PageLine>

          {this.state.todos.map((todo, key) => (
            <TodoCard
              key={key}
              todoId={todo.id}
              title={todo.title}
              text={todo.completed.toString()}
              src={`https://unsplash.it/200/20${todo.id}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoListLayout;




// this.state.todos.map((todo) => (
//   <TodoCard
//     todoTitle={todo.title}
//     todoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat dictum euismod. 
//     Nullam et tellus sed arcu porttitor iaculis id id eros. Suspendisse vitae vestibulum est. Proin augue urna, 
//     finibus id auctor eu, vulputate eget nibh. In eu magna tristique libero vestibulum posuere. "
//     key={todo.id}
//     imgSrc={`https://unsplash.it/200/20${todo.id}`}
//   />
// ));
