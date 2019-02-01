import React, { Component } from "react";
import "../App.css";

class Newsletter extends Component {
  state = {
    emailEntered: false,
    email: "",
    firstName: "",
    lastName: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    
    // if (this.state.email && this.state.emailEntered) {
        this.setState({emailEntered: true})
    //   }
    // console.log(this.state);
  }
  render() {
      console.log(this.state);
    return (
      <div className="newsletter">
        <h1>Join the List!</h1>
        <form onSubmit={ (e) => this.handlseSubmit}>
          <input placeholder="Enter email address" />
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <button onClick={this.handleSubmit} type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default Newsletter;
