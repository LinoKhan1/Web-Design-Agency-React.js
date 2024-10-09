# Use a specific version of Node.js based on Alpine Linux for the client
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use Nginx for serving the built application
FROM nginx:1.26.1-alpine3.19
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx is serving on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
