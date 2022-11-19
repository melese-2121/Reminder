import Task from "./Task";


function Tasks({ tasks, onDelete, onDouble }) {
    

    return (
        <div className="tasks">
           {
            tasks.map((task) => {
                return (<Task onDelete={onDelete} onDouble={onDouble} key={task.id} task={task} />)
            })
           }
        </div>
    )
}

export default Tasks