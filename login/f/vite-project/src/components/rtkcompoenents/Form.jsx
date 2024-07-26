import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Slicereducers/todoSlice";
addTodo;
function Form() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const Addtodohandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setinput("");
  };
  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Enter todo"
          />
        </div>
        <button type="submit" onClick={Addtodohandler}>
          click
        </button>
      </form>
    </div>
  );
}

export default Form;
