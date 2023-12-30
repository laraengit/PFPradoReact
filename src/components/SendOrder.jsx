import {useState, useEffect, useContext }from 'react'
import { collection, getFirestore, addDoc, getDoc, doc } from 'firebase/firestore'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Heading,

  } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'

const SendOrder = () => {
    let compraFinalizada = 0
    const {cart, setCart, limpiarCarrito} = useContext(CartContext)
    const total = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    
    const order = {
        nombre,
        apellido,
        email,
        cart
    }
    const db = getFirestore()
    const orderCollection = collection(db, "ordenes")
    const handleSubmit = (e)=>{
        e.preventDefault()
         addDoc(orderCollection, order).then((docRef)=> setId(docRef.id))
        limpiarCarrito()
        //devuelveID(id)
        
    }

    /* const [ultOrden, setUltOrden] = useState([])
      useEffect(()=>{
        const db2 = getFirestore()
        const oneItem = doc(db2, "ordenes", id)

        getDoc(oneItem).then((snapshot)=>{
          if (snapshot.exists()){
            const doc = snapshot.data()
            console.log(doc.id)
            const docCompleto = {...doc, id:id}
            setUltOrden(docCompleto)
            
          }
        })

      },id) */


    
    
    /* const devuelveID = ((idorden)=>{
        console.log("devuelveOrden")
        const [ultOrden, setUltOrden] = useState([])
        useEffect(()=>{
            const db = getFirestore()
            const oneItem = doc(db, "ordenes", idorden)

            getDoc(oneItem).then((snapshot)=>{
            if (snapshot.exists()){
                const doc = snapshot.data()
                console.log(doc.id)
                const docCompleto = {...doc, id:id}
                console.log(docCompleto)
                setUltOrden(docCompleto)
                
            }
            })

      },[])

      compraFinalizada = 1

        
    }) */
    if (total===0){
        return(
            <div>
                <Heading>
                    ¡Gracias por finalizar su pedido {nombre}! El ID de su orden es {id} .
                </Heading>
                <Link to={"/"}>
                    <Button variant={'ghost'} colorScheme='pink'>
                        Volver a la página principal
                    </Button>
                </Link>
                
            </div>
            
        )

    }
    else{
        return (
            <div id='divform'>
                <h1>Finalizá tu orden</h1>
                <h2>Completando tus datos</h2>
                <form action="" onSubmit={handleSubmit}> 
                    <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} required/>
                    <input type="text" placeholder='Apellido' onChange={(e) => setApellido(e.target.value)} required/>
                    <input type="email"  placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
                    <button type="submit">Enviar</button>
        
                </form>
          
                
                {/* <FormControl onSubmit={handleSubmit}>
                    <FormLabel>Nombre</FormLabel>
                    <Input type='text' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                    <FormLabel>Apellido</FormLabel>
                    <Input type='text' placeholder='Apellido' onChange={(e) => setApellido(e.target.value)}/>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    
                    <FormHelperText>Tus datos son confidenciales y solo serán utilizados para registrar tu compra.</FormHelperText>
                    <Button 
                        mt={4}
                        colorScheme='pink'
                        type='submit'
                        
                    >
                        Enviar
                  </Button>
                </FormControl> */}
        
        
                
            </div>
          )

    }
  
}

export default SendOrder