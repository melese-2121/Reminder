import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";

import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getDataFromDB = async () => {
      const dbTasks = await fetchTasks();
      await setTasks(dbTasks);
    };

    getDataFromDB();
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    return await res.json();
  };

  // Delete task
  const deleteTask = async (id) => {
    const newTasks = await tasks.filter((task) => task.id !== id);
    setTasks(newTasks);

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
  };

  //Tetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Toggle reminder
  const onDoubleClick = async (id) => {
    const taskToBeUpdated = await fetchTask(id);
    const updTask = { ...taskToBeUpdated, reminder: !taskToBeUpdated.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    const updatedTask = await tasks.map((task) => {
      if (task.id === id) return { ...task, reminder: data.reminder };
      else return task;
    });
    await setTasks(updatedTask);
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    setTasks([...tasks, await res.json()]);
  };

  // Toggle show add task
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="app">
      <Header onToggle={toggleShowAddTask} showAddTask={showAddTask} />
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks onDouble={onDoubleClick} onDelete={deleteTask} tasks={tasks} />
      ) : (
        <h4 style={{ color: "red" }}>No task to show</h4>
      )}
    </div>
  );
}

export default App;
