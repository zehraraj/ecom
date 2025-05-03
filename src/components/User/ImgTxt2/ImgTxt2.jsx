import React, { Component } from 'react';
import './ImgTxt2.css'
class ImgTxt2 extends Component {
    state = {}
    render() {
        return (
            <div className="imgtext2Root">
                <div className="container2">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="textContainer">
                    <h3 className="text2">{this.props.text}</h3>
                </div>
            </div>
        );
    }
}

export default ImgTxt2;