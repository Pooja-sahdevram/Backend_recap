import React, { useEffect } from "react";
import { useState } from "react";
function Currencyconvertor() {
  const [currency, setcurrency] = useState("inr"); //actual currency select
  const [tocurrency, settocurrency] = useState("ant"); //converted
  const [optionss, setoptions] = useState([]);

  const [fromcurrency, setfromcurrency] = useState(1);
  const [convert, setconvert] = useState(1);
  const [multi, setmulti] = useState(1);
  let obj;

  useEffect(() => {
    // Define the async function inside the useEffect
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/" +
            currency +
            ".json"
        );
        const data = await response.json();
        const rate = data[currency][tocurrency];
        setmulti(rate);
        let op = Object.keys(data[currency]);

        setoptions(op);
        // console.log(data);
        // console.log(op);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    // Call the async function
    fetchData();

    // Cleanup function (optional, not needed in this case)
    return () => {
      // Any cleanup logic if needed
    };
  }, [fromcurrency, currency, tocurrency]);
  const handle = () => {
    setconvert(fromcurrency * multi);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <input
          type="text"
          placeholder="currency"
          value={fromcurrency}
          onChange={(e) => setfromcurrency(e.target.value)}
        />{" "}
        <select
          name=""
          id=""
          value={currency}
          onChange={(e) => setcurrency(e.target.value)}
        >
          {optionss.map((e) => (
            <option>{e}</option>
          ))}
        </select>
        <input type="text" placeholder="currency" value={convert} />{" "}
        <select
          name=""
          id=""
          value={tocurrency}
          onChange={(e) => settocurrency(e.target.value)}
        >
          {optionss.map((e) => (
            <option>{e}</option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
        }}
      >
        {" "}
        <button style={{ margin: "5px", width: "100px" }} onClick={handle}>
          Convert
        </button>
        <h1>
          Converted Amount{" "}
          <span style={{ color: "red" }}>{currency.toUpperCase()}</span> to{" "}
          <span style={{ color: "red" }}>{tocurrency.toUpperCase()}</span> is :
          <span style={{ color: "red" }}>
            &nbsp;
            {convert}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Currencyconvertor;
