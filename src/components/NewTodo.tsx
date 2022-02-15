import React, { useRef } from "react";

import classes from "./NewTodo.module.css";
import { useTodos } from "../store/TodosContext";

const NewTodo: React.FC = () => {
    const { addTodo } = useTodos();
    
    const inputButtonRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = inputButtonRef.current!.value;
        addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
              <label htmlFor='text'>Todo text</label>
              <input type='text' id='text' ref={inputButtonRef}/>
              <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;