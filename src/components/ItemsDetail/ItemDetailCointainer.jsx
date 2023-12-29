import React, { useEffect, useState, useContext } from 'react'
import ItemDetailList from './ItemDetailList'
import { useParams } from 'react-router-dom'
import ItemList from '../Items/ItemList'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { ProductContext } from '../../context/ProductsShownContext'

const ItemDetailCointainer = () => {
  const {productsShown, setProducts, categoria, setCategoria} = useContext(ProductContext)
    /* const productos2 = [
        {id:1, producto: "Crema humectante", descripcion: " Tamaño grande. Puede utilizarse todos los días. Composición natural e hipoalergénica.", precio: 10000, categoria: "500ml", imagen : "/src/assets/humectante.jpg"},
    {id:2, producto: "Crema humectante", descripcion: "Tamaño chico. Puede utilizarse todos los días. Composición natural e hipoalergénica.", precio: 5000, categoria: "250ml", imagen : "/src/assets/humectante.jpg"},
    {id:3, producto: "Gel de ducha", descripcion: "Tamaño grande. Se utiliza durante o luego del baño. ", precio: 10000, categoria: "500ml",imagen : "/src/assets/gelDucha.jpg"},
    {id:4, producto: "Gel de ducha", descripcion: "Tamaño chico. Se utiliza durante o luego del baño.", precio: 5000, categoria: "250ml",imagen : "/src/assets/gelDucha.jpg"},
    {id:5, producto: "Exfoliante", descripcion: "Tamaño grande. Solo se utiliza una o dos veces por semana. Ideal para eliminar impurezas.", precio: 10000, categoria: "500ml",imagen : "/src/assets/exfoliante.jpg"},
    {id:6, producto: "Exfoliante", descripcion: "Tamaño chico. Solo se utiliza una o dos veces por semana. Ideal para eliminar impurezas.", precio: 5000, categoria: "250ml",imagen : "/src/assets/exfoliante.jpg"},
    
    ] */
    
    

      let {id} = useParams()
      const [producto, setProducto] = useState([])
      useEffect(()=>{
        const db = getFirestore()
        const oneItem = doc(db, "servicios", id)

        getDoc(oneItem).then((snapshot)=>{
          if (snapshot.exists()){
            const doc = snapshot.data()
            setProducto(doc)
            
          }
        })

      })
      


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