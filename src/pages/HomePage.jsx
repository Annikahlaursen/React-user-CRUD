import { useState, useEffect } from "react";
import User from "../components/User";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    getUsers();

    async function getUsers() {
      const data = localStorage.getItem("users"); // get the existing users from local storage

      let usersData = [];

      if (data) {
        usersData = JSON.parse(data); // parse the data from string to javascript array
      } else {
        usersData = await fetchUsers();
      }

      usersData.sort((user1, user2) => user1.name.localeCompare(user2.name)); // sort the users by name

      console.log(usersData);

      setUsers(usersData); // set the users to the state
      // fetchUsers();
    }
  }, []);

  async function fetchUsers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    ); // fetch the data from the API
    const data = await response.json(); // parse the data from string to javascript array
    localStorage.setItem("users", JSON.stringify(data)); // save the data to local storage

    return data;
  }

  return (
    <main className="app">
      <section className="grid">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
}
