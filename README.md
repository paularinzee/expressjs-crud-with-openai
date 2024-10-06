# Express Movien CRUD with MongoDB and OpenAI Prompt Suggestion

This is a RESTful API built with Express.js and MongoDB for managing a collection of movies. It allows users to perform basic CRUD operations (Create, Read, Update, Delete) on movies, and more.

## Application

**Backend** -  Express.js (Node.js).
**Database** - MongoDB

**API Documentation**: Postman or Swagger (optional)

## Prerequisites
- Node.js v14 or above
- MongoDB (either local or cloud, e.g., MongoDB Atlas)

## Running locally

### Installation

- Clone this repo:
    `git clone https://github.com/paularinzee/react-crud-with-openai.git`
- Navigate to the project directory:
    `cd movie-api`
- Install dependencies:
    `yarn install`
### How To Get Your Own OpenAI API Key
- Visit [Link](https://medium.com/@lorenzozar/how-to-get-your-own-openai-api-key-f4d44e60c327).
- Set up environment variables:
    Create a .env file in the root directory and add the following:
    MONGODB_URI=<your-mongodb-connection-string>
    OPENAI_API_KEY=<your-secret-key>

- Start the server:
    `yarn start`
- The API will be accessible at http://localhost:8000

## API Endpoints

| Method  | Endpoint | Dscription
| ------------- | ------------- | ------------- |
| POST  | api/movies | Add a new movie |
| GET  | api/movies | Get all movies |
| GET  | api/movies/:id | Get a movie |
| PATCH  | api/movies/:id | Update a movie |
| DELETE  | api/movies/:id | Add a new movie |
|GETE  | api/movies/openai/recomendations | Get movie suggestions |

## Author

[Paul Nnaji](https://github.com/paularinzee)

## License

[MIT](./LICENSE)
