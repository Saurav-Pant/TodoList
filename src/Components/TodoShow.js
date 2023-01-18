import React from "react";
import "../Styles/TodoShow.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function TodoShow({
  todo,
  filteredItems,
  handleDelete,
  handleEdit,
  // handleCheckboxChange,
}) {
  return (
    <div className="TodoShow">
      <ul className="all">
        {filteredItems.map((t, index) => (
          <li
            className="wholeTodo"
            key={t.id}
            // style={{ backgroundColor: t.isChecked ? "#03C988" : "#5dadf8" }}
          >
            <span className="SingleTodo">{t.input}</span>
            <label className="done">
              <input
                type="checkbox"
                id="checkbox"
                className="input1"
                checked={todo.isChecked}
                // onChange={() => handleCheckboxChange(index)}
              />
            </label>
            <button className="edit" onClick={() => handleEdit(t.id)}>
              <AiFillEdit style={{ color: "green", height: "10px" }} />
            </button>
            <button className="delete" onClick={() => handleDelete(t.id)}>
              <AiFillDelete style={{ color: "red", height: "10px" }} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoShow;
