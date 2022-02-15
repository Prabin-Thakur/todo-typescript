import React, { useContext, useState} from "react";
import Todo from "../models/todo";

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (text: string) => void;
}

export const TodosContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
  });

export function useTodos() {
    return useContext(TodosContext);
}

const TodoProvider: React.FC = props => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
          return prevTodos.concat(newTodo);
        });
      };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
          return prevTodos.filter((todo) => todo.id !== todoId);
        });
      };

    const contextValue = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodoProvider;