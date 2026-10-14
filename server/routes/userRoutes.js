import express from 'express'
import { getFavroites, getUserBookings, updateFavorite } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/bookings',getUserBookings)
userRouter.post('/update-favorite', updateFavorite)
userRouter.get('/favorites', getFavroites)

export default userRouter;