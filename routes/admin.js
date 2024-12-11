const express = require("express");
const Router = express.Router;
const { adminModel } = require("../db");
const adminRouter = Router();

// adminRouter.use(adminMiddleware);

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "heyyy",
  });
});
adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "heyyy",
  });
});
adminRouter.get("/course", (req, res) => {
  res.json({
    message: "heyyy",
  });
});
adminRouter.put("/course", (req, res) => {
  res.json({
    message: "heyyy",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "heyyy",
  });
});

module.exports = adminRouter;
