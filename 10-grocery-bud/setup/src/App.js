import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: ''})

  const handlesubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'Inserisci un elemento')
    } else if (name && isEditing) {
      setList(
        list.map((item)=> {
          if (item.id === editID) {
            return {...item, title: name}
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Modificato con successo')
    } else {
      showAlert(true, 'success', 'Elemento aggiunto alla lista')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }    
  }

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show, type, msg})
  }
  const clearList = () => {
    showAlert(true, 'danger', 'Lista vuota')
    setList([])
  }
  const removeItem = (id) => {
    showAlert(true, 'danger', 'Elemento rimosso')
    setList(list.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]) // salvo in locale gli elementi della lista e ogni volta che che aggiorno la aggiorna

  return (
    <section className='section-center'>
      <form className="grocery-form" onSubmit={handlesubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Lista della spesa</h3>
        <div className="form-control">
          <input
            type="text"
            className='grocery'
            placeholder='es. uova'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          <button className="submit-btn" type='submit'>
            {isEditing ? 'modifica' : 'invia'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList}>pulisci tutto</button>
      </div>)
      }
    </section>
  )
}

export default App
