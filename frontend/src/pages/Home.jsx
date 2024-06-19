import React, {useEffect, useState} from "react";
// npm i axios
import axios from 'axios';
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
// npm i react-icons
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import BookTable from "../components/home/BookTable";
import BookCards from "../components/home/BookCards";

export default function Home(){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false)
    useEffect(() =>{
        setLoading(true);
        axios
           .get('http://localhost:5555/books')
           .then((response) =>{
                setBooks(response.data.data)

                setLoading(false)
           })
           .catch((error)=>{
                console.log(error)
                setLoading(false)
            })
    }, [])
    console.log(books)


    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Books List</h1>
                <Link to='/books/create'>
                       <MdOutlineAddBox className="text-sky-800 text-4xl" /> 
                </Link>
            </div>
            <button className="p-2 bg-green-700 rounded-md border-2" onClick={()=> setToggle(false)}>Cards</button>
            <button className="p-2 bg-orange-700 rounded-md border-2" onClick={()=> setToggle(true)}>Table</button>
            {loading ? (
                <Spinner />
            ) : (
                toggle ? (
                <BookTable books={books} />
                ) : (
                <BookCards books={books} />
                )
            )}
        </div>
    )

}
