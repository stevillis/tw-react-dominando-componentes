import React, { Component } from 'react';

import { Channel } from '../services/EventEmitter';

class ClickList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            hasError: false,
        }

        this.setTotal = this.setTotal.bind(this);
        this.resetError = this.resetError.bind(this);
    }

    componentDidMount() {
        Channel.on('listItem:click', this.setTotal);
    }

    componentWillUnmount() {
        Channel.removeListener('listItem:click', this.setTotal)
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error) {
        console.log(error);
    }

    resetError() {
        this.setState({
            total: 0,
            hasError: false,
        })
    }

    setTotal() {
        this.setState(state => {
            return {
                total: state.total + 1
            }
        })
    }

    render() {
        const { state } = this;
        if (state.hasError) {
            return <button onClick={this.resetError}>Reset error</button>
        }

        return (
            <div>
                Total: {state.total}
                <ul>
                    {
                        this.props.children.map((item, index) => {
                            return <item.type index={index}>
                                {item.props.children}
                            </item.type>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ClickList;