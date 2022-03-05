import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0
        }

        /*
        setTimeout(() => {
            this.setState({
                time: 5
            })
        }, 2000)
        */

        setInterval(() => {
            this.setState((state, props) => {
                return {
                    time: state.time + 1
                }
            })
        }, 1000)
    }

    render() {
        const { state } = this;
        return (
            <div>{state.time}</div>
        );
    }
}

export default Time;