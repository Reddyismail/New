import React from 'react'
import './Popup.css'
const Popup2 =({ closeModal })=>{
    return(
        <div className="container">
            <button onClick={()=>closeModal(false)}>+</button>
            <div className="content">
                <h1>hallow this from popup2</h1>
                <div>
                    <button onClick={()=>closeModal(false)}>close</button>
                    <button type="button">addEvent</button>
                </div>
            </div>
           
        </div>
    )
}
export default Popup2