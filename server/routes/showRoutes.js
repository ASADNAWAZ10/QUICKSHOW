import express from 'express'
import { addShow, getNowPlayingMovies, getshow, getshows } from '../controller/showController.js'
import { protectAdmin } from '../middlewere/auth.js';

const showRouter = express.Router();
showRouter.get('/now-playing',protectAdmin, getNowPlayingMovies);
showRouter.post('/add', protectAdmin, addShow)
showRouter.get("/all", getshows)
showRouter.get("/:movieId", getshow)

export default showRouter;