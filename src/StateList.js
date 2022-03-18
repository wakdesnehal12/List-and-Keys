import React, { Component } from 'react'

export default class StateList extends Component {
    state = {
        users: [
            {
                id: 10,
                name:  'Snehal'
            },

            {
                id: 20,
                name:  'Puja'
            },

            {
                id: 30,
                name:  'Kavita'
            }
        ],
    }
  render() {
    const newUser = this.state.users.map((data) => {
        return(
                <h6>
                    ID: {data.id},
                    Name: {data.name}
                </h6>
            );
    });
    
    return (
      <>
        <h1>{newUser}</h1>
      </>
    )
  }
}
