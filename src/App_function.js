import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person";

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Tim", age: 38 },
      { name: "Amy", age: 7 },
      { name: "Sophie", age: 4 }
    ],
    showPerson: true
  });

  const [otherState, pp] = useState({ otherState: "blablabla" });
  // console.log(personState);
  // console.log(otherState);
  const handleClick = newName => {
    setPersonState({
      persons: [
        { name: newName, age: 35 },
        { name: "Amy", age: 7 },
        { name: "Sophie", age: 4 }
      ]
    });
  };

  const nameChangeHandler = event => {
    setPersonState({
      persons: [
        { name: "Tim", age: 35 },
        { name: event.target.value, age: 7 },
        { name: "Sophie", age: 4 }
      ]
    });
  };
  // console.log(personState);

  const togglePersonHandler = () => {
    let showState = personState.showPerson;
    setPersonState({
      persons: [
        { name: "Tim", age: 38 },
        { name: "Amy", age: 7 },
        { name: "Sophie", age: 4 }
      ],
      showPerson: !showState
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };
  return (
    <div className="App">
      <h1>Hi Tim</h1>
      <button onClick={togglePersonHandler}>
        {/* <button style={style} onClick={handleClick.bind(this, "Melonie")}> */}
        Switch Name
      </button>
      {/* {personState.persons.map(p => ( */}

      {personState.showPerson ? (
        <div>
          <Person
            name={personState.persons[1].name}
            age={personState.persons[1].age}
            onClick={handleClick}
            onChange={nameChangeHandler}
          ></Person>
        </div>
      ) : null}

      {/* ))} */}
    </div>
  );
};

export default App;
