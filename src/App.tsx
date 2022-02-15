import TodoProvider from "./store/TodosContext";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import "./App.css";

const App = () => {
    return (
        <TodoProvider>
            <NewTodo />
            <Todos />
        </TodoProvider>
    );
};

export default App;