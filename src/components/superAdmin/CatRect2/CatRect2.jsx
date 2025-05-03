/* eslint-disable */
import React, { Component } from "react";
import "./CatRect2.css";
import CateLines from "../CateLine/CateLine";
import icon from "../../../static/superAdmin/Category/c1.png";
import config from "../../../middleware/config";
import TableTitle from "../TableTitle/TableTitle";
import EmptyData from "../EmptyData/EmptyData";

class CatRect2 extends Component {
  state = {};
  render() {
    return (
      <div className="cate-root">
        <div className="header">
          <TableTitle
            text="Categories"
            image={icon}
            search={this.props.search}
            placeholder={this.props.placeholder}
            searchRequired
          />
        </div>
        {this.props.categories.length ? (
          <React.Fragment>
            <div className="headingg">
              <h3 className="category-text-1">ID</h3>
              <h3 className="category-text-2">NAME</h3>
              <h3 className="category-text-3">DESCRIPTION</h3>
              <h3 className="category-text-4"></h3>
            </div>
            {this.props.categories.map((item, index) => (
              <CateLines
                history={this.props.history}
                id={
                  index +
                  1 +
                  (this.props.current - 1) * config.pagination.pageSize
                }
                data={item}
              />
            ))}
          </React.Fragment>
        ) : (
            <EmptyData for="Category" />
          )}
      </div>
    );
  }
}

export default CatRect2;
