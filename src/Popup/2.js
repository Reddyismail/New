import React from 'react'
const Ismail1=({closeModal})=>{
    return(

        <div>
            <button onClick={()=>closeModal(false)}>+</button>
            <div>
                <h1>
                    hallow this from ISmail1
                </h1>
            </div>
            <div>
                <button onClick={()=>closeModal(false)}>clear</button>
                <button>reset</button>
            </div>
        </div>
    )
}
export default Ismail1