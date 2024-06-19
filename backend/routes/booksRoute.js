import express from "express"
import { Book } from "../models/bookModel.js"

export const route = express.Router()

// Route to save a book
route.post('/', async (req, res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: 'send all required fields: title, author, publishYear '
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook);

        return res.status(201).send(book)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message : error.message})
    }
})

// Route to get all books from database
route.get('/',async (req, res) =>{
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books 
        }) 
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// route to get a single book based on id
route.get('/:id', async (req, res) =>{
    try {
        const {id} = req.params
        const book = await Book.findById(id);
        
        return res.status(200).json(book)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Route to update a book
route.put('/:id', async (req, res) =>{
    try {
        const {id} = req.params
        let result = await Book.findByIdAndUpdate(id, req.body);
        
        if(!result){
            return res.status(404).json({message : "Book not found"})
        }
        return res.status(200).json({message: 'Book was successfully updated'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message : error.message})
    }
})

// Route to delete a book
route.delete('/:id', async (req,res) =>{
    try {
        const {id} = req.params
        let result = await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({message : "Book not found"})
        }
        return res.status(200).json({message: 'Book was successfully deleted'})

    } catch (error) {
        console.log(error.message)
        res.status(500).send({message : error.message})
    }
})

