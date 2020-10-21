const router = require("express").Router();
const notifier = require("node-notifier");
let Exercise = require("../models/exercise.model");

//CRUD Routes
//GET Request, finding exercises from DB
router.route("/").get((req, res) => { 
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST Request, converting the data types into a new class of the newExercise for the DB and notify.
router.route("/add").post((req, res) => { 
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() =>
      notifier.notify({
        title: "My notification",
        message: "Exercise Created",
        timeout: 5,
        sound: true,
      })
    )
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET Route, getting id from DB for each exercise from the URL
router.route("/:id").get((req, res) => { 
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

//DELETE Route, finding id from DB for each exercise and deleting, notify on deletion
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() =>
      notifier.notify({
        title: "My notification",
        message: "Exercise Deleted",
        timeout: 5,
        sound: true,
      })
    )
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST Route updating current Exercise by ID URL, then setting new params for each req and notify.
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() =>
          notifier.notify({
            title: "My notification",
            message: "Exercise Updated",
            timeout: 5,
            sound: true,
          })
        )
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
