import React, { useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

//const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json()
        if(data.drinks) {
          const {
            strDrink: name,
            strCategory: category,
            strAlcoholic: info,
            strGlass: glass,
            strDrinkThumb: image,
            strInstructions: instructions, 
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
            strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
          ]
          const measures = [
            strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
            measures,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
         console.log(error);     
      }
      setLoading(false)    
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if(!cocktail) {
    return (
      <h2 className='section-title'>Non ci sono cocktail da mostrare</h2>
    )
  } else {
    const {
      name,
      image,
      info,
      category,
      glass,
      instructions,
      ingredients,
      measures,
    } = cocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          torna a casa
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
        </div>
        <div className="drink-info">
          <p>
            <span className="drink-data">Nome:</span> {name}
          </p>
          <p>
            <span className="drink-data">Categoria:</span> {category}
          </p>
          <p>
            <span className="drink-data">Informazioni:</span> {info}
          </p>
          <p>
            <span className="drink-data">Bicchiere giusto:</span> {glass}
          </p>
          <p>
            <span className="drink-data">Istruzioni:</span> {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredienti:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item} </span> : null
            })}
          </p>
        </div>
      </section>
    )
  }
}

export default SingleCocktail