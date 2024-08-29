import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);

  const changeHeading = (e) => {
    setHeading(e.target.value);
  };
  const changeDesc = (e) => {
    setDescription(e.target.value);
  };

  const addNewTodo = () => {
    const newObj = {
      head: heading,
      desc: description,
    };
    const updatedTodos = [...todos, newObj];
    setTodos(updatedTodos);
    localStorage.setItem("allTodos", JSON.stringify(updatedTodos));
    setHeading("");
    setDescription("");
  };

  const editMyTodo = (index) => {
    setEditedIndex(index);
    setHeading(todos[index].head);
    setDescription(todos[index].desc);
  };
  const updateTodo = () => {
    let updatedTodos = [...todos];
    updatedTodos[editedIndex] = {
      head: heading,
      desc: description,
    };
    setTodos(updatedTodos);
    localStorage.setItem("allTodos", JSON.stringify(updatedTodos));
    setHeading("");
    setDescription("");
  };

  const deleteMyTodo = (index) => {
    const filteredTodos = todos.filter((todo, i) => i !== index);
    setTodos(filteredTodos);
    localStorage.setItem("allTodos", JSON.stringify(filteredTodos));
  };

  useEffect(() => {
    //jese hin page load hota hei function run karta hei agar array khali hoo too
    const savedTodos = localStorage.getItem("allTodos");
    if (savedTodos) {
      const todoArr = JSON.parse(savedTodos);
      setTodos(todoArr);
    }
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-center my-10 px-4 text-4xl font-bold">My Todo App</h1>

      {/* input fields  */}
      <div className="w-[500px] mx-auto px-6 py-10 flex flex-col gap-4 border shadow-md">
        <input
          type="text"
          className="border h-[40px] px-4 rounded-md"
          placeholder="Heading"
          value={heading}
          onChange={changeHeading}
        />
        <input
          type="text"
          className="border h-[40px] px-4 rounded-md"
          placeholder="Description"
          value={description}
          onChange={changeDesc}
        />
        <div className="w-full flex justify-between items-center gap-4">
          <button
            onClick={() => addNewTodo()}
            className="rounded-md border text-lg py-1 bg-green-300 w-full"
          >
            Add
          </button>
          <button
            onClick={() => updateTodo()}
            className="rounded-md border text-lg py-1 bg-gray-300 w-full"
          >
            Update
          </button>
        </div>
      </div>

      {/* cards  */}
      <div className="max-w-[1000px] mx-auto flex flex-wrap gap-4 px-8 py-12">
        {todos.map(function (val, index) {
          return (
            <Card
              key={index}
              heading={val.head}
              description={val.desc}
              editTodo={() => editMyTodo(index)}
              deleteTodo={() => deleteMyTodo(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
