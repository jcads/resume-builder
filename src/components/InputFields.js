import React, { Component } from "react";
import Section from "./Section";

class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.data;
  }

  handleChange = (e, sectionName) => {
    const modifiedField = e.target.name;
    const section = sectionName;

    this.setState({
      [section]: {
        ...this.state[section], 
        // sets whatever input field is changed
        [modifiedField]: e.target.value
      }
    })
  }

  render() {
    const { genInfo, experience, education } = this.state;
    return (
      <div>
        <Section
          fields={[
            ["name", "text", genInfo.name],
            ["position", "text", genInfo.position],
            ["phoneNum", "number", genInfo.phoneNum],
            ["email", "email", genInfo.email]
          ]}
          handleChange={this.handleChange}
          section="genInfo"
        />
        <Section
          fields={[
            ["schoolName", "text", education.schoolName],
            ["schoolLocation", "text", education.schoolLocation],
            ["degree", "text", education.degree],
            ["startYear", "text", education.startYear],
            ["endYear", "text", education.endYear]
          ]}
          handleChange={this.handleChange}
          section="education"
        />
        <Section
          fields={[
            ["company", "text", experience.company],
            ["location", "text", experience.location],
            ["jobTitle", "text", experience.jobTitle],
            ["jobSummary", "text", experience.jobSummary],
            ["dateStart", "text", experience.dateStart],
            ["dateEnd", "text", experience.dateEnd]
          ]}
          handleChange={this.handleChange}
          section="experience"
        />
      </div>
    )
  }
}

export default InputFields
