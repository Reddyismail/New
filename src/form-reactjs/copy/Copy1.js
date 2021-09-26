import React from 'react'
class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button className="square" onClick={() => console.log('click')}>
          {this.props.value}
        button</button>
      );
    }
  }
  export default Square