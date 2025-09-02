// OBS: du er nu ved opgave 2.5. Delete User - https://race.notion.site/React-User-CRUD-App-c5eb67a692dc4734a813bdcdd2040eb7#6a60a0b8c0394977838e56e5ce8b163a

import { useEffect, useState } from "react";

export default function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [mail, useMail] = useState("");
  const [image, useImage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("users"); // get the existing users from local storage
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    const user = usersData.find((user) => user.id === id); // find the user with the matching id
    setName(user.name);
    setTitle(user.title);
    useMail(user.mail);
    useImage(user.image);
  }, [id]); // ID VERY IMPORTANT TO HAVE IN THE DEPENDENCY ARRAY

  function updateUser(event) {
    event.preventDefault();
    // Update the user in local storage

    const userToUpdate = {
      // key/name in the object : value from the state
      name: name,
      title: title,
      mail: mail,
      image: image,
    };

    const data = localStorage.getItem("users"); // get the existing users from local storage
    const usersData = JSON.parse(data) || []; // parse the data from string to javascript array
    const updatedUsers = usersData.map((user) => {
      if (user.id === id) {
        return { ...user, ...userToUpdate };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers)); // save the updated users back to local storage
    navigate(`/users/${id}`); // navigate back to the user detail page
  }

  return (
    <section className="page">
      <div className="container">
        <h1>Update</h1>
        <form onSubmit={updateUser}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            placeholder="Type a name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={name}
            placeholder="Type a name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Mail</label>
          <input
            type="text"
            value={name}
            placeholder="Type a name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Image URL</label>
          <input
            type="text"
            value={name}
            placeholder="Type a name"
            onChange={(e) => setName(e.target.value)}
          />
          <img
            id="image-preview"
            className="image-preview"
            src={
              image
                ? image
                : "https://placehold.co/600x400?text=Paste+an+image+URL"
            }
            alt="Choose"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/600x400?text=Error+an+image+URL")
            }
          />
          <div className="btns">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </section>
  );
}
