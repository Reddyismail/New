import React,{Component} from 'react'

class Form extends Component{
    constructor(props){
    super(props)
     this.state = {
         username:"",
         fothername:'',
         password:'',
         conform_password:'',
         topic:""

     }
        this.handle =this.state.bind(this)
 
    }//close the contructor

   handleUsernameChange =(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleFothernameChange =(event)=>{
        this.setState({
            fothername: event.target.value
        })
    }
    handlePasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        })
    }
    handleConformPasswordChange = (event) =>{
        this.setState({
            conform_password: event.target.value
        })
    }
    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit =event=>{
            alert(`${this.state.username} ${this.state.fothername} ${this.state.password} ${this.stateconform_password}  ${this.state.topic}`)
            event.preventDefault()
    }

 render()
{
     
    return (

        <form onSubmit={this.handleSubmit}>
            <div>
          <span>name:</span>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input> 
            </div>
            <div>
            <span>Fother name:</span>
          <input type="text" value={this.state.fothername} onChange={this.handleFothernameChange}></input> 
            </div>
            <div>
            <span>password:</span>
          <input type= "password" value={this.state.password} onChange={this.handlePasswordChange}></input> 
            </div>
            <div>
            <span> Conform password:</span>
          <input type= "conformpassword" value={this.state.conform_password} onChange={this.handleConformPasswordChange}></input> 
            </div>
            <div>
                <span>Topic</span>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option  value="hii">hiii</option>
                    <option  value="ismail">ismail</option>
                    <option  value="ismail1">ismail1</option>
                    <option  value="ismail444">ismail444</option>
                </select>
            </div>
           <button type="submit">submit</button>
        </form>

      
    )
   }
}

    
export default Form

