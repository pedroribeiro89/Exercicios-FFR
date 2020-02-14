import React, { Component } from "react";
import { Link } from "react-router-dom";

export class UsersTable extends Component {
  state = {
    usersList: [
        {
          name: "Usuario 1",
          email: "user1@email.com",
          age: "25"
        },
        {
            name: "Usuario 2",
            email: "user2@email.com",
            age: "28"
        },
        {
            name: "Usuario 3",
            email: "user3@email.com",
            age: "35"
        }
      ]
  };

    removeUser = (email) => {
        let newList = [];
        for (let user of this.state.usersList) {
            if (user.email !== email) {
                newList.push(user);
            }
        }
        this.setState({
            usersList: newList
        });
    };

  render() {
    return (
      <div>
        <table>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Remover</th>
            </tr>
            {this.state.usersList.map(user =>(
                <tr>
                    <td><Link to={'/users/'+user.name}>{user.name}</Link></td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td><button onClick={() => this.removeUser(user.email)}>X</button></td>
                </tr>
            ))}
        </table>
      </div>
    );
  }
}