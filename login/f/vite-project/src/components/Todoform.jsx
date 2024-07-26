import React, { useState, useId, useEffect } from "react";

function Todoform() {
  const [label, setlabel] = useState("");
  const [actualval, setactualval] = useState(() => {
    const storedval = localStorage.getItem("value");
    return storedval ? JSON.parse(storedval) : [];
  });

  useEffect(() => {
    const storedval = JSON.parse(localStorage.getItem("value"));
    if (storedval) {
      setactualval(storedval);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(actualval));
  }, [actualval]);

  const handleclick = (index) => {
    const rawl = actualval.filter((_, i) => i !== index);
    setactualval(rawl);
    console.log(rawl);
  };
  const update = (index, newvalue) => {
    const updatenewwarry = actualval.map((elemet, i) =>
      i === index ? newvalue : elemet
    );
    setactualval(updatenewwarry);
  };

  return (
    <div>
      <label>Enter here</label>
      <input
        className=""
        placeholder="Enter here"
        value={label}
        onChange={(e) => {
          setlabel(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setactualval([...actualval, label]);

          setlabel("");
        }}
      >
        click
      </button>
      {actualval.map((elemet, index) => (
        <li key={index}>
          {
            <input
              value={elemet}
              onChange={(e) => update(index, e.target.value)}
              style={{ backgroundColor: "transparent", border: "none" }}
            />
          }
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              handleclick(index);
            }}
          >
            remove
          </button>
        </li>
      ))}
      {console.log(actualval)}
    </div>
  );
}

export default Todoform;
