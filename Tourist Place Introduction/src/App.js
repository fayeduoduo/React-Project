import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  console.log(tours)

  const deleteTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Trip Destionation Info</h2>
          <button className='btn' onClick={() => fetchTours()
          }>Retrive Again</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
