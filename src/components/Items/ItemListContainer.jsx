import React from 'react'
/* import ItemCount from '../itemCount' */
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import {collection, doc, getDocs, getFirestore} from 'firebase/firestore'
import { ProductContext } from '../../context/ProductsShownContext'
import { Heading } from '@chakra-ui/react'
Heading
const ItemListContainer = () => {
  const {productsShown, setProducts, categoria, setCategoria} = useContext(ProductContext)
 /*  const productos = [
    {id:1, producto: "Crema humectante", descripcion: " Tamaño grande. Puede utilizarse todos los días. Composición natural e hipoalergénica.", precio: 10000, categoria: "500ml", imagen : "/src/assets/humectante.jpg"},
    {id:2, producto: "Crema humectante", descripcion: "Tamaño chico. Puede utilizarse todos los días. Composición natural e hipoalergénica.", precio: 5000, categoria: "250ml", imagen : "/src/assets/humectante.jpg"},
    {id:3, producto: "Gel de ducha", descripcion: "Tamaño grande. Se utiliza durante o luego del baño. ", precio: 10000, categoria: "500ml",imagen : "/src/assets/gelDucha.jpg"},
    {id:4, producto: "Gel de ducha", descripcion: "Tamaño chico. Se utiliza durante o luego del baño.", precio: 5000, categoria: "250ml",imagen : "/src/assets/gelDucha.jpg"},
    {id:5, producto: "Exfoliante", descripcion: "Tamaño grande. Solo se utiliza una o dos veces por semana. Ideal para eliminar impurezas.", precio: 10000, categoria: "500ml",imagen : "/src/assets/exfoliante.jpg"},
    {id:6, producto: "Exfoliante", descripcion: "Tamaño chico. Solo se utiliza una o dos veces por semana. Ideal para eliminar impurezas.", precio: 5000, categoria: "250ml",imagen : "/src/assets/exfoliante.jpg"},
    

  ]

  setProducts(productos) */
  
  let {cat} = useParams()
  /* let name_colecccion
  let productosFiltrados */
  if (cat != "servicios" && cat!="productos"){
    //name_colecccion = "productos" //Por default elijo que se ven los productos
    setCategoria("productos")
  
  }else{
    //name_colecccion = cat
    setCategoria(cat)
    
  }

  const [productos, setProductos] = useState([])
  useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db, categoria);

    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>{
        let documento = {
          ...doc.data(), id: doc.id

        }
        
        return documento
      })
      setProductos(docs)
/*       setProductos(productsShown)
 */      console.log(productos)
      
    });

  },categoria);


  


    /* getDocs(itemsCollection).then((snapshot)=>{
       setProducts(snapshot.docs.map((doc)=>{{ ...doc.data(), id: doc.id}}))})} */


  

 
    
  return (
    <div id = "listContainer">
        <Heading>
          Productos
        </Heading>
        <ItemList productos = {productos}/>
    </div>
    
  )
}

export default ItemListContainer