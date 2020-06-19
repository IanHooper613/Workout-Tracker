//require model
const Workout = require('../models/workout.js')

module.exports = function(app) {
    app.get('/api/workouts', (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(error => {
            res.status(400).json(error)
        })
    })

    app.get('/api/workouts/range', (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(error => {
            res.status(400).json(error)
        })
    })

    app.post('/api/workouts', ({ body }, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout)
        })
        .catch(error => {
            res.status(400).json(error)
        })
    })

    app.put('/api/workouts/:id', (req, res) => {
        Workout.updateOne(
            { _id: req.params.id },
            { 
                $push: { exercises: req.body },
                $inc: { totalDuration: req.body.duration }
            }    
    )
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(error => {
        res.status(400).json(error)
    });
})
}