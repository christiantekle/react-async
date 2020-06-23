import React, { Component } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import { Container } from "@material-ui/core";
import "./App.css";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route exact path="/" component={Users} />
          <Route path="/About" component={About} />
        </Container>
      </Router>
    );
  }
}

export default App;
