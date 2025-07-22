const express = require("express");
const router = express.Router();
const {createParcel, getAllParcels, updateParcel, getOneParcel, getUsersParcel, deleteParcel} = require("../controller/parcel");
const { verifyToken, verifyTokenAndAuthorization } = require("../middlewares/verifyToken");


router.post("/",createParcel);


router.get("/",getAllParcels);


router.put("/:id",updateParcel);



router.get("/find/:id", getOneParcel);



router.post("/me", getUsersParcel);



router.delete("/:id", deleteParcel);

module.exports = router;