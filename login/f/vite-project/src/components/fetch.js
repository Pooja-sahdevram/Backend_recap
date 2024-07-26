fetch("https://api.github.com/users/Poja-sahdevram")
  .then((e) => e.json())
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log("error" + e);
  });
