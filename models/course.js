const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "title is required"],
    },
    topics: {
      type: Array,
      required: [true, "description is required"],
    },
    // image: {
    //   type: String,
    //   required: [true, "image is required"],
    // },
    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   required: [true, "user id is required"],
    // },
  },
  { timestamps: true }
);

const courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel;
