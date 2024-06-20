// connection.test.js
import { MongoClient } from "mongodb";
import db, { connectToMongoDB } from '../db/connection.js'; // Update the path accordingly

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

    beforeEach(() => {
        client = new MongoClient();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should connect to MongoDB successfully", async () => {
        client.connect.mockResolvedValueOnce();
        client.command.mockResolvedValueOnce({ ok: 1 });

        await connectToMongoDB();

        expect(client.connect).toHaveBeenCalledTimes(1);
        expect(client.db("admin").command).toHaveBeenCalledWith({ ping: 1 });
    });

    it("should handle connection errors", async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const error = new Error("Connection failed");
        client.connect.mockRejectedValueOnce(error);

        await connectToMongoDB();

        expect(client.connect).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(error);

        consoleSpy.mockRestore();
    });
});
