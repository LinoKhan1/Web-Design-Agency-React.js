// server/netlify/functions/posts.js

import db from "../../db/connection.js"; // Adjust the import path as necessary
import { ObjectId } from "mongodb";

export async function handler(event) {
    const method = event.httpMethod;
    const pathSegments = event.path.split('/').filter(Boolean);
    const id = pathSegments[pathSegments.length - 1]; // Get the last segment for ID if present

    let response;

    try {
        if (method === 'GET') {
            if (id) {
                // Retrieve a single post by ID
                const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
                if (post) {
                    response = {
                        statusCode: 200,
                        body: JSON.stringify(post),
                    };
                } else {
                    response = {
                        statusCode: 404,
                        body: JSON.stringify({ message: 'Post not found' }),
                    };
                }
            } else {
                // Retrieve all posts
                const posts = await db.collection('posts').find({}).toArray();
                response = {
                    statusCode: 200,
                    body: JSON.stringify(posts),
                };
            }
        } else if (method === 'POST') {
            const newPost = JSON.parse(event.body);
            const result = await db.collection('posts').insertOne(newPost);
            response = {
                statusCode: 201,
                body: JSON.stringify({ _id: result.insertedId, ...newPost }),
            };
        } else if (method === 'PATCH' && id) {
            const updates = JSON.parse(event.body);
            const result = await db.collection('posts').updateOne(
                { _id: new ObjectId(id) },
                { $set: updates }
            );
            if (result.matchedCount === 1) {
                response = {
                    statusCode: 200,
                    body: JSON.stringify({ message: 'Post updated' }),
                };
            } else {
                response = {
                    statusCode: 404,
                    body: JSON.stringify({ message: 'Post not found' }),
                };
            }
        } else if (method === 'DELETE' && id) {
            const result = await db.collection('posts').deleteOne({ _id: new ObjectId(id) });
            if (result.deletedCount === 1) {
                response = {
                    statusCode: 200,
                    body: JSON.stringify({ message: 'Post deleted' }),
                };
            } else {
                response = {
                    statusCode: 404,
                    body: JSON.stringify({ message: 'Post not found' }),
                };
            }
        } else {
            response = {
                statusCode: 405,
                body: JSON.stringify({ message: 'Method not allowed' }),
            };
        }
    } catch (error) {
        console.error(error);
        response = {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }

    return response;
}
