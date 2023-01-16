import React from "react";
import "../Styles/TodoShow.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function TodoShow({
  todo,
  handleDelete,
  handleEdit,
  isChecked,
  handleCheckboxChange,
  alertStyle,
  complete,
}) {
  return (
    <div className="TodoShow">
      <ul className="all">
        {todo.map((t) => (
          <li className="wholeTodo" key={t.id} style={alertStyle}>
            <span className="SingleTodo">{t.input}</span>
            <label className="done">
              <input
                type="checkbox"
                id="checkbox"
                className="input1"
                checked={isChecked}
                onChange={handleCheckboxChange}
                // complete={complete}
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
