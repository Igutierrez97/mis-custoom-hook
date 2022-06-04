import { useState } from "react"




export const UseCounter = (inicialState = 0) => {
    const [counter, setcounter] = useState(inicialState);

    const increment = () =>{
        setcounter(counter+1)
    }

    const decrement = () =>{
        setcounter(counter-1)
    }

    const resect = () =>{
        setcounter(inicialState)}

    return {counter, increment, decrement, resect}
 
}