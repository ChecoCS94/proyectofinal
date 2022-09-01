/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, {useEffect, useState} from "react";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../componentes/Navbar";
import {Link} from "react-router-dom";

/**
 *
 * @return {html} El componente
 */
function Inicio() {
  // const [usuarios, setUsuarios] = useState([]);
  const [resultados, setResultados] = useState([]);

  const peticionGet = async () => {
    await axios.get("https://ecomerce-master.herokuapp.com/api/v1/item")
        .then((response) => {
          setResultados(response.data);
          // console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
  };

  const filtrar = (productoBusqueda) => {
    const resultadosBusqueda = resultados.filter((elemento) => {
      if (elemento.product_name.toString().toLowerCase().includes(productoBusqueda.toLowerCase())) {
        return elemento;
      } else {
        peticionGet();
      }
    });
    setResultados(resultadosBusqueda);
  };
  useEffect(() => {
    peticionGet();
  }, []);

  const estiloCarta = {width: "18rem"};
  return (
    <>
      <div className="App">
        <Navbar filtrar={filtrar}></Navbar>
        <div className="container-fluid">
          <div className="row">
            {resultados && resultados.map((resultado) => (
              <div key={resultado._id} className="card" style={estiloCarta}>
                <img className="card-img-top" src={resultado.image} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">{resultado.product_name}</h5>
                  <p className="card-text">{resultado.description}</p>
                  <h6>Precio: ${resultado.price}</h6>
                  <Link to={`/producto/${resultado._id}`} className="btn btn-primary">Ir al producto</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
