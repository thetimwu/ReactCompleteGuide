import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Person.module.css";
import Aux from "../../../hoc/Auxiliary";
import AuthContext from "../../../context/auth-context";

class person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;
  // static getDerivedStateFromProps(props, state) {
  //   console.log("person class derived stateFromProps");
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(" should component update");
  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(" getSnapshotBeforeUpdate");
  //   return { message: "Snapshot" };
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("componentDidUpdate");
  //   console.log(snapshot);
  // }

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    return (
      <React.Fragment>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Not Authorized</p>
        )}

        {/* <div className={styles.Person}> */}

        <p>
          I'm {this.props.name}, age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <button onClick={this.props.click}>Switch Name new</button>
        <input
          type="text"
          //ref={inputEl => {
          //  this.inputElement = inputEl;
          //}}
          ref={this.inputElementRef}
          onChange={this.props.change}
          placeholder={this.props.name}
        />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

person.propTypes = {
  click: PropTypes.func,
  change: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  isAuthenticated: PropTypes.bool
};

export default person;
