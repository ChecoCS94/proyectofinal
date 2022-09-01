/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
// import {MenuItems} from "./MenuItems";
// import {Nav} from "react-bootstrap";

/**
 * @return {html} Componente de barra de navegación
 */
// eslint-disable-next-line react/prop-types
const Navbar = ({filtrar}) => {
  const [busqueda, setBusqueda] = useState("");
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(busqueda);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Hidden brand</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Iniciar sesión</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registro">Registrarse</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" onChange={handleChange} value={busqueda} placeholder="Búsqueda" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
