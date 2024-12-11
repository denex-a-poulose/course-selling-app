const express = require("express");
const Router = express.Router;

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "heyyy",
  });
});
courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "heyyy",
  });
});

module.exports = courseRouter;
