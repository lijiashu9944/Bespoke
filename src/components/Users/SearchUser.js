import Card from "../UI/Card";
import classes from "./SearchUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const SearchUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [error, setError] = useState();

  const searchUserHandler = (event) => {
    event.preventDefault();

    //check input
    if (enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name",
      });
      return;
    }

    props.onSearchUser(enteredUsername);

    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={searchUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />

          <Button type="submit">Search User</Button>
        </form>
      </Card>
    </div>
  );
};

export default SearchUser;
