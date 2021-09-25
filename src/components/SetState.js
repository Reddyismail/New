import React from 'react'
class SetState extends React.Component{
    constructor(){
        super()
        this.state = {
            message:"hi"
        }
    }
    rel(){

        this.setState({
            message:"dude"
            
        })
    }
    render(){

        return(
            <div>
                <h1>ismail {this.state.message}</h1>
                <button onClick={()=>this.rel()}>button</button>
            </div>
        )
    }
}
export default SetState