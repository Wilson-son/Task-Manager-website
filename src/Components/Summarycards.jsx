import { MdOutlineAddTask,MdDonutLarge } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";

function Summarycards({tasks}) {
  
   const totalTasks=tasks.length;
   const toDoTask = tasks.filter((task) => task.status === "To do").length;
   const toProgressTask = tasks.filter((task) => task.status === "In progress").length;
   const completedTask = tasks.filter((task) => task.status === "Completed").length;
   const highPriorityTask=tasks.filter((task)=>task.priority==="High").length;

  return (
    <><div className="title">
        <h3 style={{ fontWeight: "bold" }}>Dashboard Overview</h3>
        <p>Manage your tasks and track progress efficiently</p>
     </div><div className="card-container">
           <div className="card">
              <div className="icon1" style={{ backgroundColor: "rgba(132, 196, 235, 0.15)", color: "rgba(5, 134, 239, 1)" }}><MdOutlineAddTask /></div>
              <div className="card-cont"><p>Total Task </p><p>{totalTasks}</p>
              </div>
           </div>
           <div className="card">
              <div className="icon1" style={{ backgroundColor: "rgba(122, 145, 160, 0.15)", color: "rgba(72, 82, 91, 1)" }}><MdDonutLarge /></div>
              <div className="card-cont">
                 <p>To Do</p>
                 <p>{toDoTask}</p>
              </div>
           </div>
           <div className="card">
              <div className="icon1" style={{ backgroundColor: "rgba(225, 223, 79, 0.15)", color: "rgba(235, 224, 23, 1)" }}><IoMdTime /></div>
              <div className="card-cont">
                 <p>In Progress </p>
                 <p>{toProgressTask}</p>
              </div>
           </div>
           <div className="card">
              <div className="icon1" style={{ backgroundColor: "rgba(82, 175, 116, 0.15)", color: "rgba(18, 205, 99, 1)" }}><IoCheckmarkCircleOutline /></div>
              <div className="card-cont">
                 <p>Completed</p>
                 <p>{completedTask}</p>
              </div>
           </div>
           <div className="card">
              <div className="icon1" style={{ backgroundColor: "rgba(210, 93, 93, 0.15)", color: "rgba(251, 8, 0, 1)" }}><BsExclamationCircle /></div>
              <div className="card-cont">
                 <p>High priority</p>
                 <p>{highPriorityTask}</p>
              </div>
           </div>
        </div></>
  )
}

export default Summarycards;