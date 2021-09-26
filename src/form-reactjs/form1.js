import React,{Component} from 'react'
class Form1 extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"hallow",
        }
        this.changeHand=this.changeHand.bind(this)
    }
    changeHand =()=> {
        
           alert(`hi siamil ${this.state.name}`)
    }
       
    
    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <button onClick={()=>this.changeHand()}>button</button>
            </div>
        )
    }
}
export default Form1