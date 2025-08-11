const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
};

module.exports = connectToDb;
