import React,{Component} from 'react'
class Student2 extends Component{
    constructor(){
        super()
        this.state={
            message:"hiiii state",
        }
        this.ismail=this.ismail.bind(this)
    }
    ismail(){
        console.log("this is log")
    }
    render(){
        return(
            <div>
                <h1>hi ismail</h1>
                <button onClick={this.ismail}>click</button>
            </div>
        )
    }
}
export default Student2;
