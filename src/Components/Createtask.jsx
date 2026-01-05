import { useState } from "react";

function CreateTask({addTask}) {

  const [formData, setFormData] = useState({
    taskTitle: "",
    description: "",
    priority: "Low",
    dueDate: "",
    tags: "",
    status: "To do", 
  });

  
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }


  function handleSubmit(e) {
    e.preventDefault();
    
    const newData={
      ...formData, id:Date.now()
    };
    console.log("Task Submitted:", formData);
    addTask(newData);

    setFormData({
      taskTitle: "",
      description: "",
      priority: "Low",
      dueDate: "",
      tags: "",
      status: "To do",
    });
  }
  
  
  return (
    <div className="create-form">
      <h3>Create New Task</h3>
      <form onSubmit={handleSubmit}>
        <label>Task Title</label>
        <input
          type="text"
          name="taskTitle"
          value={formData.taskTitle}
          onChange={handleChange}
          placeholder="Enter the title"
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter the description"
          required
        />

        <label>Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />

        <label>Tags</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="design, frontend, urgent"
        />
        <small>Separate tags with commas</small>

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;