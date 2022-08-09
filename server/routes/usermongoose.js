const express = require("express");
const router = express.Router();
const mongocontroller = require("../controller/mongooseusercontroller");

router.get("/", mongocontroller.view);
router.post("/adduser", mongocontroller.adduser);
router.put("/upeuser/:id", mongocontroller.upeuser);
router.delete("/deluser/:id", mongocontroller.deluser);

module.exports = router;
