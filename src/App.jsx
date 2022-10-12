import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Pokedex from "./components/Pokedex";
import Pokemonid from "./components/Pokemonid";
import { Routes, Route } from "react-router-dom";

function App() {


  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<Pokemonid />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


//Install dependencies and then, proceed to do the repective settings. I add the settings in main component. I add the provider from react-redux and the Hashroute for SPA on my App. 

//I create a file called store on src component. There, I will store my global states in a file called Index.This one has to be cofigured with the command configureStore. 

  //On a file called slice, I create the different states by creating files.js with the name.slice.jsx. .slice is optional but it is a good practice. After create the slices I need go get them configure with the command createSlice. 

//on my APP Ill have the different routes. 







 