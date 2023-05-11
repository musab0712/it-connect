const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
    .then((db) => {
        console.log("DB Connected!");
    }).catch((err) => {
        console.log(err);
    });

const postSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    num: { type: String, required: true },
    subject: { type: String, required: true },
    msg: { type: String, required: true },
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

module.exports = { Post };