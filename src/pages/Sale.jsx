import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'

const Sale = () => {
  const {state, getVentas} = useContext(AppContext)
  useEffect(() => {
    getVentas(); // Llama a la función al renderizar la página
  }, []); 
  return (
    <>
      <h1>Ventas</h1>
      {
        state.venta ? (
          <table className="table table-striped table-hover mt-4">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Nombre del Producto</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                {state.venta.map((venta, index) => (
                    <tr key={index}>
                        <td>{venta.fecha}</td>
                        <td>{venta.nombreProducto}</td>
                        <td>${venta.total}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        ):(
          <p>No hay ventas</p>
        )
      }
    </>
  )
}

export default Sale