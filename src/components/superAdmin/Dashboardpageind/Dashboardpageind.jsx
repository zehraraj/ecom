/* eslint-disable */
import React, { Component } from 'react';
import './Dashboardpageind.css'
import rarrow from '../../../static/superAdmin/rightarrow.png';
import larrow from '../../../static/superAdmin/leftarrow.png';
import lightlarrow from '../../../static/superAdmin/lightLeftArrow.png'
import lightrarrow from '../../../static/superAdmin/lightRightArrow.png'

class Dashboardpageind extends Component {
    getPagiantion = () => {
        return (<div className="dpage1" >
            {this.props.prev ?
                <img src={larrow} onClick={() => this.props.handleUrl(this.props.prev)} /> :
                <img src={lightlarrow} />}
            <h2 className="txt">{this.props.current}</h2>
            {this.props.next ?
                <img src={rarrow} onClick={() => this.props.handleUrl(this.props.next)} /> :
                <img src={lightrarrow} />}
        </div>
        )
    }

    render() {
        return (
            <div className="dpage1 noselect" >
                {this.props.prev ?
                    <img src={larrow} onClick={() => this.props.handleUrl(this.props.prev)} /> :
                    <img src={lightlarrow} />}
                <h2 className="pagination-txt">{this.props.current}</h2>
                {this.props.next ?
                    <img src={rarrow} onClick={() => this.props.handleUrl(this.props.next)} /> :
                    <img src={lightrarrow} />}
            </div>
        );
    }
}

export default Dashboardpageind;