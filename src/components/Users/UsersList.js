import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";

const UsersList = (props) => {
  // var displayList = [];
  // console.log(displayList);
  // console.log(props.onUserSearch);
  // if (props.onUserSearch) {
  //   displayList = [];
  //   displayList.push(props.onUserSearch);
  //   console.log(displayList);
  // } else {
  //   displayList = [...props.users];
  // }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li className={classes.usersCard}>
            <div className={classes.infoTitle}>
              <h3>{user.name}</h3>
              <p>{user.age} Years Old</p>
            </div>
            <div className={classes.title}>
              <h4>Last three activities:</h4>
              <ol className={classes.items}>
                {user.activities.map((activity) => (
                  <li>{activity}</li>
                ))}
              </ol>
            </div>
            <div className={classes.title}>
              <h4>partake:</h4>
              <div className={classes.items}>
                <p>Hiking: {user.partake.hiking}</p>
                <p>Biking: {user.partake.biking}</p>
                <p>Running: {user.partake.running}</p>
              </div>
            </div>
            <div>
              <h4>
                Rating:{" "}
                {user.rating.map((star) => (
                  <FontAwesomeIcon icon={faStar} />
                ))}
              </h4>
            </div>
            <Button type="button">Remove User</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
