import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [query, setQuery] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Domande e risposte sul login</h3>
        <section>
          {query.map((demand) => {
            return (
              <SingleQuestion key={demand.id} {...demand}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  )
}

export default App;
