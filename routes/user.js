const express = require("express");
const Router = express.Router;

const userRouter = Router();

userRouter.post("/signup", (req, res) => {});
userRouter.post("/signin", (req, res) => {});
userRouter.get("/courses", (req, res) => {});
userRouter.get("/purchases", (req, res) => {});

module.exports = userRouter;
