/* eslint-disable */
import React, { Component } from 'react';
import './UserHomeLIne.css';
import Delete from '../../../static/superAdmin/User/delete.png'
import more from '../../../static/superAdmin/more.png'
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux'
import config from '../../../middleware/config'

class UserHomeLine extends Component {
  state = {
    details: false,
    url: config.baseUrl + config.users + "/" + this.props.user.id
  }

  componentDidMount = () => {
    if (this.props.user.customer) this.setState({ details: true })
    else this.setState({ details: false })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.details ?
          <div className={this.props.user.deleted ? "fdfsdf deleted" : "fdfsdf"}>
            <h3 className="user-txt-1">{this.props.id}</h3>
            <h3 className="user-txt-2">{this.props.user.email}</h3>
            <h3 className="user-txt-3">Customer</h3>
            <div
              className="status-container user-txt-4"
              onClick={() => this.props.history.push(`/SuperAdmin/Users/${this.props.user.id}`)}
            >
              <img className="more-icon" src={more} />
            </div>
          </div>
          :
          <div className={this.props.user.deleted ? "fdfsdf deleted" : "fdfsdf"}>
            <h3 className="user-txt-1">{this.props.id}</h3>
            <h3 className="user-txt-2">{this.props.user.email}</h3>
            <h3 className="user-txt-3">Admin</h3>
            <div className="status-container user-txt-4">
              {this.props.self ? <React.Fragment />
                : this.props.user.deleted ?
                  <div className="deleted-text">
                    Deleted
                </div> :
                  <img className="deleted-icon" src={Delete} alt="" onClick={() => this.props.deleteUser(this.state.url)} />
              }
            </div>
          </div>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.superAdminReducer.isLoading,
  deleteUserResponse: state.superAdminReducer.deleteUserResponse
})

const mapDispatchToProps = dispatch => ({
  deleteUser: (url) =>
    dispatch(ACTION.deleteUser({ url: url }))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeLine);