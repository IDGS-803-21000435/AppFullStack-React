import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductView from './pages/ProductView'
import Sale from './pages/Sale'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'
import { AppProvider } from './context/AppProvider'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <AppProvider> {/*context*/}
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/itms' element={<ProductList/>}/>
            <Route path='/item/:id' element={<ProductView/>}/>
            <Route path='/sales' element={<Sale/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
