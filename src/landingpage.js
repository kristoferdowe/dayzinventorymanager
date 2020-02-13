import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupname: ""
    };
  }

  handleUserNameChange = event => {
    this.setState({
      groupname: event.target.value
    });
    //console.log(this.state.groupname);
  };

  render() {
    return (
      <main>
        <h1 className="h1text">DayZ Inventory Manager</h1>
        <form>
          <label>Group Name</label>
          <input
            type="text"
            value={this.state.groupname}
            onChange={this.handleUserNameChange}
          />
        </form>
      </main>
    );
  }
}

export default Landing;
