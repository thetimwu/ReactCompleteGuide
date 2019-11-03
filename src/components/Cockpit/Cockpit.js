import React, { useEffect, useRef, useContext } from "react";
import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const myAuthContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
    // run after render cycle
    console.log("useEffect");
    return () => {
      console.log("cleanup work");
    };
  }, []); //triger only for component render the first time

  const classes = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(styles.red);
  }
  if (props.personsLength <= 1) {
    classes.push(styles.bold);
  }
  return (
    <div>
      <p className={classes.join(" ")}>This is really working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle person
      </button>

      <button onClick={myAuthContext.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
