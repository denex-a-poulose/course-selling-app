const express = require("express");
const Router = express.Router;
require("dotenv").config();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

const adminRouter = Router();
// adminRouter.use(adminMiddleware);

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "Signed Up",
  });
});
adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email,
    password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin.id,
      },
      JWT_ADMIN_PASSWORD
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
adminRouter.get("/", (req, res) => {
  res.json({
    message: "heyyy",
  });
});
adminRouter.put("/", (req, res) => {
  res.json({
    message: "heyyy",
  });
});
adminRouter.get("/bulk", (req, res) => {
  res.json({
    message: "heyyy",
  });
});

module.exports = adminRouter;
