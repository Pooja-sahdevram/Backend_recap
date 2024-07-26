import React, { useEffect, useRef, useState } from "react";

function Passwordgenerator() {
  const [length, setlength] = useState(6);
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState(false);
  const [special, setspecial] = useState(false);

  useEffect(() => {
    randomgenerator(length, number, special);
  }, [length, number, special]);

  function randomgenerator(length, number, special) {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRATUVWXYZ";
    if (special) str += "!@#$%^&*()[]";
    if (number) str += "123456789";

    let pass = "";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char];
    }
    setpassword(pass);
  }
  let passwordRef = useRef(null);
  const handlefxn = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div>
      <div>
        {" "}
        <input
          type="range"
          min={6}
          max={100}
          onChange={(e) => setlength(e.target.value)}
        />
        <p1>{length}</p1>
        <input type="checkbox" onChange={() => setnumber((prev) => !prev)} />
        <p1>Number</p1>
        <input type="checkbox" onChange={() => setspecial((prev) => !prev)} />
        <p1>string</p1>
      </div>
      <input
        type="text"
        value={password}
        ref={passwordRef}
        style={{ fontSize: "16px", background: "transparent", border: "none" }}
        readOnly
      />
      <button onClick={handlefxn}>Copy</button>
    </div>
  );
}

export default Passwordgenerator;
