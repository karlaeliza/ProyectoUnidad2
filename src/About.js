import React from "react";
import "./index.css"

const Mostrardatos = () => {

    return (
        <div>
            <div>
                <img className="perfiles" src="./karla.jpeg" alt="perfil"></img>
            </div>
            <div>
            <h1>Karla Elizabeth Hernandez de Lira</h1><br></br>
            <h5>Studen of Universidad Tecnológica de Aguascalientes</h5><br></br>

            <div class="hobbies">
        <table>
            <tr>
                <td>1-ver peliculas y doramas</td>
            </tr>
            <tr>
                <td>2-leer</td>
            </tr>
            <tr>
                <td>3-cocinar</td>
            </tr>
            <tr>
                <td>4-salir</td>
            </tr>
            <tr>
                <td>5-trabajar</td>
            </tr>
        </table>
    </div>
            </div>
        </div>
     );

};
export default Mostrardatos;