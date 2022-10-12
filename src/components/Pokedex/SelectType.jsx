import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/selectType.css"

const SelectType = ({selectedType, setSelectedType, setPokeSearch}) => {

    const [listType, setListType] = useState()

    useEffect(()=>{

        const URL= 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
        .then(res=> setListType(res.data.results))
        .catch(err=> console.log(err))
    },[])

    const handleChange= e => {
      setSelectedType(e.target.value)
      setPokeSearch("")
    }
console.log(listType)

  return (
    <select value={selectedType} onChange={handleChange}>
      <option className='option_box' value="All">All pokemons</option>
        {
           listType?.map(types => (
            <option className='option_box' key={types.name} value={types.name}>{types.name}</option>
          ))

        }
     </select>
    
  )
}

export default SelectType