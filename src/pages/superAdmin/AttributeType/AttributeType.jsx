/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
// components
import Navbar from "../../../components/superAdmin/Navbar/Navbar";
import SideNav from "../../../components/superAdmin/SideNav/SideNav";
import TextIcon from "../../../components/superAdmin/TextIcon/TextIcon";
import Box2 from "../../../components/superAdmin/Box2/Box2";
import Dashboardpageind from "../../../components/superAdmin/Dashboardpageind/Dashboardpageind";
import Loading from "../../../components/superAdmin/Loading/Loading";
import TableTitle from "../../../components/superAdmin/TableTitle/TableTitle";
import EmptyData from "../../../components/superAdmin/EmptyData/EmptyData";
import Dropdown from "../../../components/superAdmin/Dropdown/Dropdown";
import Input from "../../../components/superAdmin/Input/Input";
// middleware
import config from '../../../middleware/config'
import * as ACTION from '../../../middleware/actions/superAdminActions'
// misc
import more from '../../../static/superAdmin/more.png'
import * as validators from '../../../validators'
import './AttributeType.css'
import Base from "../../../components/superAdmin/Base/Base";

class Attributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      next: null,
      prev: null,
      data: [],
      dataArray: [
        { id: 1, group: "size", option: "small", objectId: 1 },
        { id: 1, group: "size", option: "small", objectId: 1 },
        { id: 1, group: "size", option: "small", objectId: 1 },
        { id: 1, group: "size", option: "small", objectId: 1 },
      ],
      groupOptions: [],
      option_group: "",
      option_group_error: "",
      notList: false,
      url: config.baseUrl + config.option_group,
    };
  }

  componentDidMount = () => {
    if (!this.props.match.params.id) {
      this.setState({ notList: false });
      this.props.getOptionGroups(this.state.url);
    } else if (this.props.match.params.id === "Create") {
      this.setState({ notList: true, option_group: "", edit: false });
    } else {
      this.setState({ notList: true, edit: true });
      this.props.getOptionGroups(
        this.state.url + `/${this.props.match.params.id}`
      );
    }

    document.addEventListener("keypress", (event) => {
      if (event.key === "Enter") this.handleSubmit();
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (
      this.props.getOptionGroupsResponse !== nextProps.getOptionGroupsResponse
    ) {
      if (nextProps.getOptionGroupsResponse.success) {
        let data = nextProps.getOptionGroupsResponse.data;
        if (this.state.notList)
          this.setState({ option_group: data.option_group_name });
        else {
          let dataArray = [];
          data.results.map((item, index) =>
            dataArray.push({
              id: index + 1 + (data.current - 1) * config.pagination.pageSize,
              name: item.option_group_name,
              objectId: item.id,
            })
          );

          this.setState({
            current: data.current,
            next: data.links.next,
            prev: data.links.previous,
            data: data.results,
            dataArray: dataArray,
          });
        }
      }
    } else if (this.props.match.params.id !== nextProps.match.params.id) {
      if (!nextProps.match.params.id) {
        this.setState({ notList: false });
        nextProps.getOptionGroups(this.state.url);
      } else if (nextProps.match.params.id === "Create") {
        this.setState({
          notList: true,
          option_group: "",
          option_value: "",
          edit: false,
        });
      } else {
        this.setState({ notList: true, edit: true });
        nextProps.getOptionGroups(
          this.state.url + `/${nextProps.match.params.id}`
        );
      }
    } else if (
      this.props.optionGroupsResponse !== nextProps.optionGroupsResponse
    ) {
      if (nextProps.optionGroupsResponse.success) {
        this.setState({ notList: false }, () =>
          this.props.history.push('/SuperAdmin/AttributeGroup/')
        )
      } else if (nextProps.optionGroupsResponse.code === 400) {
        let data = nextProps.optionGroupsResponse.data;
        this.setState({
          option_group_error: data.option_group_name ? data.option_group_name[0] : ""
        })
      }
    }
  };

  handleChange = (event, value) => {
    this.setState({ [event.target.name]: value.value, [event.target.name + '_error']: value.error })
  }

  search = (searchText) => {
    this.props.getOptionGroups(this.state.url + `?search=${searchText}`);
  };

  handleSubmit = (event) => {
    if (this.state.option_group_error === "") {
      this.state.edit && this.state.notList ?
        this.props.updateOptionGroup(this.props.match.params.id, this.state.option_group) :
        this.props.createOptionGroup(this.state.option_group)
    }
  }




  render() {
    const attributesTableView = (
      <div className="attr-type-inner-container">
        <div className="attr-type-table-container">
          <div className="attr-type-table-header">
            <TableTitle
              text="Attribute Types"
              image=""
              search={this.search}
              placeholder="Attribute and Group Name"
              searchRequired
            />
          </div>
          {this.state.data.length ? (
            <React.Fragment>
              <div className="attr-type-table-heading">
                <h3 className="attr-type-table-data-1">Id</h3>
                <h3 className="attr-type-table-data-2">Attribute Group</h3>
                <h3 className="attr-table-data-3"></h3>
              </div>
              <div className="attr-type-table-content">
                {this.state.dataArray.map((item, index) => {
                  return (
                    <div className="attr-type-table-row">
                      <h3 className="attr-type-table-data-1">{item.id}</h3>
                      <h3 className="attr-type-table-data-2">{item.name}</h3>
                      <div
                        className="more-icon attr-table-data-3"
                        onClick={() =>
                          this.props.history.push(
                            `/SuperAdmin/AttributeGroup/${item.objectId}/`
                          )
                        }
                      >
                        <img src={more} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          ) : (
              <EmptyData for="Attributes" />
            )}
        </div>
        <div className="pagination">
          <Dashboardpageind
            current={this.state.current}
            handleUrl={this.handleUrl}
            prev={this.state.prev}
            next={this.state.next}
          />
        </div>
      </div>
    );

    const attributesCreateEditView = (
      <div className="attr-type-inner-container">
        <div className="attr-type-create-table-container">
          <div className="attr-type-create-table-header">
            <TableTitle
              text="Attribute Types"
              image=""
            />
          </div>
          <div className="attr-type-create-table-content">
            <div className="attr-type-create-table-input">
              <Input
                name='option_group'
                label="Name"
                required
                value={this.state.option_group}
                handleChange={this.handleChange}
                placeholderText="Enter Attribute Type Name"
                error={this.state.option_group_error}
                validator={validators.textValidator}
              />
            </div>
            <div className="attr-type-create-table-save">
              <h3 className="txtsave" onClick={() => this.handleSubmit()}>SAVE CHANGES</h3>
            </div>
          </div>
        </div>
      </div >
    )

    const content = (
      <div className="attrTypeRootContainer">
        {!this.props.isLoading ? (
          <div>
            {/* // <div className="attr-type-content-container"> */}
            <div className="attr-type-header-container">
              <TextIcon text="CONFIGURATION" img="" />
              <div
                onClick={() =>
                  this.state.notList
                    ? this.props.history.push(`/SuperAdmin/AttributeGroup/`)
                    : this.props.history.push(
                      `/SuperAdmin/AttributeGroup/Create/`
                    )
                }
              >
                <Box2
                  text={this.state.notList ? "Back" : "Add Attribute Type"}
                />
              </div>
            </div>
            {this.state.notList ?
              attributesCreateEditView :
              attributesTableView
            }
            {/* // </div> */}
          </div>
        ) : (
            <Loading />
          )}
      </div>
    )

    return (
      <Base history={this.props.history} content={content} />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.superAdminReducer.isLoading,
  getOptionsResponse: state.superAdminReducer.getOptionsResponse,
  getOptionGroupsResponse: state.superAdminReducer.getOptionGroupsResponse,
  optionGroupsResponse: state.superAdminReducer.optionGroupResponse,
});

const mapDispatchToProps = (dispatch) => ({
  getOptionGroups: (url) => dispatch(ACTION.getOptionGroup({ url: url })),
  createOptionGroup: (name) =>
    dispatch(ACTION.addOptionGroup({ option_group_name: name })),
  updateOptionGroup: (id, name) =>
    dispatch(
      ACTION.updateOptionGroup({ id: id, payload: { option_group_name: name } })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);
