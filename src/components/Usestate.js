import React,{useState,useEffect} from 'react'
const Usestate =() =>{
    const [name,setName] = useState(0) ;
    useEffect(()=>console.log("hi this is ismail"),[name])   
    return(
        <div>
          <h1>{name}</h1>
          <button onClick={()=>setName(name+1 )}>Change</button>
        </div>
    )
}
 
export default Usestate;