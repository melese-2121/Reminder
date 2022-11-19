import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onDouble }) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => {
      onDouble(task.id);
    }}>
        <h3> { task.type } <FaTimes onClick={() => {
          onDelete(task.id)
        }} style={{color: "red", cursor: "pointer"}} /></h3>
        <p> { task.time }</p>
    </div>
  )
}


export default Task