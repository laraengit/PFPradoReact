

import React , { useEffect, useState } from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import Servicio from './components/Servicio'
import ComponenteMuestra from './components/ComponenteMuestra'
import ItemDetailContainer from './components/ItemsDetail/ItemDetailCointainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




const App = () => {
  /* const getProducts = async() =>{
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()

    return data
  }
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((product)=>setProducts(product))
  }) */

  return (
    <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path = "/" element = {<ItemListContainer/>}/>
            <Route exact path = "/:cat" element = {<ItemListContainer/>}/>
            <Route exact path = "/item/:id" element = {<ItemDetailContainer/>}/>
            

        </Routes>

      </BrowserRouter>
      {/* {
        products.map((prod)=>{
          return(
            <ComponenteMuestra
            price = {prod.price}
            title = {prod.title}
            />
          )

        })

      }
       */}

    </div>
  )
}

export default App