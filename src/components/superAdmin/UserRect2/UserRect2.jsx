import React, { Component } from 'react';
import './UserRect2.css';
class UserRect2 extends Component {
    state = {}
    render() {
        return (
            <div className="User-outerBox">
                <div className="inner-content-add">
                    <h3 className="txt1">{this.props.data.address_name}</h3>
                    <hr className="hr" />
                    <div className="txt-div">
                        <h2 className="txt2">{this.props.data.address_line_1}</h2>
                        <h2 className="txt2">{this.props.data.address_line_2}</h2>
                        <h2 className="txt2">{this.props.data.landmark}</h2>
                        <h2 className="txt2">{this.props.data.city} - {this.props.data.pincode}</h2>
                        <h2 className="txt2">{this.props.data.state}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserRect2;