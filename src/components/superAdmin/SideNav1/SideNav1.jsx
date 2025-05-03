// import React, { Component } from 'react';
// // import { render } from 'react-dom';
// import { NavLink } from 'react-router-dom';
// import './SideNav1.css';
// import Text from '../Text/Text' 
   
// class menu1 extends Component {
//     state = {}
//     render() {
//         return (
//             <div className="sidenavContainer">
//                 <NavLink className="nav" to="/SuperAdmin/Products/"><Text text="PRODUCTS" /></NavLink>
//                 <NavLink className="nav" to="/SuperAdmin/Collection/"><Text text="COLLECTION" /></NavLink>
//                 <NavLink className="nav" to="/SuperAdmin/Categories/"><Text text="CATEGORIES" /></NavLink>
//                 {/* <NavLink className="nav" to="/SuperAdmin/Discounts/"><Text text="SALES" /></NavLink>
//                 <NavLink className="nav" to="/SuperAdmin/Inventory/"><Text text="VOUCHERS" /></NavLink>
//                */}
//             </div>
//         );
//     }
// }

// export default menu1;
import React from 'react';
import { Drawer } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <Button
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>PRODUCTS</MenuItem>
          <MenuItem onClick={this.handleClose}>CATEGORIES</MenuItem>
          <MenuItem onClick={this.handleClose}>COLLECTIONS</MenuItem>
        </Drawer>
      </div>
    );
  }
}
