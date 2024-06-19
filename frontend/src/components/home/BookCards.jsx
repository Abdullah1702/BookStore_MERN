import React from "react";
import BookSingleCard from "./BookSingleCard";



export default function BookCards({books}){

    return(
        <div className="flex gap-4 m-4">
            {books.map((book) =>(
                <BookSingleCard key={book._id} book={book} />
            )
            )}
        </div>
    )
}