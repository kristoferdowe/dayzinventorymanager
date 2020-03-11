import React from "react";
//import a login image here

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <label htmlFor="username"> Username</label>
            <input type="text" name="username" placeholder="username" />

            <label htmlFor="groupname">Groupname</label>
            <input type="text" name="groupname" placeholder="groupname" />

            <label htmlFor="passphrase">Passphrase</label>
            <input type="text" name="passphrase" placeholder="passphrase" />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
