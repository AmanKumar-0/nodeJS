const express = require("express");

require("../src/db/conn");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  res.send("Hello sir");
});

app.listen(port, () => {
  console.log(`port is live at ${port}`);
});
