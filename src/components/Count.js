import React,{Component} from "react";
 class Count extends Component{
     constructor(){
         super()
         this.state ={
             count:0
         }
     }
     rel(){
         this.setState({
             count:this.state.count+1 //count+"altek"
         })
     }
     render()
     {
         return(
             <div>
                 <h1>{this.state.count}</h1>
                
                 <button onClick={()=>this.rel()}>button</button>
             </div>
             
         )
     }
     
 }
export default Count