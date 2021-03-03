import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inputs, handleChange, section, addBtn } = this.props;

    const onchange = e => handleChange(e, section);

    const inputElements = inputs.map((input, idx) => {
      console.log(input[2])
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
        {addBtn === "true" && 
          <button>button</button>
        }
      </div>
    )
  }
}

export default Section
