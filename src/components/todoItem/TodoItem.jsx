import "./index.css";

const TodoItem = ({ todoData }) => {
    return (
        <div className="TodoItem">
            <p className="TodoItem__title" style={{ textDecoration: DataTransfer.completed && "line-through" }}>
                {todoData.title}
            </p>
            <div className="TodoItem__details">
                <img src={`../../assets/users/${todoData.userId}.png`} alt={`user ${todoData.userId}`} className="TodoItem__user" />
                <p className={`TodoItem__status ${todoData.completed ? "TodoItem__done" : "TodoItem__todo"}`}>
                    {`${todoData.completed ? "DONE" : "TODO"}`}
                </p>
            </div>
        </div>
    )
}

export default TodoItem;