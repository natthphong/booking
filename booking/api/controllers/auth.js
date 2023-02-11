const bcrypt = require("bcryptjs");
const { createError } = require("../untils/error.js");
const user = require("../models/user.js");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res, next) => {
    debugger
   console.log(req.body)
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });

      await newUser.save();
      res.status(200).send("User has been created.");
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const User = await user.findOne({ username: req.body.username });
      if (!User) return next(createError(404, "User not found"));

      const isPass = await bcrypt.compare(req.body.password, User.password);
      if (!isPass) return next(createError(404, "Wrong password or username!"));

      const token = jwt.sign(
        { id: User._id, isAdmin: User.isAdmin },
        process.env.JWT
      );

      const { password, isAdmin, ...otherDetails } = User._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ otherDetails });
    } catch (error) {
      next(error);
    }
  },
};
