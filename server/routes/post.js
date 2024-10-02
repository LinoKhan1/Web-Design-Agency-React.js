/**
 * @file post.js
 * @description This module defines API routes for managing blog posts. 
 * It includes routes to create, read, update, and delete posts using Express.js and MongoDB.
 */

import express from "express";
import db from "../db/connection.js";
const {ObjectId} = require("mongodb");
const router = express.Router();

/**
 * @route GET /posts
 * @description Retrieve a list of all posts
 * @returns {Array} Array of posts
 */
router.get("/", async (req, res) => {
    try {
        let collection = db.collection("posts");
        let results = await collection.find({}).toArray();
        res.status(200).send(results);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching posts");
    }
});

/**
 * @route GET /posts/:id
 * @description Retrieve a single post by ID
 * @param {string} id - The ID of the post to retrieve
 * @returns {Object} The post object if found
 * @throws {404} If post not found
 * @throws {500} If there is an error fetching the post
 */
router.get("/:id", async (req, res) => {
    try {
        let collection = db.collection("posts");
        let query = { _id: new ObjectId(req.params.id) };
        let result = await collection.findOne(query);

        if (!result) {
            res.status(404).send("Post not found");
        } else {
            res.status(200).send(result);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching post");
    }
});



/**
 * @route POST /posts
 * @description Create a new post
 * @body {Object} The post data
 * @returns {Object} The created post with ID
 * @throws {500} If there is an error creating the post
 */
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
        };

        const result = await db.collection('posts').insertOne(newDocument);
        const createdPost = {
            _id: result.insertedId,
            title: newDocument.title,
            content: newDocument.content,
            author: newDocument.author
        };
        res.status(201).json(createdPost);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding post");
    }
});

/**
 * @route PATCH /posts/:id
 * @description Update an existing post by ID
 * @param {string} id - The ID of the post to update
 * @body {Object} The updated post data
 * @returns {Object} The update result
 * @throws {500} If there is an error updating the post
 */
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
            },
        };
        let collection = db.collection("posts");
        let result = await collection.updateOne(query, updates);
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating post");
    }
});

/**
 * @route DELETE /posts/:id
 * @description Delete a post by ID
 * @param {string} id - The ID of the post to delete
 * @returns {Object} The result of the deletion operation
 * @throws {404} If post not found
 * @throws {500} If there is an error deleting the post
 */
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const collection = db.collection("posts");
        let result = await collection.deleteOne(query);

        if (result.deletedCount === 1) {
            res.status(200).json({ deletedCount: result.deletedCount });
        } else {
            res.status(404).send('Post not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting post');
    }
});

export default router;
