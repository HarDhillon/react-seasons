import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component {

  // Constructor is specific to JS not react. Called first in a class
  constructor(props) {
    // We do this to reference the parent constructor. We HAVE to do this every time
    super(props);
    // intitalizing the state. MUST be done when a component is created
    // This the ONLY time to do direct assignment, else call setState.
    this.state = { lat: null, errorMessage: "" };
  }

  // this function is called when rendered for first time
  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => 
        // use setState to update state!
        this.setState({ lat: position.coords.latitude }), (err) => this.setState({ errorMessage: err.message })
    )
  }

  // called when updates
  componentDidUpdate () {
    console.log("My component was just updated")
  }

  // We have to define render in react
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    
    return <div>Loading...</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)