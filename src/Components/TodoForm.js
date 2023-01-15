import React from "react";
import "../Styles/TodoForm.scss";

function TodoForm({ input, storingInput, handleReloading }) {
  return (
    <div className="input_Field">
      <form>
        <input
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={storingInput}
        />
        <br />
        <button onClick={handleReloading}>Add New Task</button>
      </form>
    </div>
  );
}

export default TodoForm;
