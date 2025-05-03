/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

// components
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import SideNav from '../../../components/superAdmin/SideNav/SideNav';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import Loading from '../../../components/superAdmin/Loading/Loading';
import TableTitle from '../../../components/superAdmin/TableTitle/TableTitle';
import EmptyData from '../../../components/superAdmin/EmptyData/EmptyData';
import Dropdown from '../../../components/superAdmin/Dropdown/Dropdown';
import Input from '../../../components/superAdmin/Input/Input';


// middleware
import config from '../../../middleware/config'
import * as ACTION from '../../../middleware/actions/superAdminActions'

// misc
import more from '../../../static/superAdmin/more.png'
import * as validators from '../../../validators'
import './Attributes.css'
import Base from '../../../components/superAdmin/Base/Base';

class Attributes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      next: null,
      prev: null,
      data: [],
      dataArray: [
        { id: 1, group: 'size', option: 'small', objectId: 1 },
        { id: 1, group: 'size', option: 'small', objectId: 1 },
        { id: 1, group: 'size', option: 'small', objectId: 1 },
        { id: 1, group: 'size', option: 'small', objectId: 1 },
      ],
      groupOptions: [],
      option_group: { id: 0, value: "" },
      option_group_error: "",
      option_value: "",
      option_value_error: "",
      notList: false,
      url: config.baseUrl + config.options,
      edit: false,
    }
  }

  componentDidMount = () => {
    if (!this.props.match.params.id) {
      this.setState({ notList: false })
      this.props.getAttributes(this.state.url)
    }
    else if (this.props.match.params.id === 'Create') {
      this.props.getOptionGroups(config.baseUrl + config.option_group)
      this.setState({ notList: true, option_group: "", edit: false })
    }
    else {
      this.setState({ notList: true, edit: true })
      this.props.getAttributes(this.state.url + `/${this.props.match.params.id}`)
      this.props.getOptionGroups(config.baseUrl + config.option_group)
    }

    document.addEventListener('keypress', (event) => {
      if (event.key === 'Enter')
        this.handleSubmit()
    })
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.getOptionsResponse !== nextProps.getOptionsResponse) {
      if (nextProps.getOptionsResponse.success) {
        let data = nextProps.getOptionsResponse.data

        if (this.state.notList) {
          this.setState({
            option_group: { id: data.option_group.id, value: data.option_group.option_group_name },
            option_value: data.option_name
          }, () => console.log(this.state.option_group, this.state.option_value))
        } else {
          let dataArray = []
          data.results.map((item, index) => dataArray.push({
            id: (index + 1) + ((data.current - 1) * config.pagination.pageSize),
            group: item.option_group.option_group_name,
            option: item.option_name,
            objectId: item.id,
          }))

          this.setState({
            current: data.current,
            next: data.links.next,
            prev: data.links.previous,
            data: data.results,
            dataArray: dataArray
          })
        }
      }
    }

    else if (this.props.match.params.id !== nextProps.match.params.id) {
      if (!nextProps.match.params.id) {
        this.props.getAttributes(this.state.url)
        this.setState({ notList: false, edit: false, option_group: { id: 0, value: "" }, option_value: "" })
      }
      else if (nextProps.match.params.id === 'Create') {
        this.props.getOptionGroups(config.baseUrl + config.option_group)
        this.setState({ notList: true, edit: false })
      }
      else {
        this.props.getOptionGroups(config.baseUrl + config.option_group)
        this.props.getAttributes(this.state.url + `/${nextProps.match.params.id}`)
        this.setState({ notList: true, edit: true })
      }
    }

    else if (this.props.getOptionGroupsResponse !== nextProps.getOptionGroupsResponse) {
      if (nextProps.getOptionGroupsResponse.success) {
        let temp = []
        nextProps.getOptionGroupsResponse.data.results.map(item => temp.push({ id: item.id, value: item.option_group_name }))
        this.setState({
          groupOptions: temp
        })
      }
    }

    else if (this.props.optionResponse !== nextProps.optionResponse) {
      if (nextProps.optionResponse.success)
        this.props.history.push('/SuperAdmin/Attribute/')
      else if (nextProps.optionResponse.code === 400) {
        this.setState({
          option_group_error: nextProps.optionResponse.data.option_group ? nextProps.optionResponse.data.option_group[0] : "",
          option_value_error: nextProps.optionResponse.data.option_name ? nextProps.optionResponse.data.option_name[0] : ""
        })
      }
    }
  }

  handleChange = (event, value) => {
    // console.log([event.target.name + "_error"])
    this.setState({ [event.target.name]: value.value, [event.target.name + "_error"]: value.error })
  }

  dropdownHandleChange = (name, data, error) => {
    console.log([name], data)
    this.setState({ [name]: data, [name + "_error"]: error })
  }

  search = (searchText) => {
    this.props.getAttributes(this.state.url + `?search=${searchText}`)
  }

  handleSubmit = () => {
    if (this.state.option_group_error === "" && this.state.option_value_error === "") {
      this.state.edit && this.state.notList ?
        this.props.updateAttribute(this.props.match.params.id, this.state.option_group.id, this.state.option_value) :
        this.props.createAttribute(this.state.option_group.id, this.state.option_value)
    }
  }

  render() {
    const AttributesTableView = (
      <div className="attr-inner-container">
        <div className="attr-table-container">
          <div className="attr-table-header">
            <TableTitle
              text="Attributes"
              image=""
              search={this.search}
              placeholder="Attribute and Group Name"
              searchRequired
            />
          </div>
          {this.state.data.length ?
            <React.Fragment>
              <div className="attr-table-heading">
                <h3 className="attr-table-data-1">Id</h3>
                <h3 className="attr-table-data-2">Attribute Group</h3>
                <h3 className="attr-table-data-3">Attribute Value</h3>
                <h3 className="attr-table-data-4"></h3>
              </div>
              <div className="attr-table-content">
                {this.state.dataArray.map((item, index) => {
                  return (
                    <div className="attr-table-row">
                      <h3 className="attr-table-data-1">{item.id}</h3>
                      <h3 className="attr-table-data-2">{item.group}</h3>
                      <h3 className="attr-table-data-3">{item.option}</h3>
                      <div className="more-icon attr-table-data-4" onClick={() => this.props.history.push(`/SuperAdmin/Attribute/${item.objectId}`)}>
                        <img src={more} />
                      </div>
                    </div>
                  )
                }
                )}
              </div>
            </React.Fragment> :
            <EmptyData for="Attributes" />
          }
        </div>

        <div className="pagination">
          <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} prev={this.state.prev} next={this.state.next} />
        </div>
      </div >
    )

    const AttributesCreateEditView = (
      // props => {
      // return 
      <div className="attr-inner-container">
        <div className="attr-create-table-container">
          <div className="attr-create-table-header">
            <TableTitle
              text="Attributes"
              image=""
            />
          </div>
          <div className="attr-create-table-content">
            <div className="attr-create-table-input">
              {/* {console.log('createEdit', this.state.option_group, this.state.option_value)} */}
              <Dropdown
                required
                name='option_group'
                label="GROUP"
                defaultValue="Select a Group"
                value={this.state.option_group}
                options={this.state.groupOptions}
                error={this.state.option_group_error}
                handleChange={this.dropdownHandleChange}
              />
              <Input
                required
                name='option_value'
                label="value"
                value={this.state.option_value}
                error={this.state.option_value_error}
                validator={validators.textValidator}
                handleChange={this.handleChange}
                placeholderText="Enter Option Name"
              />
            </div>
            <div className="attr-create-table-save">
              <h3 className="txtsave" onClick={() => this.handleSubmit()}>SAVE CHANGES</h3>
            </div>
          </div>
        </div>
      </div>
      // }
    )

    const content = (
      <div className="attrRootContainer">

        {!(this.props.isLoading) ?
          // <div className="attr-content-container">
          <div>

            <div className="attr-header-container">
              <TextIcon text="Configuration" img="" />
              <div
                onClick={() => this.state.notList ?
                  this.props.history.push(`/SuperAdmin/Attribute/`) :
                  this.props.history.push(`/SuperAdmin/Attribute/Create/`)}
              >
                <Box2 text={this.state.notList ? "Back" : "Add Attribute"} />
              </div>
            </div>
            {this.state.notList ?
              AttributesCreateEditView :
              AttributesTableView
            }
          </div>
          : <Loading />}
      </div>
    )
    return (
      <Base history={this.props.history} content={content} />
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.superAdminReducer.isLoading,
  getOptionsResponse: state.superAdminReducer.getOptionsResponse,
  getOptionGroupsResponse: state.superAdminReducer.getOptionGroupsResponse,
  optionResponse: state.superAdminReducer.optionResponse,
})

const mapDispatchToProps = dispatch => ({
  getAttributes: (url) =>
    dispatch(ACTION.getOptions({ url: url })),
  createAttribute: (option_group, option_value) =>
    dispatch(ACTION.addOption({ option_group: option_group, option_name: option_value })),
  updateAttribute: (id, option_group, option_value) =>
    dispatch(ACTION.updateOption({ id: id, payload: { option_group: option_group, option_name: option_value } })),
  getOptionGroups: (url) =>
    dispatch(ACTION.getOptionGroup({ url: url })),
})


export default connect(mapStateToProps, mapDispatchToProps)(Attributes)