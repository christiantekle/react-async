import React, { Component } from "react";
import { Grid } from '@material-ui/core'

class UsersList extends Component {
  render() {
    const { name } = this.props.user;
    return (
      <Grid style={usersListStyle} container spacing={24}>
        <Grid>{name}</Grid>
      </Grid>
    );
  }
}

const usersListStyle = {
    width:'100%',
    margin: 'auto',
}
export default UsersList;
