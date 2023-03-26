import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./Components/ToDoList";
import InputItem from "./Components/InputItem";
import React, { useState } from "react";
function App() {
  const Dummy_list = [
    {
      key: "1",
      task: "Learn React",
    },
    {
      key: "2",
      task: "Learn js",
    },
  ];
  const [list, setList] = useState(Dummy_list);
  const inputHandler = (input) => {
    setList((prevList) => {
      return [input, ...prevList];
    });
    console.log(list);
  };
  const removeObjectHandler = (keyId) => {
    setList((prevList) => {
      const ar = prevList.filter((items) => items.key !== keyId);
      return ar;
    });
  };
  let todolist;
  if (list.length > 0) {
    todolist = <ToDoList lists={list} onRemoveObject={removeObjectHandler} />;
  } else {
    todolist = (
      <p className="text-center font-bold text-lg md:text-xl">
        Your list is empty. may be add some task!
      </p>
    );
  }
  console.log(list);
  return (
    <div className="max-w-3xl space-y-10 mx-auto my-10 px-4">
      <InputItem onSaveInput={inputHandler} />
      {todolist}
    </div>
  );
}

export default App;
