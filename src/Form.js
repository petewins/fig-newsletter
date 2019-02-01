import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        fName: "",
        lName: ""
      },
      emailEntered: false,
      btnValue: "Next",
      formMsg: "Sign Up for the TLC Newsletter.",
      formSubmitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let form = {
      ...this.state.form,
      [event.target.name]: event.target.value
    };
    this.setState({ form });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.form.email && !this.state.emailEntered) {
      let formMsg = "Almost done! Please enter your first and last name.";
      this.setState({ emailEntered: true, btnValue: "Submit", formMsg });
      event.target.reset();
    }
    if (this.state.emailEntered) {
      let formMsg = "Thank you for signing up!";

      this.setState({ formSubmitted: true, formMsg });
      console.log("submit", this.state.form);
    }
  }

  render() {
    const Button = ({ btnValue }) => (
      <button className="btn btn-danger" type="submit">
        {btnValue}
      </button>
    );

    let signup = <p>Look out for the latest news on your favorite shows. </p>;

    if (!this.state.emailEntered && !this.state.formSubmitted) {
      signup = (
        <div className="form-group">
          <div className="form-row">
            <div className="col-12 col-md-9 col-lg-10">
              <input
                className="form-control"
                required
                name="email"
                value={this.state.form.email}
                onChange={this.handleChange}
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <div className="col-12 col-md-3 col-lg-2 btn-center">
              <Button btnValue={this.state.btnValue} />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.emailEntered && !this.state.formSubmitted) {
      signup = (
        <div className="form-row">
          <div className="col-6 col-md-4 col-lg-5">
            <input
              className="form-control name-field"
              name="fName"
              value={this.state.form.fName}
              onChange={this.handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="col-6 col-md-4 col-lg-5">
            <input
              className="form-control name-field"
              name="lName"
              value={this.state.form.lName}
              onChange={this.handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2 btn-center">
            <Button btnValue={this.state.btnValue} />
          </div>
        </div>
      );
    }

    return (
      <form className="newsletter-form" onSubmit={this.handleSubmit}>
        <h2 className="form-title">{this.state.formMsg}</h2>

        {signup}
      </form>
    );
  }
}

export default Form;
