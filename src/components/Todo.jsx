import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styles from './Todo.module.css';

function Todo({ todo, toggleComplete, deleteTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleDeleteClick() {
    deleteTodo(todo.id);
  }

  return (
    <ListItem className={styles.listitem}>
      <Checkbox
        checked={todo.completed}
        onClick={handleCheckboxClick}
      />

      <Typography
        className={styles.taskcontent}
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>

      <IconButton className={styles.close} onClick={handleDeleteClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
