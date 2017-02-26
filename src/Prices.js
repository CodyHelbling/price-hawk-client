import React, { Component } from 'react';

class Prices extends Component {
  render() {
    var prices = []
    if(this.props.prices[0]){
      for (var key in this.props.prices){
        if(this.props.prices.hasOwnProperty(key)){
          prices.push(<h2>{this.props.prices[key]}</h2>);
        }
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
