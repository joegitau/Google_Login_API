const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose
  .connect(keys.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to MongoDB..."))
  .catch(err => console.error(err, "cannot connect to MongoDB"));
