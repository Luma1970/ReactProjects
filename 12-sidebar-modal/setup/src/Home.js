import React from 'react'
import { FaBars, FaToggleOff } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
const {openSidebar, openModal} = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Mostra il modal
      </button>
    </main>
  )
}

export default Home
