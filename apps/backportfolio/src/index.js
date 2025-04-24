import express from 'express';
import connectDB from './database/db.js';

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

