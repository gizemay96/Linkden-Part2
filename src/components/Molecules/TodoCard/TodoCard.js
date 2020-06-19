import React from "react";
import styles from "./TodoCard.module.scss";
import Card from "../../Atoms/Card/Card";
import Image from "../../Atoms/Images/Image";
import Button from "../../Atoms/Button/Button";

const TodoCard = ({ title, text, src , todoId }) => {
  return (
    <div className={styles.todosCard}>
      <Card flexCard>
        <Image imgSrc={src} imgAlt="todos-image" stil="circle" width="54px" height="54px"/>
        <div className={styles.todoWrapper}>
          <h6 className={styles.todoTitle}>{title}</h6>
          <h6 className={styles.todoTitle}>Todo = {todoId}</h6>
          <p className={styles.todoText}>{text}</p>
        </div>
        <div>
          <Button buttonText="MORE" />
        </div>
      </Card>
    </div>
  );
};

export default TodoCard;
