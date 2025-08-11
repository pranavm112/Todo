const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const connectToDb = require('./db/db');

dotenv.config();
connectToDb();
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use('/api/todos',todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})