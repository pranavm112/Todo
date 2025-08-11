const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: false,
    }
});

module.exports = mongoose.model('Todo', todoSchema);
