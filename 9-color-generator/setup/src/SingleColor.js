import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false)
  const bckg = rgb.join(',') //trasformo i numeri in stringa e li divido con virgole
  const hex = rgbToHex(...rgb) //funzione che trasforma rgb in hex vedi utils.js

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])
  
  return (
    <article className={`color ${index > 9 && 'color-light'}`} style={{backgroundColor: `rgb(${bckg})`}}
    onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hex) //metodo per copiare gli appunti
    }}> 
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copiato negli appunti</p>}
    </article>
  ) // non applico un colore semplice al backg ma la funzione che richiama il mio rgb che fa parte dell'oggetto dellarray nell'API
}

export default SingleColor
