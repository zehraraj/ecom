/* eslint-disable */
import React, { Component } from "react";
import "./SocialMedia.css";
import { NavLink } from "react-router-dom";
// import { render } from 'react-dom';
import Texticon from "../../../components/superAdmin/TextIcon/TextIcon";
import social from "../../../static/superAdmin/socialmedia/social.png";
import Sidenav from "../../../components/superAdmin/SideNav/SideNav";
import Socialrect from "../../../components/superAdmin/Socialrect/Socialrect";
import { connect } from "react-redux";
import * as ACTION from "../../../middleware/actions/superAdminActions";
import Navbar from "../../../components/superAdmin/Navbar/Navbar";
import SocialTexticon from "../../../components/superAdmin/SocialTexticon/SocialTexticon";
import Blank from "../../../components/superAdmin/Blank/Blank";
import Loading from "../../../components/superAdmin/Loading/Loading";
import Box2 from "../../../components/superAdmin/Box2/Box2";
import TextIcon from "../../../components/superAdmin/TextIcon/TextIcon";
import settingsIcon from "../../../static/superAdmin/settings/settings.png";
import Base from '../../../components/superAdmin/Base/Base'


class SocialMedia extends Component {
  state = {
    facebook: { error: '', value: "" },
    instagram: { error: '', value: "" },
    tweeter: { error: '', value: "" },
    linkedin: { error: '', value: "" },
    pintrest: { error: '', value: "" },
  };

  componentDidMount = () => {
    this.props.getSocialMedia();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.socialMedia !== this.props.socialMedia) {
      if (this.props.socialMedia.success) {
        let data = this.props.socialMedia.data[0];
        this.setState({
          facebook: { error: '', value: data.facebook },
          instagram: { error: '', value: data.instagram },
          tweeter: { error: '', value: data.tweeter },
          linkedin: { error: '', value: data.linkedin },
          pintrest: { error: '', value: data.pinterest },
        });
      } else if (this.props.socialMedia.code === 404) {
        this.setState({
          facebook: { error: '', value: "" },
          instagram: { error: '', value: "" },
          tweeter: { error: '', value: "" },
          linkedin: { error: '', value: "" },
          pintrest: { error: '', value: "" },
        });
      }
    }
    else if (prevProps.socialMediaResponse !== this.props.socialMediaResponse) {
      if (this.props.socialMediaResponse.success) {
        this.props.history.push("/SuperAdmin/Settings/");
      } else if (this.props.socialMediaResponse.code === 400) {
        this.setState({
          facebook: { error: this.props.socialMediaResponse.data.facebook ? this.props.socialMediaResponse.data.facebook[0] : '', value: this.state.facebook.value },
          instagram: { error: this.props.socialMediaResponse.data.instagram ? this.props.socialMediaResponse.data.instagram[0] : '', value: this.state.facebook.value },
          tweeter: { error: this.props.socialMediaResponse.data.tweeter ? this.props.socialMediaResponse.data.tweeter[0] : '', value: this.state.facebook.value },
          linkedin: { error: this.props.socialMediaResponse.data.linkedin ? this.props.socialMediaResponse.data.linkedin[0] : '', value: this.state.facebook.value },
          pintrest: { error: this.props.socialMediaResponse.data.pintrest ? this.props.socialMediaResponse.data.pintrest[0] : '', value: this.state.facebook.value },
        });
      }
    }
  };

  handleChange = (e, value) => {
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = (e) => {
    if (
      this.state.facebook.error === '' &&
      this.state.instagram.error === '' &&
      this.state.tweeter.error === '' &&
      this.state.linkedin.error === '' &&
      this.state.pintrest.error === ''
    )
      this.props.updateSocial(
        this.state.facebook.value,
        this.state.instagram.value,
        this.state.tweeter.value,
        this.state.linkedin.value,
        this.state.pintrest.value
      );
  };

  render() {
    console.log(this.state.facebook)
    const content = (
      <div className="socialMediaRoot">
        {!this.props.isLoading ? (
          <div>
            <div className="socialMediaHeaderContainer">
              <TextIcon text="SETTINGS" img={settingsIcon} />
              <div
                onClick={() => this.props.history.push("/SuperAdmin/Settings/")}
              >
                <Box2 text="Back" />
              </div>
            </div>

            <div className="socialMediaInnerContainer">
              <Socialrect
                text="Social Media Accounts"
                data={{
                  facebook: this.state.facebook.value,
                  instagram: this.state.instagram.value,
                  tweeter: this.state.tweeter.value,
                  pintrest: this.state.pintrest.value,
                  linkedin: this.state.linkedin.value,
                }}
                errors={{
                  facebook: this.state.facebook.error,
                  instagram: this.state.instagram.error,
                  tweeter: this.state.tweeter.error,
                  pintrest: this.state.pintrest.error,
                  linkedin: this.state.linkedin.error,
                }}
                img={social}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        ) : <Loading />
        }
      </div>
    )

    return (
      <Base content={content} history={this.props.history} />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.superAdminReducer.isLoading,
  socialMedia: state.superAdminReducer.getSocialMediaReponse,
  socialMediaResponse: state.superAdminReducer.socialMediaResponse,
});

const mapDispatchToProps = (dispatch) => ({
  getSocialMedia: () => dispatch(ACTION.getSocialMedia()),
  updateSocial: (facebook, instagram, tweeter, linkedin, pintrest) =>
    dispatch(
      ACTION.updateSocialMedia({
        facebook: facebook,
        instagram: instagram,
        tweeter: tweeter,
        linkedin: linkedin,
        pinterest: pintrest,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialMedia);
