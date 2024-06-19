import React from "react";
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md';
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiShow, BiUserCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { useState } from "react";
import BookModal from "./BookModal";

export default function BookSingleCard({book}){
    const [showModal, setShowModal] = useState()
    
    return (

        <div className="flex flex-col items-center gap-8 p-8 border border-sky-500 rounded-xl hover:shadow-xl">
                <h2 className="text-xl text-gray-500">{book._id}</h2>
                <div className="flex gap-2 items-center">
                    <PiBookOpenTextLight className='text-2xl text-red-400' />
                    <h1 className="text-3xl text-gray-500">{book.title}</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <BiUserCircle className="text-red-300 text-2xl" />
                    <h1 className="text-3xl text-gray-500">{book.author}</h1>
                </div>
                <h1 className="text-3xl bg-pink-200 py-2 px-4 rounded-md text-gray-500">{book.publishYear}</h1>
                <div className="flex justify-center gap-4">
                    <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                    onClick={() => setShowModal(true)} />
                    <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                    </div>
                    {showModal && (
                        <BookModal book={book} onClose={()=> setShowModal(false)} /> 
                    )}
            </div>
    )
}