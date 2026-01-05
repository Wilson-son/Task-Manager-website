import React, { useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditTask from "./EditTask";

function Tasklist({ filteredTasks, onStatusChange, deleteTask, updateTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  const renderTask = (task) => {
    const isEditing = editingTaskId === task.id;
    const isOverdue = task.dueDate && task.dueDate < today && task.status !== "Completed";

    return (
      <div key={task.id} className="task-item">
        {isEditing ? (
          <EditTask
            task={task}
            onSave={(updatedTask) => {
              updateTask(updatedTask);
              setEditingTaskId(null);
            }}
            onCancel={() => setEditingTaskId(null)}
          />
        ) : (
          <>
            <div className="task-header">
              <h3>{task.taskTitle}</h3>
              <span className="task-actions">
                <CiFlag1
                  className={`priority-icon ${
                    task.priority === "High"
                      ? "high"
                      : task.priority === "Medium"
                      ? "medium"
                      : "low"
                  }`}
                />
                <button className="icon-btn" onClick={() => setEditingTaskId(task.id)}>
                  <FiEdit2 />
                </button>
                <button className="icon-btn delete" onClick={() => deleteTask(task.id)}>
                  <RiDeleteBin5Line />
                </button>
              </span>
            </div>

            <p>{task.description}</p>
            <small>#{task.tags}</small>

            <div className="task-meta">
              <select
                value={task.status}
                onChange={(e) => onStatusChange(task.id, e.target.value)}
              >
                <option value="To do">To do</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>

              <span>{task.priority}</span>
              <span style={{ color: isOverdue ? "red" : "black" }}>
                {task.dueDate}
                {isOverdue && " (Overdue)"}
              </span>
            </div>
          </>
        )}
      </div>
    );
  };

  // Group tasks by status
  const toDoTask = filteredTasks.filter((task) => task.status === "To do");
  const toProgressTask = filteredTasks.filter((task) => task.status === "In progress");
  const completedTask = filteredTasks.filter((task) => task.status === "Completed");

  return (
    <div className="list-container">
      <div className="to-do">
        <div className="card1">
          <div className="list-status">
            <span className="dot"></span>
            <span>To Do</span>
          </div>
          {toDoTask.length > 0 ? toDoTask.map(renderTask) : <h4>No Tasks in this category</h4>}
        </div>
      </div>

      <div className="in-progress">
        <div className="card1">
          <div className="list-status">
            <span className="dot"></span>
            <span>In Progress</span>
          </div>
          {toProgressTask.length > 0 ? toProgressTask.map(renderTask) : <h4>No Tasks in this category</h4>}
        </div>
      </div>

      <div className="completed">
        <div className="card1">
          <div className="list-status">
            <span className="dot"></span>
            <span>Completed</span>
          </div>
          {completedTask.length > 0 ? completedTask.map(renderTask) : <h4>No Tasks in this category</h4>}
        </div>
      </div>
    </div>
  );
}

export default Tasklist;
