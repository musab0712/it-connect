import connectDB from '../../../lib/db';
import Post from '../../../models/Post';

connectDB();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, number, subject, msg } = req.body;

        try {
            const newPost = new Post({ name, email, number, subject, msg });
            await newPost.save();
            res.status(201).json({ message: 'Post created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create post' });
        }
    } else {
        res.status(400).json({ error: 'Invalid request method' });
    }
}
