import React, { Component } from 'react';

import Pair from './Pair.js';

class AllPairs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    render() {
        if (this.state.data != null)
            return (
                this.state.data.map(p => <Pair data={p} />)
            );
        return null;
    }

    async componentDidMount() {
        const data = await this.getData();
        this.setState({data});
    }

    async getData() {
        return fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/').then(response => response.json());
    }

}


export default AllPairs;
