/* eslint-disable max-len */
import React, {useEffect, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./pages/inicio";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Producto from "./pages/producto";
import Form from "./pages/registro";


/**
 *
 * @return {html} El componente
 */
function App() {
  const [productoID, setProductoID] = useState("");
  const [isUserLogged, setisUserLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userSession = localStorage.getItem("isUserLogged");
    setisUserLogged(JSON.parse(userSession));
  }, []);

  useEffect(() => {
    localStorage.setItem("isUserLogged", isUserLogged);
  }, [isUserLogged]);

  const logout = () => {
    setisUserLogged(false);
    localStorage.clear();
    navigate("/login", {replace: true});
  };

  return (
    <Routes>
      <Route index element={<Inicio/>}/>
      <Route path="/home" element={<Inicio/>}/>
      <Route path="/producto/:id" element={<Producto/>}/>
      <Route path="/registro" element={<Form/>}/>

    </Routes>
  );
}

export default App;
