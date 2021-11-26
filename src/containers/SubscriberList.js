import React, { Component } from 'react';
import axios from 'axios';

class SubscriberList extends Component {

  state = {
    subscribers: []
  }

  componentDidMount() {
    // Req to REST API 
    // 1. What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2. What's the Http Method? GET
    // 3. What's the REST API Client Tool? axios or fetch  -- npm i axios 

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        this.setState({
          subscribers: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("It is over");
      });
  }

  render() {

    console.log('Inside Render');

    let subscribers = null;
    subscribers = this.state.subscribers.map((sub) => {
      return (
        <div className="col-md-3">
          <div className="card text-dark bg-info mb-3">
            <div className="card-header">{sub.name}</div>
            <div className="card-body">
              <h5 className="card-title">{sub.phone}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      )
    });


    return (
      <div className="row">

        {
          this.state.subscribers.length > 0 ?
          subscribers
          :
          <div className="alert alert-warning">
            Sorry! unable to load subscribers
          </div>
          }

      </div>
    )
  }
}

export default SubscriberList;