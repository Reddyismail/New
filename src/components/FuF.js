import React from 'react'
function FuF() {

    function Click_me(){
        console.log('u click me')
    }
    return(
        <div>
            <button Onclick={Click_me()}>click</button>
        </div>
    )
}
export default FuF