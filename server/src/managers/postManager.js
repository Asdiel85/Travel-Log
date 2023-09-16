const Post = require('../models/Post');

exports.create = (postData) => {
  const post = new Post(postData);
  post.save();
  return post;
};

exports.getPosts = () => {
  const result = Post.find();

  return result;
};

exports.getById = (postId) => Post.findById(postId);

exports.updatePost = (postId, postData) =>
  Post.findByIdAndUpdate(postId, postData, { new: true });

  exports.deletePost = (post) => Post.deleteOne(post)
