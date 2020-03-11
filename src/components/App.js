// import logo from "./logo.svg";
// import "./App.css";
// import Landing from "./landingpage";
import React from "react";
import Userlist from "./userlists";
import Login from "./login";

//https://stackoverflow.com/questions/4999064/regex-for-string-contains - resource used for parsing method

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", inventory: { survivorList: {} } };

    this.handleSubmit = this.handleSubmit.bind(this);

    //this.handleChange = this.handleChange.bind(this);
  }

  //ALL PARSING LOGIC - Needs to go to backend

  // handleChange(event) {
  //   const parseDayZProfile = async e => {
  //     // asynchronous event listener for input change.
  //     // get the uploaded file and...
  //     const f = e.target.files[0];

  //     //...parse it to some text
  //     let t = await f.text();

  //     // set divider and make sure reserved words are used correctly
  //     const divider = "Survivor";
  //     const reserved = [divider];

  //     // body parts that the gear is equipped on.

  //     const parts = [
  //       "Body",
  //       "Legs",
  //       "Feet",
  //       "Arms",
  //       "Hands",
  //       "Head",
  //       "Chest",
  //       "Back"
  //     ];

  //     // regular expression that matches character names in data
  //     const nameRegex = /Survivor[M | F]_[A-Za-z]+/gim;

  //     // structure to hold character equip data
  //     const structure = {};

  //     // remove control characters, excess spaces, items that are not valid words,
  //     // items that are messed up in some way
  //     //may have to add to the list later as new items are encountered and logged for the first time
  //     t = t
  //       .replace(/[\x00-\x1F\x7F-\x9F\W]/gm, " ")
  //       .replace(/\s+/gim, " ")
  //       .trim()
  //       .split(" ")
  //       .filter(item => item.length > 3)
  //       .filter(item => !/^[a-z]/gm.test(item[0]))
  //       .filter(item => {
  //         const b = item
  //           .split("")
  //           .sort()
  //           .join("")
  //           .replace(/\d/gm, "");

  //         return !/[A-Z]{4,}/gm.test(b);
  //       });

  //     // add body parts to character objects
  //     t.forEach(item => {
  //       if (item === divider) {
  //         return;
  //       }

  //       const surv = structure;

  //       // if current item is a character, then add on all the body part arrays
  //       if (nameRegex.test(item)) {
  //         surv[item] = {};
  //         parts.forEach(p => (surv[item][p] = []));
  //         reserved.push(item);
  //       }
  //     });

  //     // filter out extraneous names in data
  //     t = t.filter(n => !nameRegex.test(n));

  //     // set up temp array for equipment
  //     let temp = [];

  //     // initialize flags to hold the current operating character, and current body part
  //     let currentPerson, currentPart;

  //     // for each item in the array of text,
  //     t.forEach(item => {
  //       const s = structure;

  //       // if the item is not a body part or a reserved keyword,
  //       if (!parts.includes(item) && !reserved.includes(item)) {
  //         // add the item into the array. it should be an equipment piece
  //         temp.push(item);
  //       } else {
  //         // otherwise, set the current body part.
  //         if (parts.includes(item)) {
  //           currentPart = item;

  //           // go through the temp array, which is now full of equipment,
  //           temp.forEach(t => {
  //             // and add on equipment to the current body part on the current person.
  //             s[currentPerson][currentPart].push(t);
  //           });

  //           // empty out the temporary 'gear holder'
  //           temp = [];
  //         } else if (reserved.includes(item) && item !== divider) {
  //           // if a new name is found, set the current person to the new name

  //           currentPerson = item;
  //         }
  //       }
  //     });

  //     // return the created object
  //     return structure;
  //   };
  //   parseDayZProfile(event).then(survivorList =>
  //     this.setState({
  //       inventory: {
  //         survivorList
  //       }
  //     })
  //   );
  //   this.setState({ value: event.target.value });
  // }
  onChangeLoadout() {
    console.log("loadout submitted");
    //   //this.state.inventory;
    //   //this.setState({});
  }
  componentDidUpdate() {
    console.log("this updated");
  }

  handleSubmit(event) {
    //console.log(event.target);
    event.preventDefault();
  }

  render() {
    console.log(this.state.inventory.survivorList);
    return (
      <div className="container-2">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="file"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button onClick={this.onChangeLoadout.bind(this)} className="btn">
          Post
        </button>
        <Login />
        <Userlist survivorList={this.state.inventory.survivorList} />
      </div>
    );
  }
}

export default App;
