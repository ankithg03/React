import React, { Component } from "react";

class ListRender extends Component {
  // NameList() {
  //     const person = [
  //         {
  //             id:1,
  //             name: 'Ankith G',
  //             age: 22,
  //             skill: 'react'
  //         },
  //         {
  //             id:2,
  //             name: 'Bashid',
  //             age: 24,
  //             skill: 'react'
  //         },
  //         {
  //             id:3,
  //             name: 'Rajath',
  //             age: 24,
  //             skill: 'GraphQl'
  //         }
  //     ]
  //     return person
  // }
  render() {
    const persons = [
      {
        id: 1,
        name: "Ankith G",
        age: 22,
        skill: "ntg"
      },
      {
        id: 2,
        name: "Bashid",
        age: 24,
        skill: "react"
      },
      {
        id: 3,
        name: "Rajath",
        age: 24,
        skill: "GraphQl"
      }
    ];
    const a = persons;
    const personList = a.map((person, index) => (
      <h2
        key={index}
        /*{person.id}*/ style={{
          color: "#f1" + (parseInt(person.id) + parseInt(10))
        }}
      >
        I'm {person.name}, I'm {person.age} age, and I'm good at {person.skill}
      </h2>
    ));
    return <div>{personList}</div>;
  }
}

export default ListRender;
