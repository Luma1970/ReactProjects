import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  },[list]) // in questo modo anche se cancello tutto subito dopo un altro avviso, il nuovo avviso resta per 3 secondi perché ho riaggiornato la list
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
