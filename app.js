const express = require("express");
require("dotenv").config();
const app = express();
require("./database/db");
const connectDB = require("./database/mangodb");
const userroutes = require("./server/routes/user");
const mongouserroutes = require("./server/routes/usermongoose");

app.use(express.json());

app.use(express.static("public"));
app.use("/api/user", userroutes);
app.use("/mongoapi/user", mongouserroutes);
port = process.env.PORT || 3001;
connectDB();
app.listen(port, () => {
  console.log(`server start on localhost:${port}`);
});
