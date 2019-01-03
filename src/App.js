import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <AllPairs data={this.getData()}/>
        </header>
      </div>
    );
  }

  getData(){
    //fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/').then(async(response) => response.json());
    let request = new XMLHttpRequest();
    request.open('GET', 'https://www.bitstamp.net/api/v2/trading-pairs-info/', false);  // `false` makes the request synchronous
    request.send(null);
    return JSON.parse(request.response);
  }

}

function AllPairs(props){
  console.log(props);
  return (
    props.data.map(p => <Pair data={p}/>)
  );
}

function Pair(props){ 
  console.log(props)
  let pairData = getPairData(props.data.url_symbol);
  if(pairData === null)
    return <div/>;
  return(
    <div>
      <header>{props.data.name}</header>
      <b>Last Price: </b><code>{pairData.last}</code>
      <b>24h High: </b><code>{pairData.high}</code>
      <b>24h Low: </b><code>{pairData.low}</code>
      <b>24h Average: </b><code>{pairData.vwap}</code>
      <b>24h Volume: </b><code>{pairData.volume}</code>
      <br/>

    </div>
  )
}

function getPairData(pair){
  
  //fetch('https://www.bitstamp.net/api/v2/ticker/'+pair).then(response => response.json()).then(r => a = r)
  let request = new XMLHttpRequest();
  request.open('GET', 'https://www.bitstamp.net/api/v2/ticker/'+pair, false);  // `false` makes the request synchronous
  request.send(null);
  if (request.status === 200) {
    return JSON.parse(request.response);
  }
  return null;
}

export default App;
