/**
 * @file connection.test.js
 * @description This file contains unit tests for the MongoDB connection logic using Jest.
 * It verifies that the connection to MongoDB is established successfully and handles errors correctly.
 */

import { MongoClient } from "mongodb";
import db, { connectToMongoDB } from '../db/connection.js'; // Update the path as necessary

// Mock MongoDB client and ServerApiVersion
jest.mock('mongodb', () => {
    const actualMongoDB = jest.requireActual('mongodb');
    const mClient = {
      connect: jest.fn(),
      db: jest.fn().mockReturnThis(),
      command: jest.fn(),
    };
    return {
      ...actualMongoDB,
      MongoClient: jest.fn(() => mClient),
      ServerApiVersion: { v1: '1' }, // Mock the ServerApiVersion
    };
});

describe("MongoDB Connection", () => {
    let client;

    // Initialize a new MongoClient instance before each test
    beforeEach(() => {
        client = new MongoClient();
    });

    // Clear all mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    /**
     * Test that the connectToMongoDB function connects to MongoDB successfully
     * and pings the server.
     */
    it("should connect to MongoDB successfully", async () => {
        client.connect.mockResolvedValueOnce();
        client.command.mockResolvedValueOnce({ ok: 1 });

        await connectToMongoDB();

        expect(client.connect).toHaveBeenCalledTimes(1);
        expect(client.db("admin").command).toHaveBeenCalledWith({ ping: 1 });
    });

    /**
     * Test that the connectToMongoDB function handles connection errors
     * and logs them to the console.
     */
    it("should handle connection errors", async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const error = new Error("Connection failed");
        client.connect.mockRejectedValueOnce(error);

        await connectToMongoDB();

        expect(client.connect).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith("Failed to connect to MongoDB:", error);

        consoleSpy.mockRestore();
    });
});
