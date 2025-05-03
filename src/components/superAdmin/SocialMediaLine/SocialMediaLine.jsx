import React, { Component } from 'react';
import './SocialMediaLine.css';
class SocialMediaLine extends Component {
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
            <div className="SM-Line">
                <h3 className="SM-text">{this.props.text1}</h3>
                <input className="SM-addBox2" type="text" name={this.props.name} value={this.props.value} onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default SocialMediaLine;