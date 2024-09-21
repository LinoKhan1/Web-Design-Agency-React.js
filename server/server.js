/**
 * @file server.js
 * @description Entry point for the Express server.
 * This file sets up the Express application, configures middleware, 
 * and defines the route for handling post-related requests.
 * It also starts the server and listens on the specified port.
 */

import express from "express";
import cors from "cors";
import posts from "./routes/post.js"; // Import the posts router
// Allow requests from your frontend's deployed URL
const allowedOrigins = [
    'http://localhost:5173',  // for development
    'https://your-frontend-url.onrender.com'  // for production
  ];

const PORT = process.env.PORT || 5050; // Define the port to listen on, defaulting to 5050
const app = express();

// Middleware setup
/**
 * @description Enable Cross-Origin Resource Sharing (CORS)
 * Allows requests from other origins to access resources on this server.
 */
app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));
/**
 * @description Parse incoming JSON requests
 * This middleware parses JSON payloads in the request body.
 */
app.use(express.json());

// Define route
/**
 * @description Use the posts router for handling routes under /post
 * Routes for managing posts are defined in the posts router.
 */
app.use("/post", posts);

// Start the server
/**
 * @description Start the Express server and listen on the specified port
 * Logs a message when the server starts successfully.
 */
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export default app; // Export the app for testing or further configuration
