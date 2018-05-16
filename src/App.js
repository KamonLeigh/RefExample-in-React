import React, { Component } from 'react';
import Box from './Components/Box';
import Form from './Components/Form';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colour : ''
    }
    this.newColourState = this.newColourState.bind(this)
  }

  newColourState(colour){
    this.setState({colour})
  }

  render() {
    return (
      <div className="App">
        {this.state.colour? 
          <h1>The Colour Chosen: {this.state.colour}</h1> : 
          <h1>Please pick valid colour</h1>}
        <Box colour={this.state.colour}/>
        <Form newColour={this.newColourState}/>
      </div>
    );
  }
}

export default App;
