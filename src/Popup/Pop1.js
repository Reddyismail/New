import{useState} from 'react'
import Popup2 from './Popup2'
const Pop1=()=>{
    const [openModal,setOpenModal]=useState(false);
    return(
        
        <div>
            {openModal && <Popup2 closeModal={setOpenModal}/>}
            <div>
                <h1>hallow ismail</h1>
            </div>
            <button onClick={()=>{setOpenModal(true );}}>button</button>
           
       </div>
    )
}
export default Pop1
