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
        const peopleList = [];
        for (let i = 0; i < data.length; i++) {
            peopleList.push(
                <li>Nome: {data[i].nome}, Idade: {data.idade} anos</li>
            )
        }
        return (
            <ul>
                {peopleList}
            </ul>
        );
    }
}

export default PeopleList;