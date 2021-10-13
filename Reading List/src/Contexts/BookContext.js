import React, { createContext, useReducer,useEffect } from 'react';
import { BookReducer } from '../Reducers/BookReducer';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const result = localStorage.getItem('books')
        return result.length > 0 ? JSON.parse(result) : []
    })
    
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )  
}

export default BookContextProvider;