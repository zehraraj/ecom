import React, { Component } from 'react';
import './TableTitle.css'
import Search from '../Search/Search';

class TableTitle extends Component {
  state = {}
  render() {
    return (
      <div className="Main">
        <div className="table-title-content">

          <div className="TextImg">
            <h1 className="table-title-text">{this.props.text}</h1>
            {this.props.image ?
              <img src={this.props.image} alt={this.props.altImage} /> :
              <React.Fragment />
            }
          </div>
          {this.props.searchRequired ?
            <Search placeholder={this.props.placeholder} search={this.props.search} /> :
            <React.Fragment />
          }
        </div>
        <hr />
      </div>
    );
  }
}

export default TableTitle;