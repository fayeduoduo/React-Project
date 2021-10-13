import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {

  //set initial state
  const [color, setColor] = useState('');
  const [list, setList] = useState([])
  const [error,setError] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10)
      setList(colors)

      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  console.log(list)
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='#f15025' onChange={(e) => setColor(e.target.value)}
            className={ `${error ? 'error' : null}`}/>
          <button type='submit' className='btn'>submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, i) => {
          return (
            <SingleColor key={i} color={color} index={i}/>
            )
          }
        )}
      </section>
    </>
  );
}

export default App;
