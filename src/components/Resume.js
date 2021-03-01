import React, { Component } from "react";

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, className } = this.props;
    const { genInfo, education, experience } = data;

    return (
      <div className={className}>
        <h3>{genInfo.name}</h3>
        <p>{genInfo.position}</p>
        <p>{genInfo.phoneNum}</p>
        <p>{genInfo.email}</p>
      </div>
    )
  }
}

export default Resume
