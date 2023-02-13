const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const friendSchema = require('./Friend');


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
      // validate: [validateEmail, 'Please fill a valid email address'],
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    // Array of `_id` values referencing the `Thought` model
    thoughts: [{type: Schema.Types.ObjectId, ref: "thought"}],    
    // Array of `_id` values referencing the `User` model (self-reference)
    // friends: [{type: Schema.Types.ObjectId, ref: "user"}],
    friends: [ friendSchema],

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
    return this.friends.length;
  })

const User = model('user', userSchema);

module.exports = User;
