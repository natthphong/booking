const Room = require("./../models/room.js");
const Hotel = require("./../models/hotel.js");
const { createError } = require("../untils/error.js");

module.exports = {
  createRoom: async (req, res, next) => {

    const hotelId = req.params.hotelid;
   // const newRoom = new Room(req.body);

    try {
        const savedRoom = await Room.create(req.body);
        console.log(savedRoom);
   
      try {
        await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom.id } });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
    res.status
  },
  updateRoom: async (req, res,next) => {
    try {
      const updateRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if(updateRoom === null) next(createError(404,"not found room"));
      res.status(200).json(updateRoom);
    } catch (error) {
      next(createError(404,"not found room"));
    }
  },
  deleteRoom: async (req, res) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
      await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}});
      } catch (error) {
        res.status(500).json(error);
      }
      res.status(200).json("Room has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getRoom: async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);

      res.status(200).json(room);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getallRoom: async (req, res, next) => {
    const failed = true;
    try {
      const Rooms = await Room.find();
      res.status(200).json(Rooms);
    } catch (error) {
      next(error);
    }
  },
};
