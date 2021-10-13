import React, { useState}from 'react';

const Tour = ({ tour, deleteTour}) => {   
    const { id, image, info, name, price } = tour
    const [read, setRead] = useState(false)

    console.log(deleteTour)
    return (
        <article className='single-tour' key={id}>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>{ read ? info : `${info.substring(0, 126)}...`}
                    <button onClick={() => setRead(!read)}>{read? 'Read Less': 'Read More'}</button>
                </p>
                <button className='delete-btn'
                    onClick={() => deleteTour(id)}>Dislike</button>
            </footer>
        </article>
    )
}

export default Tour;