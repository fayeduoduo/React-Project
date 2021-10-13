import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';



const NarBar = () => {
    const { books } =useContext(BookContext)
    return (
        <div className='navbar'>
            <h1>Fayeduoduo Reading List</h1>
            <p>Current Reading List:{ books.length} books</p>
        </div>
    )
}

export default NarBar