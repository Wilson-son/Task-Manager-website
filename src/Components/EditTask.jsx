import { useState } from "react";

function EditTask({ task, onSave, onCancel }) {
  const [title, setTitle] = useState(task.taskTitle);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  function handleSave() {
    onSave({
      ...task,
      taskTitle: title,
      description,
      priority
    });
  }

  return (
    <div className="edittask-container">
      <input className="edit" id="edittitle"  value={title}
        onChange={(e) => setTitle(e.target.value)}></input>
      <textarea className="edit" id="editdesc" value={description}
        onChange={(e) => setDescription(e.target.value)}></textarea>
      
       <select className="edit" id="editoption"
          value={priority}
        onChange={(e) => setPriority(e.target.value)}>
        <option >Low</option>
        <option>Medium</option>
        <option>High</option>
       </select>
      
      <span  id="edit-buttons">
        <button onClick={handleSave}>Save</button>
        <button  onClick={onCancel}>Cancel</button>
      </span>
      
    </div>
  );
}

export default EditTask;
