import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
/* 
installando il plugin react icons --save ho un'enrme serie di icone gratuite che si trovano qui:
https://react-icons.github.io e che posso usare inserendole come componenti e indicando la libreria in cui si trovano.
Sono icone svg e quindi posso modificarle con il CSS
*/

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number)=> {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = ()=> {
    setIndex((index)=> {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = ()=> {
    setIndex((index)=> {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = ()=> {
    let randomNumber = Math.floor(Math.random() * people.length);
    /* Math.floor arrotonda per difetto mentre
    Math.random genera un numero casuale tra 0.1 e 0.9999999... moltiplicandolo per la lunghezza dell'array
    ottengo un numero tra 0 e 3 il che copre tutte le mie possibilità
    */
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    /*
    voglio evitare che la casualità includa la ripetizione della stessa persona
    */
    setIndex(checkNumber(randomNumber));
    /*
    passo il numero casuale alla mia funzione di verifica numero per evitare
    che scelga un numero inesistente
    */
  };
  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>sorprendimi</button>
    </article>
  )
};

export default Review;
