import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetodo, updatechnage } from "../../Slicereducers/todoSlice";

function Todos() {
  const selectedtodoarray = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleclick = (id) => {
    dispatch(removetodo(id));
  };
  const handlechange = (id, data) => {
    dispatch(updatechnage({ id, data }));
  };
  return (
    <div>
      {selectedtodoarray.map((value) => (
        <li key={value.id}>
          <input
            value={value.msg}
            onChange={(e) => {
              handlechange(value.id, e.target.value);
            }}
          />
          <button
            key={value.id}
            onClick={() => {
              handleclick(value.id);
            }}
          >
            delete
          </button>
        </li>
      ))}
      {console.log(selectedtodoarray)}
    </div>
  );
}

export default Todos;
