import React, { Component } from 'react';

class Prices extends Component {
  render() {
    var prices = []
    if(this.props.prices[0]){
      for (var i=0; i<5; i++){
        prices.push(<h2>{this.props.prices[i]}</h2>);
      }
    }

    return (
      <div>
        {prices}
      </div>
    )
  }
}

export default Prices
