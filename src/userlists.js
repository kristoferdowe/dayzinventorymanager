import React, { Component } from "react";

//Holds List to be rendered after file is uploaded
class Userlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changeInventory: this.props.newLoadout,
      invent: this.props.newInventory
    };
  }

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div className="container-1">
        Your Current Loadout: {JSON.stringify(this.props.survivorList)}
      </div>
    );
  }
}

export default Userlist;
