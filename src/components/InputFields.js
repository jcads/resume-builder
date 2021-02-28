import React, { Component } from "react";
import Section from "./Section";

class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      expInputList: [],
    };
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

  onAddExpClick = (e) => {
    e.preventDefault();
    const inputList = this.state.expInputList;
    const newExpInputSection = (
      <Section 
        inputs={[
          ["company", "text", ""],
          ["location", "text", ""],
          ["jobTitle", "text", ""],
          ["jobSummary", "text", ""],
          ["dateStart", "text", ""],
          ["dateEnd", "text", ""]
        ]}
        handleChange={this.handleChange}
        section="experience"
      />
    )

    this.setState(prevState => {
      return {
        ...prevState,
        expInputList: inputList.concat(newExpInputSection)
      }
    })
    
  }

  render() {
    const { genInfo, experience, education } = this.state.data;
    const experienceSectionComponent = experience.map((exp, idx) => {
      return (
        <Section 
          key={idx}
          inputs={[
            ["company", "text", exp.company],
            ["location", "text", exp.location],
            ["jobTitle", "text", exp.jobTitle],
            ["jobSummary", "text", exp.jobSummary],
            ["dateStart", "text", exp.dateStart],
            ["dateEnd", "text", exp.dateEnd]
          ]}
          handleChange={this.handleChange}
          section="experience"
        />
      )
    })

    return (
      <div>
        <Section
          inputs={[
            ["name", "text", genInfo.name],
            ["position", "text", genInfo.position],
            ["phoneNum", "number", genInfo.phoneNum],
            ["email", "email", genInfo.email]
          ]}
          handleChange={this.handleChange}
          section="genInfo"
        />
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
        />
        {experienceSectionComponent}
        {this.state.expInputList}
        {/*<Section
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
        />*/}
        <button onClick={this.onAddExpClick}>Add experience</button>
      </div>
    )
  }
}

export default InputFields
