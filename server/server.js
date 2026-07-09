import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
// import {serve} from "inngest/express"
// import { functions, inngest } from './inngest/index.js';
import showRouter from './routes/showRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

await connectDB()

//Middlewere
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

//API Routes
app.get('/', (req, res)=> res.send('server is live!'));
// app.use('/api/inngest', serve({client: inngest, functions}))
app.use('/api/show', showRouter)
app.use('/api/booking', bookingRouter)


if (process.env.NODE_ENV !== "production") {
  app.listen(5000, () => {
    console.log("Server running");
  });
}

  
 export default app;
