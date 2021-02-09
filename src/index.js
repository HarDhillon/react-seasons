import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  // Constructor is specific to JS not react. Called first in a class
  constructor(props) {
    // We do this to reference the parent constructor. We HAVE to do this every time
    super(props);
    // intitalizing the state. MUST be done when a component is created
    this.state = { lat: null }; // default it to null
  }

  // We have to define render in react
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)