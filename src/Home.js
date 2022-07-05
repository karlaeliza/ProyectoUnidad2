import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import App from "./App"
import Mostrardatos from "./About";
import Informacion from "./navbar";


const Home = () => {
   // eslint-disable-next-line
  const Inicio = () => <h1>Home</h1>;
  // eslint-disable-next-line
  const Pokemon = () => <h1>Pokemon List</h1>;
  // eslint-disable-next-line
  const About = () => <h1>191373</h1>;
  return (
    <>
    <img className="Imagen" src="./azul.jpg" alt="perfil"></img>
 <Informacion/>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<App  />}></Route>
          <Route path="/matricula" element={< Mostrardatos/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default Home;