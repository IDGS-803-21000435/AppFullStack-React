import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../context/AppContext'

const ProductView = () => {
  const {id} = useParams()
  const {state, insertarVenta} = useContext(AppContext)
  return (
    <>
      {
        state.productoSeleccionado ? (
          <div className="container mt-5" key={id}>
            <div className="card shadow-lg p-4">
              <h1 className="text-center">{state.productoSeleccionado.title}</h1>
              
              <div className="text-center my-4">
                  <img
                    src={state.productoSeleccionado.thumbnail}
                    alt={state.productoSeleccionado.title}
                    className="img-fluid rounded"
                    style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                  />
              </div>

              <div className="card-body">
                <h4 className="card-title text-center">{state.productoSeleccionado.brand}</h4>
                <p className="card-text text-center text-muted">{state.productoSeleccionado.description}</p>
                
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item"><strong>Categoría:</strong> {state.productoSeleccionado.category}</li>
                  <li className="list-group-item"><strong>Precio:</strong> ${state.productoSeleccionado.price}</li>
                  <li className="list-group-item"><strong>Descuento:</strong> {state.productoSeleccionado.discountPercentage}%</li>
                  <li className="list-group-item"><strong>Calificación:</strong> {state.productoSeleccionado.rating} ★</li>
                  <li className="list-group-item"><strong>Stock:</strong> {state.productoSeleccionado.stock}</li>
                </ul>
              </div>

              <div className="text-center mt-4">
                <h5>Imágenes</h5>
                <div className="d-flex justify-content-center gap-2 mt-2">
                  {
                    state.productoSeleccionado.productImages.map((imageUrl, index) => (
                      <img
                          key={index}
                          src={imageUrl}
                          alt={`Imagen ${index + 1}`}
                          className="rounded-circle"
                          style={{ width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer' }}
                      />
                    ))
                  }
                </div>
              </div>
              <button className='m-4' onClick={() => insertarVenta(state.productoSeleccionado)}>Comprar</button>
            </div>
          </div>
        ):(
          <p>No se selcciono un producto</p>
        )
      }
    </>
  )
}

export default ProductView