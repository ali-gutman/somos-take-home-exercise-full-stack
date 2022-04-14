const { Schema, model } = require("mongoose");

const schemaRecomendation = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    instructions: {
      type: String,
      required: true,
      trim: true,
    },
    why: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: String,
      required: true,
      trim: true,
    },
    counterindication: {
      type: String,
      required: true,
      trim: true,
    },
    studies: {
      type: String,
      required: true,
      trim: true,
    },
    studyLink: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Recomendation", schemaRecomendation);
