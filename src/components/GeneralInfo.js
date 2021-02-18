import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { genInfo } = this.props;
    console.log(genInfo.name)
    return (
      <div>
        <input type="text" value={genInfo.name} onChange={this.props.handleChange}/>
        <input type="text" />
        <input type="number" />
        <input type="email" />
      </div>
    )
  }
}

export default GeneralInfo
