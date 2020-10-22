const router = require("express").Router();
const notifier = require("node-notifier");
const User = require("../models/user.model");
const NewRegistration = require("../models/newUserRegistration");
const bcrypt = require("bcrypt");

//finds the user that loggedin
router.route("/").get((req, res) => { //GET Request
  User.find()//mongoose method returns a promise
    .then((users) => res.json(users)) //returning the user from the DB
    .catch((err) => res.status(400).json("Error: " + err));
});



router.route("/register").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const registration = new NewRegistration({ username, password });
  NewRegistration.create(req.body, (error, user) => {
    if (error) {
      notifier.notify({
        title: "My notification",
        message: error.errmsg,
        timeout: 5,
        sound: true,
      });
      console.log("didnt register");
    } else {

      notifier.notify({
        title: "My notification",
        message: "Registration successful, please login to continue",
        timeout: 5,
        sound: true,
      });
      console.log("successful registration");
      console.log(user);
    }
  });
  registration
    .save()
    .then(() =>
      notifier.notify({
        title: "My notification",
        message: "User Registered",
        timeout: 5,
        sound: true,
      })
    )
    
    .catch((err) => res.status(400).json("Error: " + err));
  res.end();
});


router.post("/login", (req, res) => {
  const { username, password } = req.body;
  NewRegistration.findOne({ username: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          req.session.userId = user._id
          // console.log(req.session)
          notifier.notify({
            title: "My notification",
            message: "Login successful",
            timeout: 5,
            sound: true,
          });
          console.log("logged in");
        } else {
          notifier.notify({
            title: "My notification",
            message: "Login unsuccessful, please check your credentials",
            timeout: 5,
            sound: true,
          });
          console.log("didnt log in");
        }
      });
    } else {
      notifier.notify({
        title: "My notification",
        message: "Login unsuccessful, please check your credentials",
        timeout: 5,
        sound: true,
      });
      console.log("didnt log in");
    }
  });
  res.end();
});

//Exporting router
module.exports = router;
