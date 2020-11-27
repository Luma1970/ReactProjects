import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#6a2aff').all(10)); 
// il numero tra parentesi indica il numero di tinte e sfumature per cui andrà diviso il 100% quindi più e alto meno campioni si avranno

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
     
  }

  return (
    <>
    <section className="container">
      <h3>Generatore di colori</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={ (e) => setColor(e.target.value)}
          placeholder="#6a2aff"
          className={`${error ? 'error' : null}`}/>
        <button className="btn" type="submit">
          invia
        </button>
      </form>
    </section>
    <section className="colors">
      {list.map( (color, index) => {
        console.log(color)
        return <SingleColor key={index} {...color} index={index} />
      })}
    </section>
    </>
  )
}

export default App
