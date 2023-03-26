import React, { useState } from "react";
import Card from "./UI/Card";

const ListItem = (props) => {
  const [classes, setClasses] = useState({});
  const lineThroughHandler = () => {
    setClasses((prevClasses) => {
      if (prevClasses.textDecoration === "line-through") {
        return {};
      } else {
        return { textDecoration: "line-through" };
      }
    });
  };
  const removeHandler = () => {
    props.removeObject(props.id);
  };
  return (
    <Card className="rounded-md flex justify-between space-x-4 items-center px-4 group">
      <div className="flex items-center space-x-4">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <p className="py-1 text-lg" style={classes}>
          {props.task}
        </p>
      </div>
      <div>
        <div className="space-x-2 md:hidden md:group-hover:block">
          <button onClick={lineThroughHandler} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-white"
              viewBox="0 0 448 512">
              <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <button onClick={removeHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-white"
              viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
};
export default ListItem;
