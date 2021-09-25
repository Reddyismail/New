import React,{Component} from 'react'
class Ifo extends Component{
    constructor(){
        super()
            this.state={
                ner:false
            }
        
    }
    render(){
            var message
        if(this.state.ner){
               message=<div><h1>i am from if</h1></div>
              }
        else{
           message=<div><h1>i am from else</h1></div>
             }
             return(
                <div>{message}</div>
            )
    }
    
}
export default Ifo