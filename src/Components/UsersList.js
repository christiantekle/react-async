import React, { Component } from "react";

class UsersList extends Component {
  render() {
    const { name } = this.props.user;
    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }
}

export default UsersList;
