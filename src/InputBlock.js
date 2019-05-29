import React, { Component } from 'react';
import './InputBlock.css'

class InputBlock extends Component {

    constructor(props) {
        super(props);
        this.state = { inputValue: 'Paste here' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState(
            {
                inputValue: e.target.value
            }
        )
        // this.handleSubmit()
    }

    handleSubmit() {
        this.props.processInput(this.state.inputValue);
    }

    render() {
        return (
            <div className="InputBlock">
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    className="InputBlock-input"
                ></input>
                <button
                    onClick={this.handleSubmit}
                    className="InputBlock-button"
                >Parse</button>
            </div>
        );
    }
}

export default InputBlock;