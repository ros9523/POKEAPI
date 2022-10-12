import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/pokemonId.css";
import Header from "./shared/Header"

const Pokemonid = () => {
  const [pokeInfo, setPokeInfo] = useState();

  const { name } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    axios
      .get(URL)
      .then((res) => setPokeInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(pokeInfo);

  const objwidth0={
    width: `${(pokeInfo?.stats[0].base_stat / 150) * 100}%`
  }
  const objwidth1={
    width: `${(pokeInfo?.stats[1].base_stat / 150) * 100}%`
  }
  const objwidth2={
    width: `${(pokeInfo?.stats[2].base_stat / 150) * 100}%`
  }
  const objwidth3={
    width: `${(pokeInfo?.stats[3].base_stat / 150) * 100}%`
  }


console.log(pokeInfo)
  return (
    <article className="card-container">
      <div className="card-container__secondary">
        {/* <img src="/vite.svg"/>  only slash and then the name of the pic but it if I have another archive I need to name it on the route For example /images/vite.svg*/}
        <div className="card-container__name">
          <header className={`bg-${pokeInfo?.types[0].type.name}`}>
          <img
            src={pokeInfo?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          </header>
          <h1>{pokeInfo?.name}</h1>
          <span>{`#${pokeInfo?.id}`}</span>
          <div className="card-container__vitals">
            <span>Weight:{pokeInfo?.weight}</span>
            <span>Height:{pokeInfo?.height}</span>
          </div>
        </div>

        <div className="card-container__type-skills">
          <div className="card-container__typeskill ">
            <ul className="typesSkills">
              Type:
              {
                pokeInfo?.types.map(e=><li key={e.type.name}>{e.type.name}</li>)
              } 
            </ul>
          </div>
          <div className="card-container__typeskill">
            <ul className="typesSkills"> skill
            {
              pokeInfo?.abilities.map((e)=> <li className='card-container__typeskill--elements' key={e.ability.name}>{e.ability.name}</li>)
            }
            </ul>
          </div>
        </div>

        <div className="card-container__stats">
          <h1>stats</h1>
          <div className="card-container__stats card-container__stats--hp">
            <div className="card-container__stats--stat">
            <span>{pokeInfo?.stats[0].stat.name}</span>
            <span>{pokeInfo?.stats[0].base_stat}</span>
            </div>
            <div className="bar-stats__father">
              <div className="bar-stats__son  bar-stats__son--hp" style={objwidth0}>
                <span className="bar-stats__text"></span>
              </div>
            </div>
          </div>
          <div className="card-container__stats card-container__stats--attacks">
            <div className="card-container__stats--stat">
              <span>{pokeInfo?.stats[1].stat.name}</span>
              <span>{pokeInfo?.stats[1].base_stat}</span>
            </div>
            <div className="bar-stats__father">
              <div className="bar-stats__son" style={objwidth1}>
                <span className="bar-stats__text"></span>
              </div>
            </div>
          </div>
          <div className="card-container__stats card-container__stats--defense">
          <div className="card-container__stats--stat">
            <span>{pokeInfo?.stats[2].stat.name}</span>
            <span>{pokeInfo?.stats[2].base_stat}</span>
          </div>
            <div className="bar-stats__father">
              <div className="bar-stats__son" style={objwidth2}>
                <span className="bar-stats__text"></span>
              </div>
            </div>
          </div>
          <div className="card-container__stats card-container__stats--speed">
          <div className="card-container__stats--stat">
            <span>{pokeInfo?.stats[3].stat.name}</span>
            <span>{pokeInfo?.stats[3].base_stat}</span>
          </div>
            <div className="bar-stats__father">
              <div className="bar-stats__son" style={objwidth3}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-container__movements">
          <h2>Movements</h2>
          <p>
            {pokeInfo?.moves.map((mov) => (
              <span key={mov.name}className="card-container__movements card-container__movements--each-one">
                {mov.move.name}
              </span>
            ))}
          </p>
        </div>

      </div>
    </article>
  );
};

export default Pokemonid;
