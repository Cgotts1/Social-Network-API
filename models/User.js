const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Reaction');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax   Add var function for validateEmail
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },
    // Array of `_id` values referencing the `Thought` model
    thoughts: [_id],    
    // Array of `_id` values referencing the `User` model (self-reference)
    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${friends.length}`;
  })

const Student = model('user', userSchema);

module.exports = Student;
