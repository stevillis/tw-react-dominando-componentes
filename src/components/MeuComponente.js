import React, { Component } from "react";

/*
function MeuComponente() {
    return <h1>Hello, world!</h1>
}

const MeuComponente2 = () => {
    return <h2>Welcome!</h2>
}
*/

class MeuComponente extends Component {
  render() {
    const { props } = this;
    return <h1>Hello, {props.nome}!</h1>;
  }
}

export const MeusComponentes = {
  MeuComponente2: function () {
    return <h2>Welcome!</h2>;
  },
  MeuComponente3: function (props) {
    return <span>Raça, {props.nome}</span>;
  },
};

export { MeuComponente };
