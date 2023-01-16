import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import TodoShow from "./Components/TodoShow";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(uuidv4());

  const storingInput = (e) => {
    setInput(e.target.value);
  };

  const handleReloading = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodo([{ id: id, input }, ...todo]);
      setId(uuidv4());
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todo.filter((d) => d.id !== id);
    setTodo([...delTodo]);
  };
  
 

  return (
    <div className="whole_todo">
      <h1>TodoInput</h1>
      <TodoForm
        input={input}
        storingInput={storingInput}
        handleReloading={handleReloading}
      />
      <TodoList />
      <TodoShow
        todo={todo}
        handleDelete={handleDelete}
        input={input}
        // handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
