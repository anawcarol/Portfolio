import mongoose from 'mongoose';

const connectDB = () => {
    console.log('Connecting to MongoDB...');
    mongoose.connect("mongodb+srv://anacarolinamfialho:NC3UD5IgpkGguj64@portfolio.c8cg0tl.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio").then(() => {
        console.log('MongoDB connection successful');
    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    })
}

export default connectDB;