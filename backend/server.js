const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const expressionSession = require("express-session");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

mongoose.connect("mongodb://localhost/exercise_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
});

app.use(
  expressionSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "strict",
      httpOnly: false,
    },
  })
);

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/registration", usersRouter);
app.use("/login", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
