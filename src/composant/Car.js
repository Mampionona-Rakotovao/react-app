import React from 'react'

class Car extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      brand :"Ford",
      model :"Mustang",
      color :"red",
      age : 2452
    }
  }
 changeColor = () => {
   this.setState({color : "blue"});
 }
    render() {
      console.log(this.state);
        return (
          <>
          <p>Car: {this.props.brande} {this.state.model}</p>
         <p>Color: {this.state.color}</p>
         <p>Age: {this.state.age}</p>
         <button type="button" onClick={this.changeColor}>Change color</button>
          </>  
        )
    }
}


export default Car;