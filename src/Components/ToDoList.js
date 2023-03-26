import React from "react";
import ListItem from "./ListItem";
const ToDoList = (props) => {
  return (
    <div className="rounded-xl p-8 space-y-6">
      {props.lists.map((items) => (
        <ListItem
          task={items.task}
          key={items.key}
          id={items.key}
          removeObject={props.onRemoveObject}
        />
      ))}
    </div>
  );
};
export default ToDoList;
