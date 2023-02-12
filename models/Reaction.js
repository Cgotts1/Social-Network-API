// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    // Use a getter method to format the timestamp on query
    createdAt: {
      type: Date,
      default: Date.now,

    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

reactionSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString();
});

module.exports = reactionSchema;
