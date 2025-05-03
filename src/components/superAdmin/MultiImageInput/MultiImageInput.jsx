import React, { Component } from 'react';
import './MultiImageInput.css'

import addImage from '../../../static/superAdmin/add/add1.png'

class MultiImageInput extends Component {
  state = {}
  render() {
    return (
      <div className="MultiImageInputRootContainer">
        <div className="labelInputContainer">
          <div className="inputLabel">
            Test123
          </div>
          <div className="imageInputCollection">
            {[1, 2, 3, 4].map((item, index) => {
              return <div className="imageInput">
                <div className="addImageDiv">
                  <img src={addImage} alt="" />
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MultiImageInput;