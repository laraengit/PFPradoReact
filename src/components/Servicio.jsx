import React, { useState } from 'react'

import {
    Button,
    
  } from '@chakra-ui/react'

const Servicio = () => {
    const [turnos,setTurnos] = useState(0)
  return (
    <div>
        <Button onClick={() => setTurnos(turnos + 1)}>Solicitar turno</Button>
    </div>
  )
}

export default Servicio