import React, { Component } from 'react';
import './Addsaleline.css';
class Addsaleline extends Component {
    state = {
        value: ""
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value })
        }
    }
    render() {
        return (
            <div className="addlinesale">
                <h3 className="text">{this.props.text1}</h3>
                <input className="addBox2" type="text" placeholder={this.props.placeholderText} name={this.props.name} value={this.props.value} onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default Addsaleline;