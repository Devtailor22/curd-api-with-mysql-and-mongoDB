const express = require("express");
const usercontroller = require("../controller/usercontroller");
const routes = express.Router();

routes.get("/", usercontroller.home);
routes.post("/adduser", usercontroller.insert);
routes.put("/upeuser/:id", usercontroller.update);
routes.delete("/deluser/:id", usercontroller.delete);

module.exports = routes;
