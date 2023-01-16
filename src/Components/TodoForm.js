import React from "react";
import "../Styles/TodoForm.scss";

function TodoForm({ input, storingInput, handleReloading, Toggle, setToggle }) {
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
        {/* <button onClick={handleReloading}>Add New Task</button> */}
        {Toggle ? (
          <button onClick={handleReloading}>Add New Task</button>
        ) : (
          <button onClick={handleReloading}>Edit</button>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
