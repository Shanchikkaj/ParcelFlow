const Parcel = require("../models/Parcel");

//create a parcel
const createParcel = async (req, res) => {
  try {
    const newParcel = Parcel(req.body);
    const parcel = await newParcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};
//get all parcels
const getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find().sort({ createdAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get one parcel
const getOneParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get User's Parcel

const getUsersParcel = async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: { $regex: new RegExp(`^${req.body.email}$`, 'i') } }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete a parcel
const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Parcel has been deleted!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update Parcel
const updateParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  deleteParcel,
  getUsersParcel,
  getOneParcel,
  getAllParcels,
  updateParcel,
  createParcel,
};
