// __test__/connection.test.js
const { MongoClient, ServerApiVersion } = require("mongodb");
const db = require("../db/connection.js").default;

// Mock MongoClient and its methods
jest.mock("mongodb");

describe("MongoDB Connection", () => {
    let mockConnect, mockDbCommand;

    beforeAll(() => {
        // Mock MongoClient methods
        mockConnect = jest.fn();
        mockDbCommand = jest.fn();

        MongoClient.mockImplementation(() => ({
            connect: mockConnect,
            db: () => ({
                command: mockDbCommand,
            }),
        }));
    });

    afterAll(() => {
        // Restore original MongoClient implementation
        jest.restoreAllMocks();
    });


    it("should successfully connect to MongoDB", async () => {
        // Mock successful connection and ping response
        mockConnect.mockResolvedValueOnce();
        mockDbCommand.mockResolvedValueOnce({});

        try {
            await db.connect();
            expect(mockConnect).toHaveBeenCalled();
            expect(mockDbCommand).toHaveBeenCalled();
            console.log("Successfully connected to MongoDB and pinged.");
        } catch (error) {
            // Fail the test if an error occurs
            fail(error);
        }
    });

    it("should handle connection errors", async () => {
        // Mock connection failure
        const mockError = new Error("Connection failed");
        mockConnect.mockRejectedValueOnce(mockError);

        try {
            await db.connect();
            // If connect() succeeds unexpectedly, fail the test
            fail("Expected connection to fail but it succeeded.");
        } catch (error) {
            expect(error).toEqual(mockError);
            console.log("Connection error handled correctly:", error.message);
        }
    });
})
