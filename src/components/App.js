import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import CountButton from './CountButton/CountButton'

// const products = [
//   'tooth paste',
//   'tooth brush',
//   'mouth wash',
//   'dental floss',
//   'mouth guard',
// ]

const App = () => {
  
    return (
      <div>
        {/* <SearchBar   products={products}/> */}
        <CountButton incrementBy={5} buttonColor="yellow"/>
      </div>
    )


  }

export default App