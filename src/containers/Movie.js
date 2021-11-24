// import
import React, { Component } from 'react';

// comp defn 
class Movie extends Component {


  // state is an obj
  /* 
    state can hold comp wide data
    don't change state directly. use setState() method instead. 
    setState() -- will result in re-rendering of JSX
    setState() -- will smartly merge with other properties
  */
  state = {
    featureName: 'Class Comp with States',
    movieList: [
      { 
        id: 1221223, 
        title: 'Jurassic Park', 
        desc: 'Industrialist John Hammond has created a theme park of cloned dinosaurs, Jurassic...', 
        thumbnail: 'https://via.placeholder.com/220x220' 
      },
      { 
        id: 2342343, 
        title: 'King Kong', 
        desc: 'An epic adventure monster film co-written, produced, and directed by Peter Jackson.', 
        thumbnail: 'https://via.placeholder.com/220x220' 
      }
    ]
  }

  handleClickMe = () => { // arrow fn will give access to 'this' keyword
    console.log(this);
    // use setState() -- to change state -- will render the JSX again
    this.setState( {
      featureName: 'Events Demo'
    });
  }

  // should have render method
  render() {

    console.log("Inside Render");
    // should return JSX
    return (
      <div>
        Feature: { this.state.featureName }
        <div className="row">
          <button type="button" className="btn btn-dark" 
            onClick={ this.handleClickMe }>Change Feature Name</button>

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.movieList[0].thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.state.movieList[0].title}</h5>
                <p className="card-text">{this.state.movieList[0].desc}</p>
                <button className="btn btn-sm btn-primary">Add To Watchlist</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.movieList[1].thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.state.movieList[1].title}</h5>
                <p className="card-text">{this.state.movieList[1].desc}</p>
                <button className="btn btn-sm btn-primary">Add To Watchlist</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

// export 
export default Movie;