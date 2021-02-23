import React from "react"

class Experience extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { experience, handleChange,component } = this.props;

    const onchange = e => handleChange(e, component);

    return (
      <div className="input-group">
        <input 
          type="text" 
          value={experience.company}
          onChange={onchange} 
          name="company"
        />
        <input 
          type="text" 
          value={experience.location}
          onChange={onchange}
          name="location"
        />
        <input 
          type="text" 
          value={experience.jobTitle}
          onChange={onchange}
          name="jobTitle"
        />
        <input 
          type="text" 
          value={experience.mainJobTasks}
          onChange={onchange}
          name="mainJobTasks"
        />
        <input 
          type="text" 
          value={experience.dateStart}
          onChange={onchange}
          name="dateStart"
        />
        <input 
          type="text" 
          value={experience.jobTitle}
          onChange={onchange}
          name="dateEnd"
        />
      </div>
    )
  }
}

export default Experience
