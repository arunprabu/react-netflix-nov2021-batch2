import React, { Component } from 'react';

class TrendingShows extends Component {

  constructor(){
    super(); // call super to access this keyword
    // keep state data here - when you have constructor you need to refer state as this.state 
    this.state = {
      showList: [
        {
          id: 34242,
          title: 'Money Heist',
          desc: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
          isInFav: false
        },
        {
          id: 23423,
          title: 'Squid Game',
          desc: 'The series revolves around a contest where 456 players, all of whom are in deep financial debt, risk their lives to play a series of deadly children\'s games',
          isInFav: false
        },
        {
          id: 24534,
          title: 'Black Mirror',
          desc: 'This sci-fi anthology series explores a twisted, high-tech near-future where humanity\'s greatest innovations and darkest instincts collide.',
          isInFav: false
        },
        {
          id: 34535,
          title: 'Breaking Bad',
          desc: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s...',
          isInFav: false
        }
      ]
    }
  }

  handleAddToFav(index){ // clicked show's index
    console.log(index);
    // let's update the state data immutably
    let dupShowList = [ ...this.state.showList ];
    dupShowList[index].isInFav = !dupShowList[index].isInFav;

    this.setState({
      showList: dupShowList
    });
  }

  render() {

    // DO NOT change states here

    let shows = null;

    // ideal place for looping thru
    shows = this.state.showList.map( (show, index) => {
      console.log(show);
      return( 
        <div className="col-md-4" key={show.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{show.title}</h5>
              <p className="card-text">{show.desc}</p>
              { 
                show.isInFav? 
                <button className="btn btn-primary" 
                  onClick={this.handleAddToFav.bind(this, index)}>
                  In Favorite
                </button>
                :
                <button className="btn btn-dark" 
                  onClick={this.handleAddToFav.bind(this, index)}>
                  Add to Favorite
                </button>
              }
              
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="row">
        { 
          this.state.showList && this.state.showList.length > 0? 
          shows
          :
          <div className="alert alert-warning">
            Sorry! Unable to fetch Trending Shows. Try again later.
          </div>
        }

      </div>
    )
  }
}

export default TrendingShows;