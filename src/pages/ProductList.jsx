import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
  const queryParams = new URLSearchParams(location.search);
  const searchParam = queryParams.get('search'); // Obtiene el valor de `search`
  const [txtBuscar, setTxtBuscar] = useState("") 
  const {state, getProducto, buscarProducto} = useContext(AppContext)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setTxtBuscar(event.target.value);
  }

  const handleClick = (id) =>{
    getProducto(id)

    navigate(`/item/${id}`)
  }

  return (
    <>
     {
      searchParam ? (
        <h1 className="m-5">Resultado de la búsqueda de: {searchParam}</h1>
      ) : (
        <h1 className="m-5 text-secondary">Todos los productos</h1>
      )}

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar"
          value={txtBuscar}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={() => buscarProducto(txtBuscar)}>
            Buscar
        </button>
      </div>
      {
        state ? (
          state.producto.map(product => (
            <>
              <div className="row">
                <div className="col"></div>
                <div className="col" key={product.id} >
                  <div className="card mb-3" style={{ width: '100%', padding: '20px', cursor: 'pointer' }} onClick={() => handleClick(product.id)}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="card-img-top"
                      style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', margin: 'auto' }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.title}</h5>
                      <h6 className="card-subtitle text-muted">{product.category}</h6>
                      <p className="card-text">{product.description}</p>
                      <p className="text-primary fs-4">${product.price}</p>
                      <div className="rating">
                        {'★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </>
          ))
        ):(
          <div>
            <p>sin datos de busqueda</p>
          </div>
        )
      }
    </>
  )
}

export default ProductList