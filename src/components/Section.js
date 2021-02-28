import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inputs, handleChange, section } = this.props;
    console.log(inputs);

    const onchange = e => handleChange(e, section);

    const inputElements = inputs.map((input, idx) => {
      return( 
        <input 
          key={idx}
          name={input[0]} 
          type={input[1]} 
          value={input[2]}
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
