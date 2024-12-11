const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const userRouter = require("./routes/user");
const courseRouter = require("./routes/course");
const adminRouter = require("./routes/admin");

const app = express();
app.use(bodyParser.json()); // for parsing application/json

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

const main = async () => {
  mongo_user_password = process.env.MONGO_USER_PASSWORD;

  await mongoose.connect(
    `mongodb+srv://denex-mongo:${mongo_user_password}@cluster0.abc6y.mongodb.net/course-app`
  );

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

main();
