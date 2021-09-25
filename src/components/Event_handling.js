import React,{Component} from 'react'

class Student1 extends Component{
 constructor(props){
super(props)
this.state={
    message:"hi reddy",
    name:this.props.name
}
this.ismail=this.ismail.bind(this)
/*
u dont use this above method(this.ismail=this.ismail.bind(this))
 in the output under the 
console printed beside (undifinne) showed
and
*/

 }
    ismail(){
        console.log("hi ismail")//this predefined funnction
    }
    
    render(){
        return(
            <div>
                <h1>hallow{this.state.message}</h1>
                <h1>hallow{this.state.name}</h1>
                <button onClick={this.ismail}>click</button>
            </div>
        )
    }
}
export default Student1