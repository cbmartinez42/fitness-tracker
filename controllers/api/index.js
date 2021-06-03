
const db = require("../../models");
const Workout = require('../../models/Workout');
const router = require("express").Router();

router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/workouts', ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/workouts/:id", ({ body, params }, res) => {
    db.Workout.findOneAndUpdate({_id: params.id}, {$push: {exercises: body} })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get('/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});



module.exports = router; 