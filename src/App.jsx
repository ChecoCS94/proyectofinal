/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, {useEffect, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./pages/inicio";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Producto from "./pages/producto";
import Form from "./pages/registro";
// import Login12 from "./pages/login12";
/**
 *
 * @return {html} El componente
 */
function App() {
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
      <Route path="/login12" element={<Form/>}/>
    </Routes>
  );
}

export default App;
