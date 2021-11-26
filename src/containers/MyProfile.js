import React, { Component } from 'react'

class MyProfile extends Component {

  state = {
    firstName: 'John'
  }

  handleFirstNameChange = (event) => { // event object - it is synthetic event object
    console.log(event.target); // on what element the event occurred
    console.log(event.target.value); // what key we typed 
    // updating state
    this.setState({
      firstName: event.target.value
    });
  }

  render() {
    return (
      <div>
        {/* One way Data Binding */}
        <p>First Name: {this.state.firstName}</p>

        {/* Two way Data Binding */}
        <input type="text" 
          value={this.state.firstName} onChange={this.handleFirstNameChange}/>
      </div>
    )
  }
}

export default MyProfile;
