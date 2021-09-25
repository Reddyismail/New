import React,{Component} from 'react'
class If extends Component{
    constructor(){
        super()
            this.state={
                message:true
            }
        
    }
    render(){

        if(this.state.message){
                return(
                    <div><h1>i am from if</h1></div>
                )
        }
        else{
            return(
                <div><h1>i am from else</h1></div>
            )  
        }
    }
}
export default If