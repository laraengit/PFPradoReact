import {useState }from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
const SendOrder = () => {
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const db = getFirestore()
    const handleSubmit = (e)=>{
        e.preventDefault()

        addDoc(orderCollection, order).then(({id})=>setId(id))
    }
    const order = {
        nombre,
        email
    }
    const orderCollection = collection(db, "ordenes")
  return (
    <div>
        {/* <form action="" onSubmit={handleSubmit}> 
            <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
            <input type="email"  placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit">Enviar</button>

        </form> */}
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
    </div>
  )
}

export default SendOrder