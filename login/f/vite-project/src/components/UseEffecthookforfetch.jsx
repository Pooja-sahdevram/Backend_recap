import React, { useEffect, useState } from "react";

function UseEffecthookforfetch() {
  const [value, setvalue] = useState("User");
  const [url, seturl] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/Pooja-sahdevram")
      .then((e) => e.json())
      .then((e) => {
        setvalue(e.login), seturl(e.url);
      })
      .catch((e) => {
        console.log("Error Type is :" + e);
      });
  }, []);
  return (
    <div>
      <h1>
        {"username is " + value}
        <br /> <br /> {"Url  " + url}
      </h1>
    </div>
  );
}

export default UseEffecthookforfetch;
