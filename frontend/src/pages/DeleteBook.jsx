import React, {useEffect, useState} from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import { useSnackbar } from 'notistack'


export default function DeleteBook(){

    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState([])
    const navigate = useNavigate();
    let {id} = useParams()
    const {enqueueSnackbar} = useSnackbar()

    useEffect(()=>{
        setLoading(true)
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response)=>{
                setLoading(false)
                setBook(response.data)
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
                alert('An error happened check console')
            })
    },[id])

    const handleDeleteBook = ()=>{
        setLoading(true)
        axios.
            delete(`http://localhost:5555/books/${id}`)
            .then(()=>{
                setLoading(false)
                enqueueSnackbar("Book deleted Successfully", {variant: 'success'})
                navigate('/')
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
                //alert('An error happened check console')
                enqueueSnackbar("Error", {variant: 'error'})

            })
    }

    
  return (
    <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            { loading ? (
                <Spinner />
            ): (
                <div className='flex flex-col mx-auto border-2 border-sky-400 p-4 rounded-xl w-fit'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-grey-500'>Id</span>
                        <span>{book._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-grey-500'>Title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-grey-500'>Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-grey-500'>publishYear</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-grey-500'>Create Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-grey-500'>Updated Time</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                    <button className='p-2 bg-red-600 m-8 text-white' onClick={handleDeleteBook}>Delete</button>
                </div>
            )}
    </div>
  )
}
