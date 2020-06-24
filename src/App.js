import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchUsers from "./components/SearchUsers";
import About from "./components/About";
import { Container } from "@material-ui/core";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((res) => this.setState({ users: res.data }));
  }
  render() {
    async function fetchUsers() {
      const res = await fetch ('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
    }
    fetchUsers();
    return (
      <Router>
        <Container>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <SearchUsers users={this.state.users}/>
                <Users users={this.state.users} />
             </Fragment>
            )}
          />
          <Route path="/About" component={About} />
        </Container>
      </Router>
    );
  }
}

export default App;
