import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/Cardlist";
import SearchBar from "../components/SearchBar";
import Header from '../components/Header';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
  return {
    searchInput: state.searchRobots.searchInput,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      robots: []
      searchInput: ""
};

    // this.onSearchChange = this.onSearchChange.bind(this);
  }*/

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => this.setState({ robots: users }));
    this.props.onRequestRobots();
  }

  /*onSearchChange(event) {
    this.setState({ searchInput: event.target.value });
  }*/

  render() {
    // const { robots } = this.state;
    const {
      searchInput,
      onSearchChange,
      robots,
      isPending
    } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBar searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
