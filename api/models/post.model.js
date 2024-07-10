import mongoose from "mongoose";

const postSchema = {
  user_id: mongoose.Types.ObjectId,
  title: String,
  description: String,
  photos_url: Array,
  labels: Array,
  district: String,
  likes: Number,
};

const Post = mongoose.model(
  "Post",
  new mongoose.Schema(postSchema, { timestamps: true }),
  "post"
);

export default Post;
