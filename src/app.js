const express = require("express");
const connectDb = require("../src/db/conn");
connectDb();
const router = require("../src/routers/routes");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use(router);

app.listen(port, () => {
  console.log(`port is live at ${port}`);
});

// app.get("/", async (req, res) => {
//   res.send("Hello sir");
// });
