import React from "react";
import "../Styles/TodoList.scss";

function TodoList({ handleFilterChange }) {
  return (
    <div className="Whole_TodoList">
      <h1>TodoList</h1>
      <div className="select">
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("done")}>Done</button>
        <button onClick={() => handleFilterChange("todo")}>Todo</button>
      </div>
    </div>
  );
}

export default TodoList;
