const router = require("express").Router();
const notifier = require("node-notifier");
const User = require("../models/user.model");
const NewRegistration = require("../models/newUserRegistration");
const bcrypt = require("bcrypt");

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

// router.route("/register").post((req, res) => {
//   console.log(req.body);
//   const username = req.body.username;
//   const password = req.body.password;

  // const registration = new NewRegistration({ username, password });

//   registration
//     .save()
//     .then(() =>
//       notifier.notify({
//         title: "My notification",
//         message: "User Registerd",
//         timeout: 5,
//         sound: true,
//       })
//     )
//     .catch((err) => res.status(400).json("Error: " + err));
//   res.end();
// });

router.route("/register").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const registration = new NewRegistration({ username, password });
  NewRegistration.create(req.body, (error, user) => {
    if (error) {
      console.log("didnt register");
      console.log(error);
    } else {
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

// router.route("/register").post((req, res) => {
//   Users.create(req.body, (error, user) => {
//     if (error) {
//       return res.redirect("/guest-home");
//     } else {
//       res.redirect("/login");
//     }
//   });
// });

  // registration
  //   .save()
  //   .then(() =>
  //     notifier.notify({
  //       title: "My notification",
  //       message: "User Registered",
  //       timeout: 5,
  //       sound: true,
  //     })
  //   )
  //   .catch((err) => res.status(400).json("Error: " + err));

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  NewRegistration.findOne({ username: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          // req.session.userId = user._id;
          console.log(user._id);
          console.log(req.sessionID);
          console.log("logged in");
        } else {
          console.log("didnt log in");
        }
      });
    } else {
      console.log("didnt log in");
    }
  });
  res.end();
});

module.exports = router;
