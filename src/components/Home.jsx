import React from "react";
import { setNameTrainer } from "../assets/store/Slices/nameTrainer.slice";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import Pokedex from "./styles/images/Pokedex.png";
import pikachu from "./styles/images/pikachu.png";
import Header from "./shared/Header";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  //Allows me to use the routes
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value.trim();

    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue));
      //dispatch is to action the status.
      navigate("/pokedex");
    }
  };

  return (
    <>
      <Header />
      <div className="main_card">
        <div className="main_card__elements">
          <img className="pokedex_card" src={Pokedex} />
          <img className="pikachu_card" src={pikachu} />
          <h1>Hi Trainer!</h1>
          <h1>To start, give me your trainer name</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="element element--input"
              id="name"
              type="text"
              placeholder="Tu nombre"
            />
            <button className="element element--button">Catch them all</button>
          </form>
        </div>
      </div>
      </>
  );
};

//Here I create the form that will accept the name. I do the validations

export default Home;

//how do I use images like the teacher did it.
//
