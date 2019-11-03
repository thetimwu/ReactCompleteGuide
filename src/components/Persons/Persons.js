import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  conponentWillUnmount() {
    console.log("component will unmount");
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("should component update");
  //     if (
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //  }
  render() {
    return this.props.persons.map((p, index) => {
      return (
        <Person
          key={p.id}
          name={p.name}
          age={p.age}
          click={() => this.props.clicked(index)}
          change={e => this.props.changed(e, p.id)}
          isAuth={this.props.isAuth}
        />
      );
    });
  }
}

export default Persons;
