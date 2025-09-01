import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function UpdatePage() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("users"); // get the existing users from local storage
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    const user = usersData.find((user) => user.id === id); // find the user with the matching id
    console.log(user);
    setUser(user); // set the user to the state
  }, [id]); // ID VERY IMPORTANT TO HAVE IN THE DEPENDENCY ARRAY

  // Fetch user data based on ID
  // Example: const user = getUserById(id);

  return (
    <div id="user-page" className="page">
      <div className="container">
        <h1>{user.name}</h1>
        <p>User Id: {id}</p>
        {/* Display user details here */}
      </div>
    </div>
  );
}
