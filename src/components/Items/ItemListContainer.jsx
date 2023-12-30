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
 
  let {cat} = useParams()

  if (cat != "servicios" && cat!="productos"){

    setCategoria("productos")
  
  }else{
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
      
    });

  },categoria);


 
    
  return (
    <div >
        <h1>
          {cat}
        </h1>
        <ItemList productos = {productos}/>
    </div>
    
  )
}

export default ItemListContainer