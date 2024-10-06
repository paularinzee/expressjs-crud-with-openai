require("express-async-errors");
const express = require('express');
const mongoose = require('mongoose');

require("dotenv").config();
const addMovie = require('./controllers/addMovie');
const getAllMovies = require('./controllers/getAllMovies');
const getSingleMovie = require('./controllers/getSingleMovie');
const editMovie = require('./controllers/editmovie');
const deleteMovie = require('./controllers/deleteMovie');
const recommend = require('./controllers/Recommend');
const errorHandler = require("./handlers/errorHandler");






// Connection to mongodb
// mongoose
//     .connect(
//         process.env.mongo_connection,
//         {}
//     )
//     .then(() => {
//         console.log("Connection to mongodb successful !");
//     })
//     .catch(() => {
//         console.log("Connection to mongodb failed!");
//     });


mongoose.connect(process.env.DATABASE,
{} 
)
.then(() => {
    console.log("Connection to mongodb successful !");
})
.catch(() => {
    console.log("Connection to mongodb failed!");
});



// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     family: 4,
    
//   })
//     .then(() => {
//       console.log('Connected to MongoDB');
//     })
//     .catch(() => {
//         console.log("Connection to mongodb failed o!");
//     });
    

const app = express();
app.use(express.json());

// Models
require("./models/movies");

// Routes
app.get("/api/Movies/recomendation", recommend);
app.post("/api/movies", addMovie);
app.get("/api/Movies", getAllMovies);
app.get("/api/Movies/:movie_id", getSingleMovie);
app.patch("/api/Movies/:movie_id", editMovie);
app.delete("/api/Movies/:movie_id", deleteMovie);

// 3. Handling Unhandled Routes
// app.all('*', (req, res, next) => {
//     next(new AppError(`Cant't find ${req.originalUrl} on this server`, 404));
  
//   });

//Openai suggestion
app.get("/api/Movies/openai/recomendations", recommend);
app.use(errorHandler);


app.all('*', (req, res, next) => {
    res.status(404).json({
        status:"Not Found",
        message: `Can't find ${req.originalUrl} on this server`,
    });

});

app.listen(8000, () => {
    console.log("Server started Successfully");
});