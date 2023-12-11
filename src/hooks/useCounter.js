import {useState} from 'react'

const useCounter = (initialValue = 0, step = 1) => {
    const [count,setCount] = useState(initialValue)
    const increment = () => {
        setCount((prevCount) => ( prevCount < 10) ? prevCount + step : prevCount)
    }
    const decrement = () => {
        setCount((prevCount) => prevCount>0 ? prevCount - step: prevCount)
    }
    return{
        count, increment, decrement
    }
}

export default useCounter