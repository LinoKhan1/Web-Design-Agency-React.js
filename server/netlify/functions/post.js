// server/netlify/functions/post.js

import db, { connectToMongoDB } from '../../db/connection.js';
import { ObjectId } from 'mongodb';

export const handler = async (event) => {
    await connectToMongoDB(); // Connect to MongoDB

    const headers = {
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE', // Allowed methods
        'Access-Control-Allow-Headers': 'Content-Type', // Allowed headers
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
        };
    }

    switch (event.httpMethod) {
        case 'GET':
            if (event.path.endsWith('/')) {
                // GET /post
                return {
                    ...await getAllPosts(),
                    headers,
                };
            } else {
                // GET /post/:id
                const id = event.path.split('/').pop();
                return {
                    ...await getPostById(id),
                    headers,
                };
            }
        case 'POST':
            return {
                ...await createPost(JSON.parse(event.body)),
                headers,
            };
        case 'PATCH':
            const patchId = event.path.split('/').pop();
            return {
                ...await updatePost(patchId, JSON.parse(event.body)),
                headers,
            };
        case 'DELETE':
            const deleteId = event.path.split('/').pop();
            return {
                ...await deletePost(deleteId),
                headers,
            };
        default:
            return {
                statusCode: 405,
                headers,
                body: JSON.stringify({ message: 'Method Not Allowed' }),
            };
    }
};

const getAllPosts = async () => {
    try {
        const collection = db.collection('posts');
        const results = await collection.find({}).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching posts' }),
        };
    }
};

const getPostById = async (id) => {
    try {
        const collection = db.collection('posts');
        const result = await collection.findOne({ _id: new ObjectId(id) });

        if (!result) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Post not found' }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching post' }),
        };
    }
};

const createPost = async (data) => {
    try {
        const newDocument = {
            title: data.title,
            content: data.content,
            author: data.author,
        };
        const result = await db.collection('posts').insertOne(newDocument);
        const createdPost = {
            _id: result.insertedId,
            title: newDocument.title,
            content: newDocument.content,
            author: newDocument.author,
        };
        return {
            statusCode: 201,
            body: JSON.stringify(createdPost),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error adding post' }),
        };
    }
};

const updatePost = async (id, data) => {
    try {
        const query = { _id: new ObjectId(id) };
        const updates = { $set: data };
        const collection = db.collection('posts');
        const result = await collection.updateOne(query, updates);
        if (result.matchedCount === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Post not found' }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Post updated successfully' }),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error updating post' }),
        };
    }
};

const deletePost = async (id) => {
    try {
        const query = { _id: new ObjectId(id) };
        const collection = db.collection('posts');
        const result = await collection.deleteOne(query);

        if (result.deletedCount === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Post not found' }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Post deleted successfully' }),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error deleting post' }),
        };
    }
};
