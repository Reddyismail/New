import React from 'react'


class Event_class extends React.Component{
    ismail(){
        alert('hi console.log')
    }
    render()
    {
        return(
            <div>
                <button onClick={this.ismail}>clic me</button>
            </div>
        )
    }
}
export default Event_class