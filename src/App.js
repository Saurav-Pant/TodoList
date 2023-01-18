import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import TodoShow from "./Components/TodoShow";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState(""); //For Taking Input By User.
  const [todo, setTodo] = useState([]); //For List Of Inputs.
  const [id, setId] = useState(uuidv4()); //To Generate Unique Id.
  const [edit, setEdit] = useState(null); //For Editing Todo.
  const [Toggle, setToggle] = useState(true); //To Toggle Between Add New Task and Edit Task.
  const [isChecked, setIsChecked] = useState(false); //To Checked Between.
  const [itemsToShow, setItemsToShow] = useState("all");

  const storingInput = (e, id) => {
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
      setTodo([{ id: id, input, isChecked, itemsToShow: "all" }, ...todo]);
      setId(uuidv4());
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todo.filter((d) => d.id !== id);
    console.log(delTodo);
    setTodo([...delTodo]);
    setInput("");
  };

  const handleEdit = (id) => {
    const editTodo = todo.find((e) => e.id === id);
    setInput(editTodo.input);
    setToggle(false);
    setEdit(id);
  };

  // function handleCheckboxChange(i) {
  //   const newTodo = [...todo];
  //   newTodo[i].isChecked = !newTodo[i].isChecked;
  //   setTodo(newTodo);
  // }
  
  const handleFilterChange = (filter) => {
    setItemsToShow(filter);
  };

  let filteredItems = [];
  if (itemsToShow === "all") {
    filteredItems = todo;
  } else if (itemsToShow === "todo") {
    filteredItems = todo.filter((todo) => !todo.isChecked);
  } else if (itemsToShow === "done") {
    filteredItems = todo.filter((todo) => todo.isChecked);
  }
  return (
    <div className="whole_todo">
      <h1>TodoInput</h1>
      <TodoForm
        input={input}
        storingInput={storingInput}
        handleReloading={handleReloading}
        Toggle={Toggle}
      />

      <TodoList handleFilterChange={handleFilterChange} />

      <TodoShow
        todo={todo}
        filteredItems={filteredItems}
        handleDelete={handleDelete}
        input={input}
        handleEdit={handleEdit}
        // handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}

export default App;
