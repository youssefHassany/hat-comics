import mongoose from "mongoose";

const errorMessage = "A Comic Must Have A";

const comicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, `${errorMessage} title`],
    unique: true,
    trim: true,
  },
  character: {
    type: String,
    default: "Indie",
  },
  issues: {
    type: Number,
    required: [true, `${errorMessage} Number Of Issues`],
  },
  complete: {
    type: Boolean,
    required: [true, "A Comic Must Be Known It's Completed or Not"],
  },
  publishYear: {
    type: Number,
    required: [true, `${errorMessage} Publish Year`],
  },
  description: {
    type: String,
    required: [true, `${errorMessage} Description`],
    trim: true,
  },
  img: String,
  company: {
    type: String,
    required: [true, `${errorMessage} Company`],
  },
  englishLink: [String],
  arabicLink: [String],
  store: String,
  slug: {
    type: String,
    required: [true, `${errorMessage} Slug`],
  },
  beginnerFriendly: Boolean,
  // ratings: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, rating: Number }]
});

export const Comic = mongoose.model("Comic", comicSchema, "comics");
