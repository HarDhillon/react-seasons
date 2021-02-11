import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component {

  // constructor(props) {
  //   // We do this to reference the parent constructor.
  //   super(props);
  //   // intitalizing the state. MUST be done when a component is created
  //   // This the ONLY time to do direct assignment, else call setState.
  //   this.state = { lat: null, errorMessage: "" };
  // }

  // Babel allows us to write the above like this:
  state = { lat: nill, errorMessage: '' }

  // this function is called when rendered for first time
  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => 
        // use setState to update state!
        this.setState({ lat: position.coords.latitude }), (err) => this.setState({ errorMessage: err.message })
    )
  }

  renderContent () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    
    return <Spinner message="Please allow location" />;
  }

  // We have to define render in react
  render() {
    
    return (
      <div className="border red">
        { this.renderContent() }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)