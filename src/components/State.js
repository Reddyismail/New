import React,{Component} from "react";
 class State extends Component{
     constructor(){
         super()
         this.state ={
             message:"hi this is ismail",
             ismai:"hi"
         }
     }
     rel(){
         this.setState({
             message:"hi reddy",
             ismai:"hallow"
         })
     }
     render()
     {
         return(
             <div>
                 <h1>{this.state.message}</h1>
                 <h1>{this.state.ismai}</h1>
                 <button onClick={()=>this.rel()}>button</button>
             </div>
             
         )
     }
     
 }
export default State