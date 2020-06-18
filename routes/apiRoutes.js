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
}