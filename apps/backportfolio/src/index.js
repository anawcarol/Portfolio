import express from 'express';
import connectDB from './database/db.js';
import Router from './routes/index.js';

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(Router);

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

