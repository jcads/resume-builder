import React from "react"

class Education extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {education, handleChange, component} = this.props;
    const onchange = e => handleChange(e, component);

    return (
      <div>
        <input 
          type="text" 
          value={education.schoolName}
          onChange={onchange} 
          name="schoolName"
        />
        <input 
          type="text" 
          value={education.scoolLocation}
          onChange={onchange}
          name="scoolLocation"
        />
        <input 
          type="text" 
          value={education.degree}
          onChange={onchange}
          name="degree"
        />
        <input 
          type="text" 
          value={education.dateStart}
          onChange={onchange}
          name="dateStart"
        />
        <input 
          type="text" 
          value={education.dateEnd}
          onChange={onchange}
          name="dateEnd"
        />
      </div>
    )
  }
}

export default Education
