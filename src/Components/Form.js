import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            colour: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({colour: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.newColour(this.state.colour)
        this._input.value = '';
        this._input.focus();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name='colour' 
                ref={(el) => this._input = el}
                value={this.state.input} 
                onChange={this.handleChange} />
                <button className="btn">Go!</button>
            </form>
        )
    }
}

export default Form 