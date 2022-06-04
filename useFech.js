import { useEffect, useState } from "react"



export const useFech = (url) => {
  const [estado, setestado] = useState({data:null, loading:true, error:null})
  useEffect(() => {
    
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(data=>{
        setestado({
            loading:false,
            error:null,
            data
        })
    })
  },[url])
  return estado;
}
