const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: {
            type: Number,
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
    }]
}, {
    toJSON: {virtuals: true}
});

WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, { duration }) => {

        return total + duration
    }, 0)
})

const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout;
