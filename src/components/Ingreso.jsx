import React from 'react'
import { useState } from 'react'

const Ingreso = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("1")
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(nombre)
        console.log(email)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=> setNombre(e.target.value)} placeholder='Ingrese nombre'/>
                <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder='Ingrese su email'/>
                <button type='submit'>Enviar</button>
            </form>

            <p>Purchase order id: {id}</p>
        </div>
    )
}

export default Ingreso