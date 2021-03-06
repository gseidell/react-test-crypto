import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllPairs from './AllPairs.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <AllPairs />
        </header>
      </div>
    );
  }

  getData(){
    return fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/').then(async(response) => response.json());
    // let request = new XMLHttpRequest();
    // request.open('GET', 'https://www.bitstamp.net/api/v2/trading-pairs-info/', false);  // `false` makes the request synchronous
    // request.send(null);
    // return JSON.parse(request.response);
  }

}

// function AllPairs(props){
//   console.log(props);
//   return (
//     props.data.map(p => <Pair data={p}/>)
//   );
// }

// function Pair(props){ 
//   console.log(props)
//   let pairData = getPairData(props.data.url_symbol);
//   if(pairData === null)
//     return <div/>;
//   return(
//     <div>
//       <header>{props.data.name}</header>
//       <b>Last Price: </b><code>{pairData.last}</code>
//       <b>24h High: </b><code>{pairData.high}</code>
//       <b>24h Low: </b><code>{pairData.low}</code>
//       <b>24h Average: </b><code>{pairData.vwap}</code>
//       <b>24h Volume: </b><code>{pairData.volume}</code>
//       <br/>

//     </div>
//   )
// }


export default App;
