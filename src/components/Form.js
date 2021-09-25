import React,{Component} from 'react'

class Form extends Component{
 constructor(){
     super()
     this.state= {
         firstneme:"",
         age:""
     }
 }//close the constructer

  addtext_handler =(event)=>{
      this.setState({
        name:event.target.value
      })
    }
     addpw_handler=(event)=>{
          this.setState({
            
                age:event.target.value
            
          })
      }
  

    render()
    {
        return(
            <form>
                <div>
                    <lable>firstname</lable>
                    Name:<input type="text" value={this.state.firstname} onClick={this.addtext_handler}></input>
                age:<input type="password" value={this.state.age} onClick={this.addpw_handler}></input>
                </div>
            </form>
        )
    }
}
export default Form