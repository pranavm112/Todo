const express = require('express');
const Todo = require('../models/Todo')

const router = express.Router();

//Get all todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

//POST create a new todo
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    const saved = await newTodo.save();
    res.status(201).json(saved);
});

//PUT update a todo
/*router.put('/:id', async (req, res) => {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});*/

router.put('/:id', async (req, res) => {
    try {
        const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// DELETE a todo
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;