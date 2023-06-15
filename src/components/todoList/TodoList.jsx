import { useState } from "react";
import TodoItem from "../todoItem";
import { todos } from "../../mocks/todos";
import "./index.css";

const TodoList = ({ filter }) => {
    const [todoList, setTodoList] = useState(todos);  
    
    return (
        <div className="TodoList">
            <div className="TodoList__info">
                <p className="TodoList__count">{todoList.length}</p>
                <h4 className="TodoList__title">TODOs</h4>
            </div>

            {todoList.map((todo) => (
            <TodoItem todoData={todo} key={todo.id}/>
            ))}
        </div>
    )
}

export default TodoList;