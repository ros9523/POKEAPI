import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./Pokedex/PokemonCard";
import SearchInput from "./Pokedex/SearchInput";
import SelectType from "./Pokedex/SelectType";
import "./styles/pokedex.css"

const Pokedex = () => {

  
  //States
  const [pokemons, setPokemons] = useState();  //This state is used to store the information obtained from the API.
  const [pokeSearch, setPokeSearch] = useState();
  const [selectedType, setSelectedType] = useState("All");


  //↓This is used to do the petition of async information. On this block, I have conditions that allows me to handle the things I wanna action and render.

  useEffect(() => {

    //first use case. If I select an specific pokemon on the dropdown menu, this will be executed. 
    if(selectedType !== 'All'){
      const URL = `https://pokeapi.co/api/v2/type/${selectedType}/`

      //Need to check this part on the videos. 
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
    } else if(pokeSearch){
      //second use case. If I search an spefic pokemon, this will done ↓
     
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`


      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
    } else {
    //this is what I display first. All the pokemon. 
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, selectedType])

  const nameTrainer = useSelector(state => state.nameTrainer)
  //to select the state when I store the name of the trainer.  
  const handleNext = ()=>{
      const URL = pokemons.next
      axios.get(URL) 
      .then(res => setPokemons(res.data))
      .catch(err=> console.log(err))
  }

  const handleBack=()=>{
      const URL = pokemons.previous 
      axios.get(URL)
      .then(res=> setPokemons(res.data))
      .catch(err=> console.log(err))
    }
  return (
    <div className="pokedex-container">
      <h1>Welcome Trainer {nameTrainer}</h1>
      <div className="containerInputType">      
      <SearchInput setPokeSearch={setPokeSearch} setSelectedType={setSelectedType} />
      <SelectType selectedType={selectedType} setSelectedType={setSelectedType} setPokeSearch={setPokeSearch} />
      <div>
        <button className="pagination" onClick={handleBack}>Back</button>
        <button className="pagination" onClick={handleNext}>Next</button>
        </div>
      </div>
      <div className="cards-container">
        
        {
          pokemons?.results.map((pokemon) => (
          <PokemonCard key={pokemon.url} url={pokemon.url} /> ))
        }
      </div>
    </div>
  );
};

export default Pokedex;
