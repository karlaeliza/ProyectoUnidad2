import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import  Main  from "./Main.js"
import Infos from "./Info.js"
import Me from "./About.js"
import Dir from "./Navbar.js"

const Home = () => {
  const Inicio = () => <h1>Home</h1>;
  const Pokemon = () => <h1>Pokemon List</h1>;
  const About = () => <h1>191373</h1>;
  return (
    <>
    <Dir />
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<Main />}></Route>
          <Route path="/pokemonsinfo" element={<Infos  />}></Route>
          <Route path="/matricula" element={<Me />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default Home;