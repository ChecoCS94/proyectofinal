/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import axios from "axios";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Producto = () => {
  const params = useParams();
  const [producto, setProducto] = useState([]);
  // console.log(params);
  const peticionProducto = async () => {
    await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`)
        .then((response) => {
          setProducto(response.data);
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
  };

  const estiloCarta = {width: "18rem"};

  useEffect(() => {
    peticionProducto();
  }, []);
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div key={producto._id} className="card" style={estiloCarta}>
            <img className="card-img-top" src={producto.image} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">{producto.product_name}</h5>
              <p className="card-text">{producto.description}</p>
              <h6>Precio: ${producto.price}</h6>
              <a className="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
