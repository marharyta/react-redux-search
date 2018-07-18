import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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
      <ul className={this.props.className}>
        {this.state.coworkings.map(i => {
          return (
            <li key={i.id}>
              <img src={i.image} alt={'alt'} />
              <h2> {i.title} </h2>
              <p> website: {i.website}</p>
              <div>
                {i.address.map(a => {
                  return (
                    <p key={a.id}>
                      {`address ${a.street}, ${a.postcode}, ${a.city}, ${
                        a.country
                      } `}
                    </p>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

const StyledApp = styled(App)`
  color: palevioletred;
  font-weight: bold;
`;

const rootElement = document.getElementById('root');

ReactDOM.render(<StyledApp />, rootElement);
