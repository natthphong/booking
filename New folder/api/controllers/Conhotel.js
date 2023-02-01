const hotel  = require('../models/hotel');

module.exports = {
    createHotel: async (req, res) => {
        const json = req.body;
        const newHotel = new hotel(json);
        try {
            const savedHotel = await newHotel.save()
            res.status(200).json(savedHotel);
        } catch (error) {

            res.status(500).json(error);
        }
    },
    updateHotel: async (req, res) => {

        try {
            const updateHotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updateHotel);
        } catch (error) {

            res.status(500).json(error);
        }
    },
    deleteHotel: async (req, res) => {

        try {
            const deleteHotel = await hotel.findByIdAndDelete(req.params.id);
            res.status(200).json("Hotel has been deleted");
        } catch (error) {

            res.status(500).json(error);
        }
    },
    getHotel: async (req, res) => {

        try {
            const Hotel = await hotel.findById(req.params.id);
            res.status(200).json(Hotel);
        } catch (error) {

            res.status(500).json(error);
        }
    },
    getallHotel: async (req, res, next) => {
        const failed = true;
        try {
            const Hotels = await hotel.find();
            res.status(200).json(Hotels);
        } catch (error) {

            next(error);
        }
    }
}