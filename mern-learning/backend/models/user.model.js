// Importing mongoose to interact with MongoDB
const mongoose = require('mongoose');

// Creating a Schema object from mongoose
const Schema = mongoose.Schema;

// Defining the User schema with necessary fields and validation
const userSchema = new Schema({
  username: {
    type: String,     // Data type is String
    required: true,   // Field is required
    unique: true,     // Ensures usernames are unique in the database
    trim: true,       // Removes leading and trailing whitespace
    minlength: 3      // Minimum length for username is 3 characters
  },
}, {
  timestamps: true,   // Automatically adds 'createdAt' and 'updatedAt' fields
});

// Creating the User model from the schema
const User = mongoose.model('User', userSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;