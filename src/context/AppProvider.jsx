/*
    Este archivo genera el contexto, creando un objeto mediante la funcion createContext
*/

import axios from "axios";
import { useState } from "react";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";


export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        producto: [],
        productoSeleccionado: null,
        venta: [],
        // Agrega más valores de estado si es necesario
    });

    const buscarProducto = async (txtBuscar) => {
        const response = await axios.get('https://Api-bazar.somee.com/api/Product/getProductos',{
            params: {
                txtBusqueda: txtBuscar, // Pasar el parámetro txtBusqueda si se proporciona
            },
        })
        
        setState(prevState => ({
            ...prevState,
            producto: response.data, // Asigna los datos de la respuesta a `producto`
        }));

        // console.log(response.data)
    };

    const getProducto = async (id) =>{
        const response = await axios.get('https://Api-bazar.somee.com/api/Product/getProducto/' + id)
        setState(prevState => ({
            ...prevState,
            productoSeleccionado: response.data
        }))
        console.log(response.data)
    }

    const insertarVenta = async (productoSeleccionado) =>{
        const fechaActual = new Date();
        const year = fechaActual.getFullYear();
        const month = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Meses empiezan en 0, por eso se suma 1
        const day = String(fechaActual.getDate()).padStart(2, '0');

        const fechaFormateada = `${year}-${month}-${day}`;
        const venta = {
            fecha: fechaFormateada, // Puedes personalizar estos valores
            total: productoSeleccionado.price,
            nombreProducto: productoSeleccionado.title
        };
    
        // Función para enviar la solicitud
        
        try {
            const response = await axios.post("https://Api-bazar.somee.com/api/Product/insertVenta", venta);
            //  Mensaje de éxito del servidor
            console.log("Venta insertada:");
            alert('Venta realizada')
        } catch (error) {
            
            console.error("Error al insertar la venta:", error);
        }
        
    }

    const getVentas = async () =>{
        const response = await axios.get('https://Api-bazar.somee.com/api/Product/getVentas')
        setState(prevState => ({
            ...prevState,
            venta: response.data
        }))
        // console.log(response.data)
    }

    return (
        <AppContext.Provider 
            value={{ 
                state,
                setState, 
                buscarProducto,
                getProducto,
                insertarVenta,
                getVentas,
            }}>
            {children}
        </AppContext.Provider>
    );
};
