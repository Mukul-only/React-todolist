import React, { useState } from "react";
import Card from "./UI/Card";
const InputItem = (props) => {
  const [input, setInput] = useState("");
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      const taskItem = {
        task: input,
        key: Math.trunc(Math.random() * 100).toString(),
      };

      props.onSaveInput(taskItem);
      setInput("");
    }
  };

  return (
    <Card className="px-8 py-6 rounded-xl">
      <form
        className="flex justify-between md:items-center md:space-x-4 flex-col md:flex-row space-y-6 md:space-y-0 "
        onSubmit={submitHandler}>
        <input
          type="text"
          className="outline-none  text-black px-2 rounded flex-1 focus:bg-cyan-100 text-center md:text-left py-1"
          placeholder="what are you going to do next?"
          onChange={inputChangeHandler}
          value={input}
        />
        <button
          type="submit"
          className="px-6 py-1 text-white rounded bg-[#003554] ">
          Add Task
        </button>
      </form>
    </Card>
  );
};

export default InputItem;
