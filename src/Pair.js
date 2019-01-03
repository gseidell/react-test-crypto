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
      if (this.state.data!=null)
    return (
        <div>
        <header>{this.props.data.name}</header>
        <b>Last Price: </b><code>{this.state.data.last}</code>
        <br/>
        {/* <b> 24h High: </b><code>{this.state.data.high}</code>
        <b> 24h Low: </b><code>{this.state.data.low}</code>
        <b> 24h Average: </b><code>{this.state.data.vwap}</code> */}
        <b> 24h Volume: </b><code>{this.state.data.volume}</code>
        <hr/>
      </div>
    );
    return null;
    }

    async componentDidMount() {        
        const data = await this.getPairData(this.props.data.url_symbol);
        this.setState({data});
    }
    async getPairData(pair){
        return fetch('https://www.bitstamp.net/api/v2/ticker/'+pair).then(response => response.json());
    }

}

export default Pair;
