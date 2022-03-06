import React, { Component } from 'react';


const data = [
    {
        nome: "Ana Cláudia",
        idade: 18
    },
    {
        nome: "Roberto Cunha",
        idade: 19
    },
    {
        nome: "Joscicleia",
        idade: 21
    }
]

class PeopleList extends Component {
    render() {
        return (
            <ul>
                {data.map(person =>
                    <li>Nome: {person.nome}, Idade: {person.idade} anos</li>
                )}
            </ul>
        );
    }
}

export default PeopleList;