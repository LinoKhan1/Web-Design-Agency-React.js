// post.test.js

import request from 'supertest';
import express from 'express';
import db from '../db/connection.js'; // Import the MongoDB connection
import postRouter from './post.js'; // Assuming your router is exported as 'default'

const app = express();
app.use(express.json());
app.use('/posts', postRouter); // Mount the postRouter under /posts path


jest.mock('../db/connection.js', () => ({
  collection: jest.fn().mockImplementation(() => ({
    insertOne: async () => ({ insertedId: 'mocked_id' }),
  })),
}));

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

