const router = require("express").Router();
const notifier = require("node-notifier");
let User = require("../models/user.model");
let NewRegistration = require("../models/newUserRegistration");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() =>
      notifier.notify({
        title: "My notification",
        message: "User Created",
        timeout: 5,
        sound: true,
      })
    )
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post((req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;

  const registration = new NewRegistration({ username, password });

  registration
    .save()
    .then(() =>
      notifier.notify({
        title: "My notification",
        message: "User Registerd",
        timeout: 5,
        sound: true,
      })
    )
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
