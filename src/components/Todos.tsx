import classes from './Todos.module.css';

import React from "react";
import { useTodos } from "../store/TodosContext";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {

    const { items, removeTodo } = useTodos();

    return(
        <ul className={classes.todos}>
            {items.map((item) => (
                <TodoItem 
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={removeTodo.bind(null,item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;