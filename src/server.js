import express from 'express';
import dotenv from 'dotenv';
import {initDB} from './config/db.js'
import ratelimiter from './middleware/rateLimiter.js';
import transactionsRoute from './routes/transactionsRoute.js'
import job from './config/cron.js';
dotenv.config();

const app = express();
if(process.env.NODE_ENV==="production") job.start();
const port = process.env.PORT||5001;

//middleware
app.use(ratelimiter)
app.use(express.json());

app.use("/api/transactions",transactionsRoute);
app.get("/api/health" , (req,res)=>{
    res.status(200).json({
        status:"ok",
        health:"100%"
    })
})

initDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server has started on the port : ${port}`)
    }); 
});