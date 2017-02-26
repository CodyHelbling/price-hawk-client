import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './Header';
import URLInput from './URLInput';
import FindPrices from './FindPrices';


class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://www.walmart.com/",
      prices: [],
    };
  }

  updateUrl(url) {
    console.log("Updating URL to : "+url);
    this.setState({url});
  }

  updatePrices(prices){
    this.setState({prices});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <URLInput
            updateUrl={this.updateUrl.bind(this)}
            url={this.state.url}
          />

          <FindPrices
            updatePrices={this.updatePrices.bind(this)}
            prices={this.state.prices}
          />
        </div>
      </div>
    );
  }
}


export default App;

injectTapEventPlugin();
