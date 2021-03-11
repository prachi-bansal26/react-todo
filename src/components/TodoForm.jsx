import React, { useState } from 'react';
import uuid from 'uuid';
import {TextField, Button} from "@material-ui/core";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() });
            setTodo({ ...todo, task: ""});
        }
    }

    return (
        <form class="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                type="text"
                name="task"
                value={todo.task}
                onChange= {handleTaskInputChange}
            />
            <Button type="submit">Add Task</Button>
        </form>
    );
}

export default TodoForm;