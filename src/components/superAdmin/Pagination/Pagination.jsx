import React, { Component } from 'react';
import './Pagination.css'
import larrow from '../../../static/superAdmin/rightarrow.png';
import rarrow from '../../../static/superAdmin/leftarrow.png';
class Pagination extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page">
                <img src={rarrow} alt="" className="img" />
                <h2 className="txt">1</h2>
                <img src={larrow} alt="" className="img2" />
            </div>
        );
    }
}
 
export default Pagination;