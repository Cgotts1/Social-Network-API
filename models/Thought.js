const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    // Array of nested documents created with the reactionSchema
    reactions: [
      reactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


thoughtSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString();
});

// userSchema
//   .virtual('reactionCount')
//   // Getter
//   .get(function () {
//     return reactions.length;
//   })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
