import React,{useState} from 'react'
import Ismail1 from './2'

const Ismail=()=>{

    const [pop, setPop] = useState(false);
    
    return(
        <div>
            <button onClick={()=>{
                setPop(true);
            }}>button</button>
            {pop && <Ismail1 closeModal={setPop}/>}
        </div>
    )
}
export default Ismail