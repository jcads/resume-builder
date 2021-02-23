import React, {Component} from "react";
import Section from "./Section";

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
        jobSummary: "", // TODO: make this an array of tasks
                          // then display in bullets
      },
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

  render() {
    const { genInfo, experience, education } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
            ["dateStart", "text", education.dateStart],
            ["dateEnd", "text", education.dateEnd]
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
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
/*
        <GeneralInfo 
          genInfo={genInfo} 
          handleChange={this.handleChange}
          component="genInfo"
        />
        <Experience 
          experience={experience} 
          handleChange={this.handleChange}
          component="experience"
        />
        <Education 
          education={education} 
          handleChange={this.handleChange}
          component="education"
        />
        */

export default Resume
