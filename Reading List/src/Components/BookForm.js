import React, { useContext,useState } from 'react';
import { BookContext } from '../Contexts/BookContext';

const BookForm = () => {
    // const {addBook} = useContext(BookContext)
    const { dispatch} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author,setAuthor] =useState('')
   
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK', book: {
                title: title,
                author: author
        }})
        setAuthor('');
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Book Name</label>
                <input type='text' placeholder='Input book name here...' onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div className='form-group'>
                <label>Author</label>
                <input type='text'placeholder='Input author here...' onChange={(e) => setAuthor(e.target.value)} value={author}/>
            </div>
            <input type='submit'/>
        </form>
    )
}

export default BookForm;