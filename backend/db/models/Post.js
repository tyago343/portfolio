import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "user"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const PostModel = mongoose.model("post", postSchema);

export default PostModel;
