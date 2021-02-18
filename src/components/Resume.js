import React, {Component} from "react";
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";

class Resume extends Component {
  constructor() {
    super();

    this.state = {
      genInfo: {
        name: "",
      },
    };
  }

  handleChange = e => {
    this.setState({
      genInfo: {
        ...this.state.genInfo, 
        name: e.target.value
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <GeneralInfo genInfo={this.state.genInfo} handleChange={this.handleChange}/>
        <Experience />
        <Education />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Resume
