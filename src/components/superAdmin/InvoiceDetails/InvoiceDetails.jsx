import React, { Component } from 'react';
import { NavLink , Route } from 'react-router-dom';
import './InvoiceDetails.css';
import Box2 from '../Box2/box2';
import Sidenav from '../Sidenav/menu';
import Texticon2 from '../Texticon2/Texticon2';
import InvoiceDRect from '../InvoiceDRect/InvoiceDRect';
import Navbar from '../Navbar/Navbar';
class InvoiceDetails extends Component {
    state = {  }
    render() { 
        return (
            <div className="p-flex-container">
                <div>
                    <Navbar/>
                </div>
                <div>
                   <Sidenav/>    
                </div>
                <div className="inner-container">
                  <Box2 text="Back"/>
                  <InvoiceDRect/>
                </div>
                
            </div>
        );

}
} 
export default InvoiceDetails;