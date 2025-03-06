const mongoose = require('mongoose'); // Importing Mongoose to interact with MongoDB

const Schema = mongoose.Schema; // Creating a reference to the Mongoose Schema class

// Defining the schema for the 'Exercise' collection
const exerciseSchema = new Schema({
  username: { type: String, required: true }, // Stores the username; required field
  description: { type: String, required: true }, // Stores the exercise description; required field
  duration: { type: Number, required: true }, // Stores the duration of the exercise in minutes; required field
  date: { type: Date, required: true }, // Stores the date of the exercise; required field
}, {
  timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' timestamps
});

// Creating a Mongoose model named 'Exercise' based on the defined schema
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise; // Exporting the model to be used in other parts of the application
