import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './UserBase.css';


class UserBase extends Component {
  state = {}
  render() {
    return (
      <div className="userBaseRoot">
        <div className="userBaseHeader">
          <Header history={this.props.history} />
        </div>
        <div className="userBasecontent">
          {this.props.content}
        </div>
        <div className="userBaseFooter">
          <Footer />
        </div>
      </div>
    );
  }
}

export default UserBase;