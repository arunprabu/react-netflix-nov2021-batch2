import React, { Component } from 'react'

class Subscription extends Component {

  // have internal-styles
  state = {
    discountStyle: { 
      backgroundColor: 'red', 
      fontSize: '30px',
      padding: '10px'
    },
    couponStyle: {
      backgroundColor: 'grey',
      color: 'white',
      padding: '10px'
    }
  }

  render() {
    return (
      <div>
        <h4 className="greenText">You are an active subscriber</h4>
        {  /* inline styles demo */  }
        <p style={{ backgroundColor: 'yellow', fontSize: '30px'}} 
          className="text-center">Your account should be renewed: 29/Nov/2021</p>
        <h4 style={this.state.discountStyle}>RENEW AT 50% DISCOUNT</h4>
        <p style={this.state.couponStyle}>Use Coupon Code: OFFER50</p>
      </div>
    )
  }
}

export default Subscription;
