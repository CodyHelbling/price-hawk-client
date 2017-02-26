/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Prices from './Prices';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 10,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: cyan500,
  },
});


class URLInput extends Component {

  getPrices(e) {
    console.log("target: " + this.props.url);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5000/prices?url="+this.props.url, false);
    xhr.send();
    console.log(xhr.response);
    var jsonResponse = JSON.parse(xhr.response);
    this.props.updatePrices(jsonResponse);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <RaisedButton
            label="Find Price"
            secondary={true}
            onClick={this.getPrices.bind(this)}
          />
        <Prices prices={this.props.prices}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default URLInput;
