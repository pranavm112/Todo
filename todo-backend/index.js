const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const connectToDb = require('./db/db');

dotenv.config();
connectToDb();

const app = express()



app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://todo-pqq2.vercel.app" 
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use('/api/todos',todoRoutes);

app.get('/', (req, res) => {
    res.json({ ok: true, message: "Backend is running fine 🚀" });
});

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})