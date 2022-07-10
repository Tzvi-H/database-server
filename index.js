const express = require("express");
const app = express();

const data = {};

// Will also work for multiple key/values (http://localhost:4000/set?a=1&b=2)
// http://localhost:4000/set?a will add {a: ''} to memory

app.get("/set", (req, res) => {
  Object.assign(data, req.query);
  res.send("ok");
});

app.get("/get", (req, res) => {
  const key = req.query.key;

  if (data.hasOwnProperty(key)) {
    res.send(data[key]);
  } else {
    res.send("not found");
  }
});

app.listen(4000, () => console.log("server listening on port 4000"));
