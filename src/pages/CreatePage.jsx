import { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleCancel() {
    // handle the cancel button click
    navigate(-1);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      id: Date.now().toString(), // create a unique id
      name: name,
      title: title,
      mail: email,
      image: image,
    };
    // send newUser to the backend (not implemented here)

    console.log({ name, title, email, image });

    const data = localStorage.getItem("users"); // get the existing users from local storage
    const usersData = JSON.parse(data) || []; // get the existing users from local storage

    usersData.push(newUser); // add the new user to the array
    localStorage.setItem("users", JSON.stringify(usersData)); // save the updated array back to local storage

    navigate("/"); // navigate back to the home page
  }

  return (
    <div className="page">
      <div className="container">
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Type name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Type title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Type email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Image URL</label>
          <input
            id="image"
            type="text"
            placeholder="Type image URL"
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="image-preview"></label>
          <img
            id="image-preview"
            className="image-preview"
            src={
              image ? image : "https://placehold.co/600x400?text=Image+preview"
            }
            alt="choose"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/600x400?text=Error+loading+image")
            }
          />

          <div className="btns">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
