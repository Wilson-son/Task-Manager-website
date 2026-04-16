import Navbar from "./Components/Navbar";
import Summarycards from "./Components/Summarycards";
import Filter from "./Components/Filterform";
import CreateTask from "./Components/Createtask";
import Tasklist from "./Components/Tasklist";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const data = localStorage.getItem("Data");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [priority, setPriority] = useState("All Priority");

  const filteredTasks = tasks.filter((task) => {
    const matchedSearch = task.taskTitle
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchedStatus = status === "All Status" || task.status === status;
    const matchedPriority =
      priority === "All Priority" || task.priority === priority;
    return matchedSearch && matchedStatus && matchedPriority;
  });

  function addTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  // Update task status
  function updateTaskStatus(id, newStatus) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  }

  // Delete task
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  // Edit/update task
  function updateTask(updatedTask) {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(tasks));
  }, [tasks]);

  // Clear filters
  function clearFilter() {
    setSearch("");
    setStatus("All Status");
    setPriority("All Priority");
  }

  return (
    <div className="app">
      <Navbar />
      <Summarycards tasks={filteredTasks} />
      <Filter
        search={search}
        status={status}
        priority={priority}
        onSearch={setSearch}
        onStatusChange={setStatus}
        onPriorityChange={setPriority}
        onClear={clearFilter}
      />

      <div className="dashboard-layout">
        <Tasklist
          filteredTasks={filteredTasks} // pass filteredTasks
          onStatusChange={updateTaskStatus}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
