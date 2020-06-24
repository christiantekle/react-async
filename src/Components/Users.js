import React, { Component } from "react";
import UsersList from './UsersList';

class Users extends Component {
    render(){
  return (this.props.users.map((user) => (
    <UsersList key={user.id} user={user}/>
  )))
}
};

export default Users;
