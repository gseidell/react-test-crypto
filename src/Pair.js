import React, { Component } from 'react';
import './App.css';

class Pair extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : null,
        };
    }

  render() {
    return (
        <div>
        <header>{this.state.data.name}</header>
        <b>Last Price: </b><code>{this.state.last}</code>
        <b>24h High: </b><code>{this.state.high}</code>
        <b>24h Low: </b><code>{this.state.low}</code>
        <b>24h Average: </b><code>{this.state.vwap}</code>
        <b>24h Volume: </b><code>{this.states.volume}</code>
        <br/>
      </div>
    );
    }

    componentDidMount() {        
        this.getPairData(this.props.data.name).then(
            value => this.setState({value})
        );
    }
    async getPairData(pair){
      return fetch('https://www.bitstamp.net/api/v2/ticker/'+pair).then(response => response.json());
    }

}

export default Pair;
