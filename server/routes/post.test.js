/**
 * @file post.test.js
 * @description This file contains unit tests for the post API routes using Jest and Supertest.
 * It tests the CRUD operations: Create, Read, Update, and Delete posts.
 */

import request from 'supertest';
import express from 'express';
import postRouter from './post.js'; // Import the post router
import db from '../db/connection.js'; // Import db for mocking

const app = express();
app.use(express.json());
app.use('/posts', postRouter); // Mount the postRouter under /posts path

// Mock the MongoDB connection
jest.mock('../db/connection.js', () => {
  const { ObjectId } = require('mongodb'); // Ensure ObjectId is required within the mock scope
  return {
    collection: jest.fn().mockImplementation(() => ({
      insertOne: async () => ({ insertedId: new ObjectId('507f1f77bcf86cd799439011') }),
      find: jest.fn().mockImplementation(() => ({
        toArray: async () => [
          { _id: new ObjectId('507f1f77bcf86cd799439011'), title: 'Post 1', content: 'Content 1', author: 'Author 1' },
          { _id: new ObjectId('507f1f77bcf86cd799439012'), title: 'Post 2', content: 'Content 2', author: 'Author 2' },
        ],
      })),
      updateOne: jest.fn().mockResolvedValue({ modifiedCount: 1 }),
      findOne: jest.fn().mockImplementation(query => {
        const postId = query._id.toString();
        if (postId === '507f1f77bcf86cd799439011') {
          return { _id: new ObjectId('507f1f77bcf86cd799439011'), title: 'Post 1', content: 'Content 1', author: 'Author 1' };
        } else if (postId === '507f1f77bcf86cd799439012') {
          return { _id: new ObjectId('507f1f77bcf86cd799439012'), title: 'Post 2', content: 'Content 2', author: 'Author 2' };
        } else {
          return null;
        }
      }),
      deleteOne: jest.fn().mockImplementation(query => {
        const postId = query._id.toString();
        if (postId === '507f1f77bcf86cd799439011') {
          return { deletedCount: 1 };
        } else {
          return { deletedCount: 0 };
        }
      }),
    })),
  };
});

// Create a new post
describe('POST /posts', () => {
  it('should create a new post', async () => {
    const newPost = {
      title: 'Test Post',
      content: 'This is a test post content.',
      author: 'Test Author',
    };

    const response = await request(app)
      .post('/posts')
      .send(newPost)
      .expect(201); // Expecting a 201 Created status code

    // Assertions based on the expected behavior of your endpoint
    expect(response.body).toHaveProperty('_id');
    expect(response.body.title).toBe(newPost.title);
    expect(response.body.content).toBe(newPost.content);
    expect(response.body.author).toBe(newPost.author);
  });
});

// Fetch all posts
describe('GET /posts', () => {
  it('should fetch all posts', async () => {
    const response = await request(app).get('/posts').expect(200);

    expect(response.body).toHaveLength(2); // Assuming mock data has 2 posts
    expect(response.body[0]).toHaveProperty('_id', '507f1f77bcf86cd799439011');
    expect(response.body[0]).toHaveProperty('title', 'Post 1');
    expect(response.body[0]).toHaveProperty('content', 'Content 1');
    expect(response.body[0]).toHaveProperty('author', 'Author 1');

    expect(response.body[1]).toHaveProperty('_id', '507f1f77bcf86cd799439012');
    expect(response.body[1]).toHaveProperty('title', 'Post 2');
    expect(response.body[1]).toHaveProperty('content', 'Content 2');
    expect(response.body[1]).toHaveProperty('author', 'Author 2');
  });
});

// Fetch a single post
describe('GET /posts/:id', () => {
  it('should fetch a single post by ID', async () => {
    const postId = '507f1f77bcf86cd799439011';
    const response = await request(app).get(`/posts/${postId}`).expect(200);

    expect(response.body).toHaveProperty('_id', postId);
    expect(response.body).toHaveProperty('title', 'Post 1');
    expect(response.body).toHaveProperty('content', 'Content 1');
    expect(response.body).toHaveProperty('author', 'Author 1');
  });

  it('should return 404 if post not found', async () => {
    const postId = '507f1f77bcf86cd799439999'; // Non-existent post
    await request(app).get(`/posts/${postId}`).expect(404);
  });
});

// Update a post
describe('PATCH /posts/:id', () => {
  it('should update a post by ID', async () => {
    const postId = '507f1f77bcf86cd799439011';
    const updatedPost = {
      title: 'Updated Post',
      content: 'Updated content',
      author: 'Updated Author',
    };

    const response = await request(app)
      .patch(`/posts/${postId}`)
      .send(updatedPost)
      .expect(200);

    expect(response.body).toHaveProperty('modifiedCount', 1);
  });
});

// Delete a post
describe('DELETE /posts/:id', () => {
  it('should delete a post by ID', async () => {
    const postId = '507f1f77bcf86cd799439011';
    const response = await request(app).delete(`/posts/${postId}`).expect(200);

    expect(response.body).toHaveProperty('deletedCount', 1);
  });

  it('should return 404 if post not found', async () => {
    const postId = '507f1f77bcf86cd799439999'; // Non-existent post
    await request(app).delete(`/posts/${postId}`).expect(404);
  });
});
