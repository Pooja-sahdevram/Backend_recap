import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [locationss, setlocationss] = useState("london");
  const [newlocation, setnewlocation] = useState("london");

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=0f906fb403f74c9696664918241107&q=${locationss}&aqi=no`
    )
      .then(async (e) => await e.json())
      .then((e) => setWeather(e.current.temp_c));
  }, [locationss]);
  const handle = () => {
    setlocationss(newlocation);
    console.log(locationss);
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter location"
        onChange={(e) => {
          setnewlocation(e.target.value);
        }}
        value={newlocation}
      />
      <button onClick={handle}>click</button>
      <h1>
        wether {locationss} is {weather} &deg;
        {console.log(locationss)}
      </h1>
    </>
  );
}

export default Weather;
