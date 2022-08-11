const mongoose = require("mongoose");

mongoose
  .connect("", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection seccessfull");
  })
  .catch((e) => {
    console.log("Not possible");
  });
