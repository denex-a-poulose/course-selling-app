const express = require("express");
const Router = express.Router;
const { userModel } = require("../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

const userRouter = Router();
userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await userModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "Signed Up",
  });
});
userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user.id,
      },
      JWT_USER_PASSWORD
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Invalid Credentials",
    });
  }
});
userRouter.get("/courses", (req, res) => {});
userRouter.get("/purchases", (req, res) => {});

module.exports = userRouter;
