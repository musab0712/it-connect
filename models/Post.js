import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    subject: { type: String, required: true },
    msg: { type: String, required: true },
});

const Post = mongoose.model('Post') || mongoose.model('Post', postSchema);

export default Post;