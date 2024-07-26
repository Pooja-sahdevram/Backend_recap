import React from "react";
import { toggletheme } from "./slicereducer/themeslice";
import { useDispatch, useSelector } from "react-redux";

function Themechanger() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme); // Access theme from state.theme.theme

  const handleclick = () => {
    dispatch(toggletheme(!theme)); // Toggle the current theme state
  };

  return (
    <div>
      <div
        onClick={() => {
          handleclick();
        }}
        style={{ cursor: "pointer" }}
      >
        Current Theme: {theme ? "Light" : "Dark"}
      </div>
    </div>
  );
}

export default Themechanger;
