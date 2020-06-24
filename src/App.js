import React, { Component } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    return (
      <Router>
        <Container>
          <Header />
          <Route exact path="/" component={() => <Users users={this.state.users}/>} />
          <Route path="/About" component={About} />
        </Container>
      </Router>
    );
  }
}

export default App;
