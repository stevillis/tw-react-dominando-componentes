import React, { Component } from 'react';


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
    render() {
        return (
            <ul>
                {
                    data.map(person =>
                        <li key={person.id}>Nome: {person.nome}, Idade: {person.idade} anos</li>
                    )
                }
            </ul>
        );
    }
}

export default PeopleList;