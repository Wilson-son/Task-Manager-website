import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

function Filter({ search, status, priority, onSearch, onStatusChange, onPriorityChange, onClear }) {
  const isFiltering = search.trim() !== "" || status !== "All Status" || priority !== "All Priority";

  return (
    <div className="filter-container">
      <div className="filter-left">
        <span className="filter-icon" style={{ marginTop: "3px" }}>
          <FiFilter />
        </span>
        <span className="filter-text">Filters:</span>
      </div>

      <div className="search-box">
        <span className="search-icon">
          <IoIosSearch />
        </span>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <select className="dropdown" value={status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="All Status">All Status</option>
        <option value="To do">To do</option>
        <option value="In progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select className="dropdown" value={priority} onChange={(e) => onPriorityChange(e.target.value)}>
        <option value="All Priority">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {isFiltering && (
        <button className="dropdown" onClick={onClear}>
          Clear Filters
        </button>
      )}
    </div>
  );
}

export default Filter;
