import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  // Constructor is specific to JS not react. Called first in a class
  constructor(props) {
    // We do this to reference the parent constructor. We HAVE to do this every time
    super(props);
    // intitalizing the state. MUST be done when a component is created
    // This the ONLY time to do direct assignment, else call setState.
    this.state = { lat: null, errorMessage: "" }; // default it to null

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // use setState to update state!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // We have to define render in react
  render() {
    return (
      <div>
        Latitude: {this.state.lat} 
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)