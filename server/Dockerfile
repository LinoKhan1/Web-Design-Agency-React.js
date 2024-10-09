# Use a specific version of Node.js based on Alpine Linux for the server
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your server is listening on
EXPOSE 5050

# Start the server
CMD ["npm", "start"]
