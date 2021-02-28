import React, {Component} from "react";
import InputFields from "./components/InputFields";
import data from "./dummyData";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = data;
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit")
    
  }

  render() {
    //const { genInfo, experience, education } = this.state;
    const resumeStyles = {
      display: "none",
    }

    return (
      <div className="App">
        {/*<Resume data={this.state} />*/}
        <form onSubmit={this.handleSubmit}>
          <InputFields data={this.state} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App
