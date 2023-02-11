const hotel  = require('../models/hotel');

module.exports = {
    createHotel: async (req, res) => {
        console.log(req.body)    
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
        const {limit,max , min , ...others} = req.query;
        console.log(max);
        try {
            const Hotels = await hotel.find({...others , cheapestPrice:{$gt:min |1, $lt:max|| 999}}).limit(limit);
            res.status(200).json(Hotels);
        } catch (error) {

            next(error);
        }
    },
    
    countByCity: async (req, res, next) => {
       
        const cities = req.query.cities.split(",");
        try {
            const list = await Promise.all(cities.map(city=>{
                return hotel.countDocuments({city:city});
            }))

            res.status(200).json(list);
        } catch (error) {

            next(error);
        }
    },
    countByType: async (req, res, next) => {

       
        
        try {
            const hotelCount = await hotel.countDocuments({type:"hotel"})
            const apartCount = await hotel.countDocuments({type:"apart"})
            const resortCount = await hotel.countDocuments({type:"resort"})
            const villaCount = await hotel.countDocuments({type:"villa"})
            const cabinCount = await hotel.countDocuments({type:"cabin"})

            res.status(200).json([{
                type:"hotel" , count:hotelCount
            },
            {
                type:"apart" , count:apartCount
            },
            {
                type:"resort" , count:resortCount
            },
            {
                type:"villa" , count:villaCount
            },
            {
                type:"cabin" , count:cabinCount
            },
        ]);
        } catch (error) {

            next(error);
        }
    }
}