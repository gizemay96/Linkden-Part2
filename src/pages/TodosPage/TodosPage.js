import React from "react";
import styles from "./TodosPage.module.scss";
import TodoListLayout from "../../layouts/TodoListLayout/TodoListLayout";
import SideBar from "../../components/Organism/SideBar/SideBar";

const TodosPage = ({history}) => {
  return (
    <div className={styles.todoPage}>
        <TodoListLayout history={history}
        titleKey="title"/>
        <SideBar todosPage></SideBar>
    </div>
  );
};

export default TodosPage;
