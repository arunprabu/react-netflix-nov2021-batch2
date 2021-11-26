import React, { Component } from 'react'

class Signin extends Component {


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.email.value);
    console.log(this.password.value);

    let formData = {
      email: this.email.value,
      password: this.password.value
    }

    console.log(formData); // here's the submittable formData. 
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              ref={ (emailInput) => { this.email = emailInput } }/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" 
            ref={ (passwordInput) => { this.password = passwordInput } }/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signin;