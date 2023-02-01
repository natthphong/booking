
const user = require('../models/user');

module.exports = {
    updateUser: async (req, res, next) => {
        try {
            const updateUser = await user.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updateUser);
        } catch (error) {

            next(error);
        }
    },
    deleteUser: async (req, res, next) => {

        try {
            const deleteUser = await user.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        } catch (error) {

            next(error);
        }
    },
    getUser: async (req, res, next) => {

        try {
            const User = await user.findById(req.params.id);
            res.status(200).json(User);
        } catch (error) {

            next(error);
        }
    },
    getallUser: async (req, res, next) => {
        const failed = true;
        try {
            const Users = await user.find();
            res.status(200).json(Users);
        } catch (error) {

            next(error);
        }
    }
}