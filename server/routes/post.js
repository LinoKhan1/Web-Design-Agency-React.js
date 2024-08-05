import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// Convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";
// router is an instance of the express router
// We use it to define our routes
// The router will be added as a middleware and will take control
// of the requests starting with path /post.

const router = express.Router();

// Get list of posts 
router.get("/", async (req, res) => {
    let collection = db.collection("posts");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


// Get post by Id 
router.get("/:id", async (req, res) => {
    try {
        let collection = db.collection("posts");
        let query = { _id: new ObjectId(req.params.id) };
        let result = await collection.findOne(query);

        if (!result) {
            res.status(404).send("Post not found");
        } else {
            res.send(result).status(200);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching post");
    }
});

// Get the most recent post
router.get("/recent", async (req, res) => {
    try {
        let collection = db.collection("posts");
        // Retrieve the most recent post without relying on a specific field like 'date'
        let result = await collection.find({}).sort({ _id: -1 }).limit(1).toArray();

        if (result.length === 0) {
            res.status(404).send("No posts found");
        } else {
            res.status(200).json(result[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching the most recent post");
    }
});



// Create a new post
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


// Update a post by id
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
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating post");
    }
});


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