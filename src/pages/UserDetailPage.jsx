import { useParams } from "react-router";

export default function UpdatePage() {
  const { id } = useParams();

  // Fetch user data based on ID
  // Example: const user = getUserById(id);

  return (
    <div id="user-page" className="page">
      <div className="container">
        <h1>User Detail Page</h1>
        <p>User Id: {id}</p>
        {/* Display user details here */}
      </div>
    </div>
  );
}
