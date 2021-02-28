import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields, handleChange, section } = this.props;
    console.log(fields);

    const onchange = e => handleChange(e, section);

    const inputElements = fields.map((field, idx) => {
      return( 
        <input 
          key={idx}
          name={field[0]} 
          type={field[1]} 
          value={field[2]}
          onChange={onchange}
        />
      )
    })

    return (
      <div className="input-group">
        {inputElements}
      </div>
    )
  }
}

export default Section
