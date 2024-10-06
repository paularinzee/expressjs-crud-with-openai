const mongoose = require("mongoose");
const editMovie = async(req, res) => {
    const moviesModel = mongoose.model("movies");

    const movie_id =req.params.movie_id;

    // const { name, info, rating, description } = req.body;
    // const { movie_id, name, info, rating, description } = req.body;
     
    //validation
    
    if (!movie_id) throw "Movie id info required!";

    const updateMovie = await moviesModel.findByIdAndUpdate(
        {
            _id: movie_id,
        },
        req.body,

        {
        new: true,
        runValidators: true,
    }
    
    );
        
        
  
    // const updateMovie = await moviesModel.updateOne(
    //     {
    //         _id: movie_id,
    //     },
    //     {
    //         name: name,
    //         rating: rating,
    //         info: info,
    //         description: description,
    //     },
    //     {
    //         runValidators: true,
    //     }
    // );
        
    if(!updateMovie) throw "This movie does not exist!";

    res.status(200).json({
        status: "success",
        message: "Movie updated successfully !",
    });



    
};


module.exports = editMovie;