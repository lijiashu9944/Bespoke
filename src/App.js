import React from "react";
import { useState } from "react";
import SearchUser from "./components/Users/SearchUser";
import UsersList from "./components/Users/UsersList";

const dummyUserList = [
  {
    name: "Jason",
    age: 27,
    rating: [true, true],
    activities: ["Hiking", "Running", "Biking"],
    partake: { hiking: 2, running: 3, biking: 4 },
  },
  {
    name: "Mike",
    age: 27,
    rating: [true, true, true],
    activities: ["Hiking", "Running"],
    partake: { hiking: 2, running: 3, biking: 14 },
  },
  {
    name: "Lisa",
    age: 27,
    rating: [true, true, true],
    activities: ["Hiking", "Biking"],
    partake: { hiking: 2, running: 13, biking: 4 },
  },
  {
    name: "June",
    age: 27,
    rating: [true, true, true, true, true],
    activities: ["Hiking", "Hiking", "Biking"],
    partake: { hiking: 2, running: 10, biking: 4 },
  },
  {
    name: "July",
    age: 27,
    rating: [true, true, true, true],
    activities: ["Hiking", "Hiking", "Biking"],
    partake: { hiking: 5, running: 3, biking: 4 },
  },
];
var searchedUser = [];
function App() {
  const [usersList, setUsersList] = useState(dummyUserList);

  const searchUserHandler = (uName) => {
    searchedUser = usersList.find((obj) => {
      return obj.name.toLocaleLowerCase === uName.toLocaleLowerCase;
    });
    console.log(searchedUser);
  };
  return (
    <div>
      <SearchUser onSearchUser={searchUserHandler} />
      <UsersList users={usersList} onUserSearch={searchedUser} />
    </div>
  );
}

export default App;
