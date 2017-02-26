import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './Header';
import URLInput from './URLInput';
import FindPrices from './FindPrices';


class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      prices: [],
    }
  }

  updateUrl(url) {
    this.setState({url})
  }

  updatePrices(prices){
    this.setState({prices})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <URLInput URL={this.state.url} />
          <FindPrices prices={this.state.prices}/>
        </div>
      </div>
    );
  }
}


export default App;

injectTapEventPlugin();
