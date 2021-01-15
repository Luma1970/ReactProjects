import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className="error-container">
        <h1>Niente da bere qui!</h1>
        <Link to='/' className='btn btn-primary'>
          Torna a servirti
        </Link>
      </div>
    </section>
  )
}

export default Error
