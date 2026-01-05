import { LuListTodo } from "react-icons/lu";
function Navbar() {
  return (
   
  <nav className="navbar">
    <div className="navbar-left">
      <div className="logo-icon"><LuListTodo /> </div>
      <span className="logo-text">Task Manager Pro</span>
    </div>


    <div className="navbar-right">
      <button className="nav-btn active">Dashboard</button>
    </div>
  </nav>
  )
}

export default Navbar;