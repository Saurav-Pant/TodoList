import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import TodoShow from "./Components/TodoShow";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(uuidv4());
  const [edit, setEdit] = useState(null);
  const [Toggle, setToggle] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  // const [complete, setComplete] = useState(false);

  const [alertStyle, setAlertStyle] = useState({
    backgroundColor: "#5dadf8",
  });

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    setAlertStyle(
      isChecked
        ? { backgroundColor: "#5dadf8" }
        : { backgroundColor: "#03C988" }
    );
  }

  const storingInput = (e) => {
    setInput(e.target.value);
  };

  const handleReloading = (e) => {
    e.preventDefault();
    if (!input) {
      alert("De de");
    } else if (input && !Toggle) {
      setTodo(
        todo.map((e) => {
          if (e.id === edit) return { ...e, input: input };
          return e;
        })
      );
      setToggle(true);
      setInput("");
      setEdit(null);
    } else {
      setTodo([{ id: id, input }, ...todo]);
      setId(uuidv4());
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todo.filter((d) => d.id !== id);
    console.log(delTodo);
    setTodo([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todo.find((e) => e.id === id);
    console.log(editTodo.input);
    setInput(editTodo.input);
    setToggle(false);
    setEdit(id);
  };

  return (
    <div className="whole_todo">
      <h1>TodoInput</h1>
      <TodoForm
        input={input}
        storingInput={storingInput}
        handleReloading={handleReloading}
        Toggle={Toggle}
        setToggle={setToggle}
      />
      <TodoList />
      <TodoShow
        todo={todo}
        handleDelete={handleDelete}
        input={input}
        handleEdit={handleEdit}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        alertStyle={alertStyle}
        // complete={complete}
      />
    </div>
  );
}

export default App;
