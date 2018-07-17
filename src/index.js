import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coworkings: [] };
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/nwxou', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ coworkings: res.coworkings });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <ul>
        {this.state.coworkings.map(i => {
          return <li key={i.id}>{i.title} </li>;
        })}
      </ul>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
