import React, { Component } from 'react';

class ClickList extends Component {
    render() {
        return (
            <div>
                items
                <ul>
                    {
                        this.props.children.map(element => {
                            return <li>
                                <element.type prop2={this.props.number}>
                                    {element.props.children}
                                </element.type>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ClickList;