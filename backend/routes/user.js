const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { deleteUser, getAllUsers } = require("../controller/user");


router.delete("/:id", deleteUser);


  router.get("/", getAllUsers);

module.exports = router;