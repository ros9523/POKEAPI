import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StatPokemon from './StatPokemon'
import {useNavigate} from 'react-router-dom'
import "./styles/pokemonCard.css"

const PokemonCard = ({url}) => {


    const [pokemon, setPokemon] = useState()

    const navigate= useNavigate()

    useEffect (()=> {
        axios.get(url)
        .then(res=>setPokemon(res.data))
        .catch(err=>console.log(err))
    }, [])

    const handleClick=()=> navigate(`/pokedex/${pokemon.name}`)

 console.log(pokemon)

  return (
    <article className={`pokemonCard_container color-${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`card__header bg-${pokemon?.types[0].type.name}`} >
        <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
      </header>
      <section className='pokemondCard_body'>
        <h3 className={`card__name color-text-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul >
          {
            pokemon?.types.map(slot => (
              <li key={slot.type.url}>{slot.type.name}</li>
            ))
          }
        </ul>
      </section>
      <footer>
        <ul>
          {
            pokemon?.stats.map(stat => (
              <StatPokemon 
                key={stat.stat.url}
                infoStat={stat}
              />
            ))
          }
        </ul>
      </footer>
    </article>
)
}


export default PokemonCard