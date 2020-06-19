//require Mongoose
const mongoose = require('mongoose')

//creating Schema
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercises: [{
      type: {
          type: String,
          trim: true,
          required: 'Enter an exercise type.'
      },
      name: {
          type: String,
          trim: true,
          required: 'Enter an exercise name.'
      },
      duration: {
          type: Number,
          required: 'Enter the duration.'
      },
      weight: {
          type: Number,
      },
      reps: {
          type: Number,
      },
      sets: {
          type: Number,
      },
      distance: {
          type: Number,
      }
  }],
  totalDuration: {
      type: Number,
      default: 0
  }
})

//creating Workout model
const Workout = mongoose.model('Workout', workoutSchema)

//exporting Workout model
module.exports = Workout;