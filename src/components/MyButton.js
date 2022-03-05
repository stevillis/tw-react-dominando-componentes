import React, { Component } from "react";


class MyButton extends Component {

    sayHello(event) {
        event.preventDefault();
        alert('Hello, world!');
    }
    render() {
        return (
            <button onClick={this.sayHello}>Clique aqui!</button>
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