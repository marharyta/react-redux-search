import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coworkings: [] };
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/11sr9q', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <div> Hello, world! </div>;
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
