import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    const addNewTask = (e) => {
        e.preventDefault();

        if(task === ""){
            alert("Please add task!")
            return
        }
        onAdd({type: task, time: date, reminder: reminder});
        setTask("");
        setDate("");
        setReminder(false);
    }



    return(
        <form className="form" onSubmit={addNewTask}>
            <div className="task-type">
                <label htmlFor="type">Task</label><br />
                <input type="text" value={task} onChange={(e) => {setTask(e.target.value)}} name="type" placeholder="Write the task here..." />
            </div>
            <div className="task-date">
                <label htmlFor="date">Date & Time</label><br />
                <input type="text" value={date} onChange={(e) => {setDate(e.target.value)}} name="date" placeholder="Write the date here..." />
            </div>
            <div className="task-reminder">
                <label htmlFor="reminder">Set Reminder</label><br />
                <input type="checkbox" value={reminder} onChange={(e) => {setReminder(e.currentTarget.checked)}} />
            </div>
            <input type="submit" className="task-submit" value="Save task" />
        </form>
    )
}

export default AddTask;