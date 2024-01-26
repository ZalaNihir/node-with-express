const express = require("express");
const { connectMongoDb } = require('./connection');
const { logReqRes } = require('./middleware/index');
const userRouter = require('./routes/user');


const app = express();
const PORT = 3000;

// Mongoose connection is go on connection js file
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=> console.log('Mongodb connected!'));

// Middleware
app.use(express.urlencoded({ extended: false }));

// Log generates from the middleware
app.use(logReqRes('log.txt'));

// Routes
app.use('/api/user',userRouter);
app.listen(PORT, () => console.log(`Server Started at PORT http://localhost:${PORT}`));