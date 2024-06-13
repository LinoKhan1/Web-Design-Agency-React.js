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
    let collection = await db.collection("posts");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


// Get post by Id 
router.get("/:id", async (req, res) => {
    let collection = await db.collection("posts");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// Create a new post
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
        };
        let collection = await db.collection("posts");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);

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
        let collection = await db.collection("posts");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating post");
    }
});

// Delete a post
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("posts");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting post");
    }
});

export default router;