import React, {Component} from "react";
import InputFields from "./components/InputFields";
import Resume from "./components/Resume";
import data from "./dummyData";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data,
      hideResume: true,
    };
  }


  // TODO:
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prev => {
      const prevHideResume = prev.hideResume;

      return {...prev.state, hideResume: !prevHideResume}
    })
    
  }

  render() {
    const { data, hideResume } = this.state;
    
    return (
      <div className="App">
        <Resume className={hideResume ? "hidden" : null} data={data} />
        <form className={hideResume ? null : "hidden"} onSubmit={this.handleSubmit}>
          <InputFields data={data} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App
