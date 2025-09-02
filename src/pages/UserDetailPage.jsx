import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import User from "../components/User";

export default function UpdatePage() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("users"); // get the existing users from local storage
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    const user = usersData.find((user) => user.id === id); // find the user with the matching id
    console.log(user);
    setUser(user); // set the user to the state
  }, [id]); // ID VERY IMPORTANT TO HAVE IN THE DEPENDENCY ARRAY

  // Fetch user data based on ID
  // Example: const user = getUserById(id);

  function showUpdate() {
    navigate(`/users/${id}/update`);
  }

  return (
    <div id="user-page" className="page">
      <div className="container">
        <h1>{user.name}</h1>
        <User user={user} />
        <div className="btns">
          <button className="btn-cancel" onClick={showDeleteDialog}>
            Delete User
          </button>
          <button onClick={showUpdate}>Update User</button>
        </div>
      </div>
    </div>
  );
}
