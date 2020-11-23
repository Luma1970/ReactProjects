import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item)=> item.category))];
/*
Creo un nuovo array di categorie con nome unico in modo da non ripetere più volte il btn con lo
stesso nome di categoria
1) map - ottengo tutte le istanze
2) new Set - restringo gli elementi a quelli con nome univoco
3) ['all', ...] - trasformo l'oggetto che risulta da new Set in un array
*/

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category)=>{ 
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Il nostro menù</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
