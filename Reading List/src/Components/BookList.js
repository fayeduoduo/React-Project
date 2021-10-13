import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';
import BookDetails from './BookDetail';

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length > 0 ? (
        <div className='book-list'>
            <ul>
                {
                    books.map(book => {
                        return (
                            <BookDetails book={book} key={ book.id}/>
                        )
                    })
                }
            </ul>
        </div>
    ):(<div className='empty'>No Book Content here！</div>)
}


export default BookList;