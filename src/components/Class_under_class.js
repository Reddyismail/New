import React from 'react'

class Cl extends React.Component{
render(){
    return<h1>Class Component 11</h1>
}
}
class Cla extends React.Component{
    render(){
        return(
            <div>
                <h1>Class Component  22</h1>
                <Cl/>
            </div>
        )
    
    }   
    }
    class Cla1 extends React.Component{
        render(){
            return(
                <div>
                    <h1>Class Component 33</h1>
                    <Cla/>
                </div>
            )
        
        }   
        }
export default Cla1