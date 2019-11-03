import React, { Component } from "react";
//import ReactDOM from "react-dom";
import styles from "./App.module.css";
//import Person from "../components/Persons/Person/Person";
//import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    persons: [
      { id: "asdf", name: "Tim", age: 38 },
      { id: "tyiuo", name: "Amy", age: 7 },
      { id: "dfgh", name: "Sophie", age: 4 }
    ],
    showPerson: true,
    changeCounter: 0,
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("derived state from props " + props);
    return state;
  }

  componentDidMount() {
    console.log("component did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return true;
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  deletePersonHandler = index => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  inputChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const persons = [...this.state.persons];

    persons[personIndex].name = e.target.value;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  toggleHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  authHandler = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    let person = null;

    if (this.state.showPerson) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.inputChangeHandler}
          isAuth={this.state.isAuthenticated}
        />
      );
    }

    return (
      <React.Fragment>
        {/* <WithClass classes={styles.App}> */}
        {/* <div className={styles.App}> */}
        <AuthContext.Provider
          value={{
            authenticated: this.state.isAuthenticated,
            login: this.authHandler
          }}
        >
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked={this.toggleHandler}
          />
          {person}
        </AuthContext.Provider>
        {/* </div> */}
        {/* </WithClass> */}
      </React.Fragment>
    );
  }
}

export default withClass(App, styles.App);
