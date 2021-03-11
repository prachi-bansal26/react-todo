import React from 'react';
import { Checkbox, IconButton, ListItem, Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, toggleComplete, deleteTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }
    function handleDeleteClick() {
        deleteTodo(todo.id);
    }

    return (
        <ListItem style={{ display:"flex" }}>
            <Checkbox
                checked={todo.completed} 
                onClick={handleCheckboxClick} />
            <Typography
                style={{ 
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </Typography>
            <IconButton onClick={handleDeleteClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;