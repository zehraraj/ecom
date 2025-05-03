import React, { Component } from 'react';
import searchIcon from '../../../static/superAdmin/search-icon.png'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    let placeholder = "Search by "
    this.state = {
      placeholder: this.props.placeholder ? placeholder + this.props.placeholder : placeholder + "Attributes",
      searchText: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="Search-root">
        <div>
          <input
            className="search-input"
            placeholder={this.state.placeholder}
            name="searchText"
            value={this.state.searchText}
            onChange={(e) => this.handleChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") this.props.search(this.state.searchText)
            }}
          />
          {/* d */}
        </div>
        <div className='search-icon-div'>
          <img className="search-icon" src={searchIcon} alt={searchIcon} onClick={() => this.props.search(this.state.searchText)} />
        </div>
      </div>
    );
  }
}

export default Search;