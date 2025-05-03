import React, { Component } from 'react';
import './AddProductLine.css';
import larrow from '../../../static/superAdmin/rightarrow.png';
class AddProductLine extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="addline">
                <h3 className="text">{this.props.text1}</h3>
                    <div className="inputb">
                        <input className="addBox2" type="text"/>
                        <img src={larrow} alt="" className="img"/>
                    </div>
            </div>
         );
    }
}
 
export default AddProductLine;