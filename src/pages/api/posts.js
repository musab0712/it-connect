const { Post } = require('../../../models/Post');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = req.body;
        console.log(data);
        try {
            // const user = new Post(data);
            // await user.save();
            console.log("Hey");
            let user = await Post.create(data);
            if (user) {
                console.log("Data Added Successfully!");
                res.status(201).json({ message: 'Post created successfully' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to create post' });
        }
    } else {
        res.status(400).json({ error: 'Invalid request method' });
    }
}
