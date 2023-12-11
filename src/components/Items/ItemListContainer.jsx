import React from 'react'
import ItemCount from '../itemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const productos = [
    {id:1, producto: "Crema humectante", descripcion: " Tamaño grande. Puede utilizarse todos los días. Composición natural e hipoalergénica.", precio: 10000, categoria: "500ml", imagen : "/src/assets/humectante.jpg"},
    {id:2, producto: "Crema humectante", descripcion: "Tamaño chico. Puede utilizarse todos los días. Composición natural e hipoalergénica.", precio: 5000, categoria: "250ml", imagen : "/src/assets/humectante.jpg"},
    {id:3, producto: "Gel de ducha", descripcion: "Tamaño grande. Se utiliza durante o luego del baño. ", precio: 10000, categoria: "500ml",imagen : "/src/assets/gelDucha.jpg"},
    {id:4, producto: "Gel de ducha", descripcion: "Tamaño chico. Se utiliza durante o luego del baño.", precio: 5000, categoria: "250ml",imagen : "/src/assets/gelDucha.jpg"},
    {id:5, producto: "Exfoliante", descripcion: "Tamaño grande. Solo se utiliza una o dos veces por semana. Ideal para eliminar impurezas.", precio: 10000, categoria: "500ml",imagen : "/src/assets/exfoliante.jpg"},
    {id:6, producto: "Exfoliante", descripcion: "Tamaño chico. Solo se utiliza una o dos veces por semana. Ideal para eliminar impurezas.", precio: 5000, categoria: "250ml",imagen : "/src/assets/exfoliante.jpg"},
    

  ]
  let {cat} = useParams()
  console.log(cat)
  let productosFiltrados
  if (cat != "500ml" && cat!="250ml"){
    productosFiltrados = productos
  }else{
    productosFiltrados = productos.filter((p)=>p.categoria === cat)
    console.log(productosFiltrados)
  }


  

 /*  const mostrarProductos = new Promise((resolve, reject) =>{
    if(productos.length >0) {
      setTimeout(()=>{
        resolve(productos)
      },5000)

    }else{
      reject("paso")
    }
  })

  mostrarProductos
    .then((resultado)=>{
      console.log(resultado)

    })
    .catch((error)=>{
      console.log(error)

    }) */


  /* const aplicarDescuento = new Promise((resolve,reject)=>{
    const descuento = true
    if(descuento){
      resolve("Descuento aplicado")
    }else{
      reject("No se pudo aplicar el decuento")
    }
  }) */
  /* aplicarDescuento
    .then((resultado)=>{
      console.log(resultado)
    })

    .catch((error)=>{
      console.log(error)
    })
 */
    
  return (
    <div>
        <h1>Productos</h1>
        <ItemList productos = {productosFiltrados}/>
    </div>
    
  )
}

export default ItemListContainer