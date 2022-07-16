import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import CountButton from './CountButton/CountButton'



const App = () => {

  const [productsState, setProductsState] = useState([])

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title
        })
        setProductsState(newProductsState)
      })


  }, [])

  const hasProducts = productsState.length > 0

  return (
    <div>
      {hasProducts ? <SearchBar products={productsState} /> : "Loading"}
      {/* <CountButton incrementBy={2} buttonColor="yellow"/> */}
    </div>
  )


}

export default App