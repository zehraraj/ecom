import React, { Component } from 'react';
import Lines from "../Lines/Lines"
import './Rectangle.css';

import config from '../../../middleware/config'

class Rectangle extends Component {
    state = {}
    render() {
        return (
            <div className="Rectangle">
                <div className="headerContainer">
                    <h1 className="tt">{this.props.text}</h1>
                    <img src={this.props.img} alt="" className="img" />
                </div>
                <div>
                    <hr className="hr" />
                </div>
                <div className="heading">
                    <h3 className="h3">{this.props.text1}</h3>
                    <h3 className="h3">{this.props.text2}</h3>
                    {/* <h3 className="h3">{this.props.text3}</h3> */}
                    <h3 className="h3">{this.props.text4}</h3>
                    <h3 className="h3">{this.props.text5}</h3>
                    {/* <h3 className="h3">{this.props.text6}</h3> */}
                    {/* <h3 className="h3">{this.props.text7}</h3> */}
                </div>
                {this.props.products.map((item, index) => <Lines id={(index + 1) + ((this.props.current - 1) * config.pagination.pageSize)} data={item} />)}
            </div>
        );
    }
}

export default Rectangle;