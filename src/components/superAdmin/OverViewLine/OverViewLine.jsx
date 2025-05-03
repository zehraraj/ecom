import React, { Component } from 'react';
import './OverViewLine.css';
class OverViewLine extends Component {
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
            <div className="OV-Line">
                <h3 className="OV-text">{this.props.text1}</h3>
                <input className="OV-addBox2" type="text" placeholder={this.props.placeholderText} name={this.props.name} value={this.props.value} onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default OverViewLine;