import React, { Component } from 'react';

class ClickList extends Component {
    render() {
        return (
            <>
                <h1>
                    Hello, world!
                </h1>
                <ol>
                    {
                        this.props.children.map(element => (
                            <li>element</li>
                        ))
                    }
                </ol>
            </>
        );
    }
}

export default ClickList;