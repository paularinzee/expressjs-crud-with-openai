const mongoose = require("mongoose");
const addMovie = async(req, res) => {
    const moviesModel = mongoose.model("movies");

    const { name, info, rating, description } = req.body;
    
    //validation

        // if (!name) throw "Movie name required!";
        if (!info) throw "Movie info required!";
        if (!rating) throw "Movie rating required!";
        if (rating < 1 || rating > 10 ) throw "Rating must be between 1-10";
        


  
        const createdMovie = await moviesModel.create({
            name: name,
            info: info,
            rating: rating,
            description: description,
        });
 
    res.status(200).json({
        status: "success",
        message: "Movie added successfully !",
    });
};


module.exports = addMovie;