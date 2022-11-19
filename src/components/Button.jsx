

const Button = ({ onToggle, showAddTask }) => {
    return (
        <button className="button" onClick={onToggle}>{showAddTask ? "close" : "Add Task"}</button>
    )
}

export default Button;