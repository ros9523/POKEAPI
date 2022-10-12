import React from 'react'
import "./styles/Searchinput.css"

const SearchInput = ({setPokeSearch, setSelectedType}) => {

// I create a function, use the events and read the information entered by the users. This will be read on Pokedex. 
    const handleSubmit =e=> {
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase())
        setSelectedType("All")
        e.target.searchText.value=""
    }
      


  return (
    <form onSubmit={handleSubmit}>
        <input id="searchText" type="text"/>
        <button>Search</button>
    </form>
  )
}

export default SearchInput