/**
 * @file posts.js
 * @description Serverless function to manage blog posts.
 */

import { Handler } from '@netlify/functions';
import db from '../db/connection.js'; // Adjust the path as needed
import { ObjectId } from 'mongodb';

const handler = async (event) => {
    try {
        const { httpMethod, path } = event;
        const id = path.split('/').pop(); // Extract the ID from the URL if present

        switch (httpMethod) {
            case 'GET':
                if (id) {
                    // GET /posts/:id
                    const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
                    if (!post) {
                        return { statusCode: 404, body: 'Post not found' };
                    }
                    return { statusCode: 200, body: JSON.stringify(post) };
                } else {
                    // GET /posts
                    const posts = await db.collection('posts').find({}).toArray();
                    return { statusCode: 200, body: JSON.stringify(posts) };
                }
            case 'POST':
                const newPost = JSON.parse(event.body);
                const insertResult = await db.collection('posts').insertOne(newPost);
                return { statusCode: 201, body: JSON.stringify({ _id: insertResult.insertedId, ...newPost }) };
            case 'PATCH':
                const updatedPost = JSON.parse(event.body);
                await db.collection('posts').updateOne({ _id: new ObjectId(id) }, { $set: updatedPost });
                return { statusCode: 200, body: 'Post updated successfully' };
            case 'DELETE':
                const deleteResult = await db.collection('posts').deleteOne({ _id: new ObjectId(id) });
                if (deleteResult.deletedCount === 1) {
                    return { statusCode: 200, body: 'Post deleted successfully' };
                } else {
                    return { statusCode: 404, body: 'Post not found' };
                }
            default:
                return { statusCode: 405, body: 'Method Not Allowed' };
        }
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};

export { handler };
