import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    _id: { type: String, requried: true },
    title: { type: String, required: true },
    overview: { type: String, requried: true },
    poster_path: { type: String, required: true },
    backdrop_path: { type: String, required: true },
    relase_date: { type: String, required: true },
    original_language: { type: String },
    tagline: { type: String, required: true },
    genre: { type: Array, required: true },
    casts: { type: Array, requird: true }, 
    vote_average: {type:Number, required:true}, 
    runtime: {type: Number, required: true}
}, {timestamps:true})

const Movie = mongoose.model('Movie', movieSchema);

export default Movie