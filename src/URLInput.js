/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 10,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    focusColor: deepOrange500,
  },
});

class FindPrices extends Component {
  updateURL(e) {
    console.log("Url: ", e.target.value);
    this.props.updateUrl(e.target.value)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <TextField
            hintText="Paste URL here."
            style={{width: '80%'}}
            onChange={this.updateURL.bind(this)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default FindPrices;
