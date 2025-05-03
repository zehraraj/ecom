import React, { Component } from 'react';
import './HomeCollContainer.css';
import summer from '../../../static/User/homeimg1/coll1/col.png';
import winter from '../../../static/User/homeimg1/coll2/col1.png';

class HomeCollContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-container">
                <div className="equal">
                    <h3 className="coll-txt">{this.props.txt}</h3>
                </div>
                <div className="equal">
                    <img src ={summer} alt="masorini" className="img1"/>
                </div>
                <div className="equal">
                    <img src ={winter} alt="masorini" className="img2"/>
                </div>
            </div>
        );
    }
}
 
export default HomeCollContainer;