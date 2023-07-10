const express = require("express");
const List = require("../model/Todoschema");
const router = express.Router();
router.use(express.json());

require('../db/connection')


router.post('/todos', async (req, res) => {
    // console.log(req.body);

    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: "Please fill the title and description properly" });
    } else {
        const list = new List({title, description});

        try {
            await list.save();
            res.status(201).json({ message: "Successfully created a new todo item" });
        } catch (error) {
            res.status(500).json({ error: "An error occurred while creating a new todo item" });
        }
    }
});

router.get('/todos', async (req, res) => {
    try {
        const todos = await List.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while retrieving todo items" });
    }
});


module.exports = router;
