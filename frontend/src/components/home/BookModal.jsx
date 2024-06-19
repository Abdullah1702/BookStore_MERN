import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

export default function BookModal({book, onClose}){
    return(
        <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()} className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col gap-4 relative">
                <AiOutlineClose onClick={onClose} className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer" />
                <h1 className="text-3xl bg-pink-200 py-2 px-4 rounded-md text-gray-500">{book.publishYear}</h1>
                <h2 className="text-xl text-gray-500">{book._id}</h2>
                <div className="flex gap-2 items-center">
                    <PiBookOpenTextLight className='text-2xl text-red-400' />
                    <h1 className="w-fit text-3xl text-gray-500">{book.title}</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <BiUserCircle className="text-red-300 text-2xl" />
                    <h1 className="text-3xl text-gray-500">{book.author}</h1>
                </div>
                <p className="mt-4">Lorem ipsum dolor sit amet</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem unde quis numquam odio et voluptates. Repudiandae quos unde totam repellendus fugit voluptate. Provident tempora eaque ea distinctio aliquam quam.</p> 
            </div>
        </div>
    )
}