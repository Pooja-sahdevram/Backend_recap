import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [surname, setSurname] = useState("");

  // axios
  // .get("/api/users/data")
  // .then((response) => {
  //   console.log(response.data);
  // })
  // .catch((error) => {
  //   console.error("There was an error!", error);
  // });
  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/users", {
        firstname: name,
        password: password,
        surname: surname,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  return (
    <>
      <form
        action=""
        onSubmit={(Event) => {
          handleSubmit(Event);
        }}
      >
        <input
          type="text"
          placeholder="Enter the name"
          name="firstname"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter the password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter the surname"
          name="surname"
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
