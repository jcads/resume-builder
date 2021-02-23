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
        position: "",
        phoneNum: 0,
        email: "",
      },
      education: {
        schoolName: "",
        schoolLocation: "",
        degree: "",
        dateStart: "",
        dateEnd: "",
      },
      experience: {
        company: "",
        location: "",
        jobTitle: "",
        dateStart: "",
        dateEnd: "",
        mainJobTasks: [],
      },
    };
  }

  handleChange = (e, componentName) => {
    const changedInfo = e.target.name;
    const component = componentName;

    this.setState({
      [component]: {
        ...this.state[component], 
        // sets whatever input field is changed
        [changedInfo]: e.target.value
      }
    })
  }

  render() {
    const { genInfo, experience, education } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <GeneralInfo 
          genInfo={genInfo} 
          handleChange={this.handleChange}
          component="genInfo"
        />
        <Experience 
          exp={experience} 
          handleChange={this.handleChange}
          component="experience"
        />
        <Education 
          education={education} 
          handleChange={this.handleChange}
          component="education"
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Resume
