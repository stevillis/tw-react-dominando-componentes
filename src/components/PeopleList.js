import React, { Component, Fragment } from 'react';


const data = [
    {
        id: 1,
        nome: "Ana Cláudia",
        idade: 18
    },
    {
        id: 8,
        nome: "Roberto Cunha",
        idade: 19
    },
    {
        id: 13,
        nome: "Joscicleia",
        idade: 21
    }
]

class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.helloPerson = this.helloPerson.bind(this);
    }

    helloPerson(person) {
        alert(person.nome);
    }

    render() {
        return (
            <ul>
                {
                    data.map(person =>
                        <li key={person.id} onClick={this.helloPerson.bind(this, person)}>
                            Nome: {person.nome}, Idade: {person.idade} anos
                        </li>
                    )
                }
            </ul>
        );
    }
}

class ExampleFragment1 extends Component {
    render() {
        return <Fragment key={1}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </Fragment>
    }
}


class ExampleFragment2 extends Component {
    render() {
        return <>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </>
    }
}

export default PeopleList;