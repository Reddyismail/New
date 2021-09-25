import React,{Component} from 'react'
import Ch from './Ch'

class Par extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"from message box"
        }
 this.greed=this.greed.bind(this)
    }
    greed(){
        console.log(`hi this is alert.....${this.state.message}`)
    }
    render(){
        return(
            <div>
                <Ch reddy={this.greed}></Ch>
            </div>
        )
    }
}
export default Par