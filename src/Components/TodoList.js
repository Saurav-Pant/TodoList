import React from "react";
import "../Styles/TodoList.scss";
function TodoList(handleUndone) {
  return (
    <div className="Whole_TodoList">
      <h1>TodoList</h1>
      <div className="select">
        <button>All</button>
        <button>Done</button>
        <button>Todo</button>
      </div>
    </div>
  );
}

export default TodoList;
