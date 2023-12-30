import React, { useEffect, useState, useContext } from 'react'
import ItemDetailList from './ItemDetailList'
import { useParams } from 'react-router-dom'
import ItemList from '../Items/ItemList'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { ProductContext } from '../../context/ProductsShownContext'

const ItemDetailCointainer = () => {
  const {productsShown, setProducts, categoria, setCategoria} = useContext(ProductContext)

      let {id} = useParams()
      const [producto, setProducto] = useState([])
      useEffect(()=>{
        const db = getFirestore()
        const oneItem = doc(db, categoria, id)

        getDoc(oneItem).then((snapshot)=>{
          if (snapshot.exists()){
            const doc = snapshot.data()
            const docCompleto = {...doc, id:id}
            setProducto(docCompleto)
            
          }
        })

      },[])
      


      /* const p = productsShown.find((p)=>p.id==id)
      console.log(id) */
    return (
    <div>
        {/* <ItemDetailList productos = {productos2} /> */}
        <ItemDetail p={producto}/>
    </div>
  )
}

export default ItemDetailCointainer