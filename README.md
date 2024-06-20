# Linokhan.com - Digital Product and Brand Agency

## Overview
Linokhan.com is a digital product and brand agency website built with React JS, Node.js and Exprress.js. This project uses Docker for containerization and GitHub Actions for Continuous Integration (CI).

## Prerequisites
- Node.js (version 21.6.2 or later)
- MongoDBCompas
- Docker
- Docker Compose
- GitHub account (for CI setup)
  
## Tech Stack
- React.js
- Node.js
- Express.js
- MongoDB
- Jest
- HTML5
- SASS
- JavaScript
- Docker
- CI/CD
  
## Project Structure
``` sh
.
├── client
│   ├── src
│   │   ├── assets
│   │   │   └── images
│   │   ├── components
│   │   │   ├── layout
│   │   │   ├── ServiceComponent.jsx
│   │   │   ├── CoreValuesComponent.jsx
│   │   │   └── ...
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Client.jsx
│   │   │   └── ...
│   │   ├── tests
│   │   │   ├── __mocks__
│   │   │   │   └── emailjs.js
│   │   │   ├── components
│   │   │   │   ├── CoreValuesComponent.test.js
│   │   │   │   ├── ServiceComponent.test.js
│   │   │   │   └── ...
│   │   │   ├── pages
│   │   │   │   ├── Contact.test.js
│   │   │   │   └── ...
│   │   │   └── setupTests.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── public
│   │   ├── index.html
│   │   └── ...
│   ├── .github
│   │   └── workflows
│   │       └── ci.yml
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   ├── README.Docker.md
│   └── README.md
├── server
│   ├── db
│   │   ├── connection.js
│   │   ├── connection.test.js
│   ├── node_modules
│   ├── routes
│   │   ├── post.js
│   │   ├── post.test.js
│   ├── server.js
│   ├── .babelrc
│   ├── config.env
│   ├── jest.config.js
│   ├── package.json
│   ├── package-lock.json
└── README.md



```
## Getting Started

### 1. Clone the Repository
``` sh
git clone https://github.com/LinoKhan1/linokhan.git
cd linokhan
```
### 2. Install Dependencies
For the client
``` sh
cd client
npm install
```
For the server
``` sh
cd ../server
npm install
```

### 3. Run the Application Locally
Start the server first then the client
For the server
``` sh
cd server
node --env-file=config.env server
```
For the client
``` sh
cd ../client
npm run dev
```

### 4. Build and Run with Docker
``` sh
docker-compose up --build
```

Access the Application
`http://localhost:3000`

### 5. Unit and Integration Tests with Jest
This project uses Jest for unit and integration tests. The tests are located in the src/tests directory.

Running Tests
To run the tests, use the following command:
``` sh
npm test
```

### 6. CI/CD with GitHub Actions
This project uses GitHub Actions for Continuous Integration (CI). The workflow is defined in the .github/workflows/ci.yml file.

#### Setting Up GitHub Secrets
For Docker Hub login, you'll need to set up the following secrets in your GitHub repository:

DOCKER_USERNAME: Your Docker Hub username
DOCKER_PASSWORD: Your Docker Hub password

## License
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contact
If you have any questions, please contact us at linokhan1@gmail.com

