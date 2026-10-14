import {clerkClient} from "@clerk/express";
import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";

//API controller function to Get user Bookings
export const getUserBookings = async(req, res) => {
    try {
        const user = req.auth().userId;

        const bookings = await Booking.find({user}).populate({
            show: "show",
            populate: {path: "movie"}
        }).sort({createAt: -1})
        res.json({success: true, bookings})
    } catch (error) {
        console.error(error.message)
        res.json({success: false, message: error.message})
    }
}

//API Controller Function to Add favorite Movie in clerk Metadata
export const addFavorite = async(req, res) => {
    try {
        const {movieId} = req.body;
        const userId = req.auth().userId;

        const user = await clerkClient.users.getUser(userId)

        if(!user.privateMetadata.favorite){
            user.privateMetadata.favorite = []
        }

        if(!user.privateMetadata.favorites.includes(movieId)){
            user.privateMetadata.favorites.push(movieId)
        }

        await clerkClient.users.updateUserMetadata(userId, {privateMetadata: user.privateMetadata})
        res.json({success: true, message: "Favorite added successfully."})
    } catch (error) {
        console.error(error)
        res.json({success: false, message: error.message});
    }
}

//API Controller Function to udpate favorite Movie in clerk Metadata
export const updateFavorite = async(req, res) => {
    try {
        const {movieId} = req.body;
        const userId = req.auth().userId;

        const user = await clerkClient.users.getUser(userId)

        if(!user.privateMetadata.favorite){
            user.privateMetadata.favorite = []
        }

        if(!user.privateMetadata.favorites.includes(movieId)){
            user.privateMetadata.favorites.push(movieId)
        }else {
            user.privateMetadata.favorite = user.privateMetadata.favorite.filter(
                item = item !== movieId
            )
        }

        await clerkClient.users.updateUserMetadata(userId, {privateMetadata: user.privateMetadata})
        res.json({success: true, message: "Favorite movies updated."})
    } catch (error) {
        console.error(error)
        res.json({success: false, message: error.message});
    }
}

export const getFavroites = async(req, res) => {
    try {
        const user = await clerkClient.users.getUser(req.auth().userId)
        const favorites = user.privateMetadata.favorites

        //Getting movie from the database
        const movies = await Movie.find({_id: {$in: favorites}})
        res.json({success: true, movies})
    } catch (error) {
        console.error(error)
        res.json({success: false, message: error.message});
    }
}