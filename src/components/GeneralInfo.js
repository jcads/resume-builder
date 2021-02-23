import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { genInfo, handleChange,component } = this.props;
    console.log(eval(component).name)

    const onchange = e => handleChange(e, component);

    return (
      <div className="input-group">
        <input 
          type="text" 
          value={genInfo.name}
          onChange={onchange} 
          name="name"
        />
        <input 
          type="text" 
          value={genInfo.position}
          onChange={onchange}
          name="position"
        />
        <input 
          type="number" 
          value={genInfo.phoneNum}
          onChange={onchange}
          name="phoneNum"
        />
        <input 
          type="email" 
          value={genInfo.email}
          onChange={onchange}
          name="email"
        />
      </div>
    )
  }
}

export default GeneralInfo
