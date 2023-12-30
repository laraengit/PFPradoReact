import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React , { useEffect, useState } from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import Servicio from './components/Servicio'
import ComponenteMuestra from './components/ComponenteMuestra'
import ItemDetailContainer from './components/ItemsDetail/ItemDetailCointainer'


import CardWidget from './components/navbar/CardWidget'

import Cart from './components/cart/Cart'
import Ingreso from './components/Ingreso'
import SendOrder from './components/SendOrder'
import   ShoppingCartContext , {ShoppingCartProvider} from './context/ShoppingCartContext'
import ProductsShownProvider from './context/ProductsShownContext'

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
    <div id= "principal">
      <ProductsShownProvider>
        <BrowserRouter>
        <ShoppingCartContext>
          <NavBar />

        
          
            <Routes>
              {/* <Route exact path = "/" element = {<Home/>}/>
              <Route exact path = "/about" element = {<About/>}/>
              
              <About/> */}
                <Route exact path = "/" element = {
                    <ItemListContainer/>
                
                }/>
                <Route exact path = "/:cat" element = {
                  <ItemListContainer/>
                }/>
                <Route exact path = "/item/:id" element = {
                  <ItemDetailContainer/>
                }/>
                  
              
              <Route exact path = "/cart" element = {
                  <Cart/>
              }/>
              <Route exact path = "/ingreso" element = {<Ingreso/>}/>
              <Route exact path = "/orden" element = {<SendOrder/>}/>
              

          </Routes>
          </ShoppingCartContext>
        </BrowserRouter>

      </ProductsShownProvider>
      
      
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