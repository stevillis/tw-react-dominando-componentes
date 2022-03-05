import React, { Component } from "react";


class MyButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    // Precisa de bind
    handleClick() {
        this.setState((state, props) => {
            return { isOn: !state.isOn };
        })
    }

    // Não precisa de bind
    /*handleClick = () => {
        console.log(this);
    }*/

    render() {
        const { state } = this;
        return (
            <button onClick={this.handleClick}>{state.isOn ? 'Desligar' : 'Ligar'}</button>
        );
    }
}


/*
function MyButton(props) {
    function sayHello() {
        alert('Hello, world!');
    }

    return <button onClick={sayHello}>CLique aqui!</button>
}
*/

export default MyButton;