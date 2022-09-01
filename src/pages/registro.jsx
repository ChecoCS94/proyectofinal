/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import axios from "axios";
import React, {useState} from "react";
//import './registroUsuario.css';

const Form = () => {
  const [credentials, setCredentials] = useState({});

  const handleInputCredential = ({target: {value, name}}) => {
    //  DESTRUCTURING 👆🏽  event: { target: { value, name  }}
    setCredentials({...credentials, [name]: value});
    // COPIA DE  OBJETO { object, age: 14, email: hola@devf.com, isActive:tue }
    console.log(credentials);
  };

  const registrarUsuario = async () => {
    await axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", credentials).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
  return (
    <>
   <div class="">
    <div class="container-fluid" >
    <img src="https://d1ih8jugeo2m5m.cloudfront.net/2022/07/el-ecommerce-que-es.jpg" class="img-fluid" alt="Responsive image"></img>
    <br></br>
    <br></br>
    <h1 class="alert alert-primary" >Registro</h1>
    <span class="border border-info"></span>
   
    
    
      <input
        required
        value={credentials.first_name}
        name="first_name"
        onChange={handleInputCredential}
        placeholder="Nombre"
      />
      <input
        required
        type="text"
        value={credentials.last_name}
        name="last_name"
        onChange={handleInputCredential}
        placeholder="Apellido"
      />

      <input
        required
        type="date"
        value={credentials.birth_date}
        name="birth_date"
        onChange={handleInputCredential}
      />
      <div onChange={handleInputCredential}>
        <input type="radio" value="F" name="gender"/>Masculino
        <input type="radio" value="M" name="gender"/>Femenino
      </div>
      <input
        required
        type="text"
        value={credentials.email}
        name="email"
        onChange={handleInputCredential}
        placeholder="Correo electrónico"
      />
      <input
        required
        type="text"
        value={credentials.password}
        name="password"
        onChange={handleInputCredential}
        placeholder="Contraseña"
      />
      <br></br>
      <br></br>
      <button class="btn btn-warning" type="submit" onClick={registrarUsuario}> Registrar</button>
      <br></br>
      </div>

      </div>
    </>

  );
};

export default Form;
