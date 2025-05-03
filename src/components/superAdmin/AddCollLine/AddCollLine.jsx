import React, { Component } from 'react';
import './AddCollLine.css';
class AddCollLine extends Component {
    state = {}
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value })
        }
    }
    render() {
        return (
            <div className="colLine">
                <h3 className="coll-text">{this.props.text1}</h3>
                <input className="addcollBox" type="text" placeholder={this.props.placeholderText} name={this.props.name} onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default AddCollLine;