import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext';

const Home = () => {
  const [txtBuscar, setTxtBuscar] = useState("")
  const navigate = useNavigate();
  const {buscarProducto} = useContext(AppContext)

  const handleChange = (event) => {
    // console.log(txtBuscar)
    setTxtBuscar(event.target.value);
  }
  
  const handleSearch = () => {
    // Redirige a /itms con el valor de búsqueda como parte de la ruta
    buscarProducto(txtBuscar)
    navigate(`/itms?search=${encodeURIComponent(txtBuscar)}`);    
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h1 className="mb-4">Bienvenido</h1>
        <div className="input-group mb-3">
          <input
              type="text"
              className="form-control"
              value={txtBuscar}
              onChange={handleChange}
              placeholder="Nombre, Categoria, Marca"
              aria-label="Nombre, Categoria, Marca"
          />
          <button className="btn btn-primary" onClick={handleSearch}>
              Buscar
          </button>
        </div>
      </div>
    </>
  )
}

export default Home