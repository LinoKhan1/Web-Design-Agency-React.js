/**
 * @file connection.js
 * @description This module handles the connection to the MongoDB database using the MongoDB Node.js driver.
 * It exports a function to connect to MongoDB and the database object for use in other parts of the application.
 */

import { MongoClient, ServerApiVersion } from "mongodb";

// MongoDB connection URI from environment variables
const uri = process.env.ATLAS_URI || "";

// Create a new MongoClient instance with the specified URI and server API options
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1, // Use MongoDB Server API version 1
        strict: true, // Enable strict mode
        deprecationErrors: true, // Enable deprecation warnings
    },
});

/**
 * Connects to MongoDB and pings the server to confirm the connection.
 * Logs a success message or an error if the connection fails.
 */
async function connectToMongoDB() {
    try {
        // Connect the client to the server
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } catch (err) {
        // Log any errors encountered during connection
        console.error("Failed to connect to MongoDB:", err);
    }
}

// Get the database instance for the "blogs" database
let db = client.db("blogs");

// Export the connectToMongoDB function and the database instance
export { connectToMongoDB };
export default db;