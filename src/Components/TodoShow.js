import React from "react";
import "../Styles/TodoShow.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function TodoShow({ todo, handleDelete }) {
  return (
    <div className="TodoShow">
      <ul className="all">
        {todo.map((t) => (
          <li className="wholeTodo" key={t.id}>
            <span className="SingleTodo">{t.input}</span>
            <label className="done">
              <input type="checkbox" id="checkbox" className="input1" />
            </label>
            <button className="edit">
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