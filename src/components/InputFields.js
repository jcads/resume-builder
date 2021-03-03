import React, { Component } from "react";
import Section from "./Section";

class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      experienceInputList: [],
      educationInputList: [],
    };
  }

  handleChange = (e, sectionName) => {
    const modifiedField = e.target.name;
    const section = sectionName;
    console.log(section);

    this.setState(prev => {
      return {
        ...prev,
        data: {
          ...prev.data,
          [section]: {
            ...prev.data[section], 
            // sets whatever input field is changed
            [modifiedField]: e.target.value
          }
        }
      }
    })
  }

  render() {
    const { genInfo, experience, education } = this.state.data;
    const { experienceInputList, educationInputList } = this.state;

    const experienceInputs = experienceInputList.map((input, idx) => {
      return ''
    })
    const educationInputs = educationInputList.map((input, idx) => {
      return ''
    })

    return (
      <div>
        <Section
          inputs={[
            ["name", "text", genInfo.name],
            ["position", "text", genInfo.position],
            ["phoneNum", "number", genInfo.phoneNum],
            ["email", "email", genInfo.email],
          ]}
          handleChange={this.handleChange}
          section="genInfo"
        />
        {/*
        <Section
          inputs={[
            ["schoolName", "text", education.schoolName],
            ["schoolLocation", "text", education.schoolLocation],
            ["degree", "text", education.degree],
            ["startYear", "text", education.startYear],
            ["endYear", "text", education.endYear]
          ]}
          handleChange={this.handleChange}
          section="education"
          addBtn="true"
        />
        <Section
          inputs={[
            ["company", "text", experience.company],
            ["location", "text", experience.location],
            ["jobTitle", "text", experience.jobTitle],
            ["jobSummary", "text", experience.jobSummary],
            ["dateStart", "text", experience.dateStart],
            ["dateEnd", "text", experience.dateEnd]
          ]}
          handleChange={this.handleChange}
          section="experience"
          addBtn="true"
        />
        */}
      </div>
    )
  }
}

export default InputFields
