import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [answer, setAnswer] = useState(true);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => {
          setAnswer(!answer)
        }}>
          {answer ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{answer ? null : info}</p>
    </article>
  );
};

export default Question;
