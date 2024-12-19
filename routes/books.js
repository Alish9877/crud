const express = require('express');
const Book = require('../models/Book');
const router = express.Router();


router.get('/', async (req, res) => {
    const books = await Book.find();
    res.render('index', { books });
});


router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/', async (req, res) => {
    await Book.create(req.body);
    res.redirect('/books');
});


router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('show', { book });
});


router.get('/:id/edit', async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('edit', { book });
});


router.put('/:id', async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/books');
});


router.delete('/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/books');
});
module.exports = router;