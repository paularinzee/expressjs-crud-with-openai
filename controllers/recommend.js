const OpenAI = require("openai");
// import OpenAI from 'openai';

const mongoose = require("mongoose");


const recommend = async(req, res) => {
    const moviesModel = mongoose.model("movies");

    const allMovies = await moviesModel.find({});
    const movieString = await moviesModel.map((el) => el.movie_name).join(",");

    const prompt = `I need a movie recommendation based o these movies : ${moviesString} Provide me with 10 suggestions! seperate movies with coma`;
    // console.log(allMovies);
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

    const chatCompletion = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        prompt: prompt,
        max_tokens: 100,
      });

    res.status(200).json({
        data: chatCompletion.data.choices[0].text
    });

   
};


module.exports = recommend;