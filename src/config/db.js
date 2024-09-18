const mongoose = require('mongoose');

const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.mongodb_connection_string);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectMongoDB;