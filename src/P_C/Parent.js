import React,{Component} from 'react';
import Child from './Child'

class Parent_altek extends Component{
    constructor(props){
        super(props)
        this.state= {
            message:"hi ismail"
        }
        this.greet=this.greet.bind(this)
    }
greet(){
    alert(`greet...${this.state.message}`)
}
    render(){
        return(
            <div>
                <Child greetHand={this.greet}/>
            </div>
        )
    }
}

export default Parent_altek