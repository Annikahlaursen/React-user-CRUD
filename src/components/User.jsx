import { use } from "react";
import { useNavigate } from "react-router";

export default function User({ user }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/users/${user.id}`);

    // get the initials - get the part before the @ symbol in the mail
    function getInitials() {
      const initials = user.mail.split("@")[0];
      return initials;
    }
  }

  return (
    <article className="user-card" onClick={handleClick}>
      <img
        src={
          user.image || "https://placehold.co/600x400?text=Error+loading+image"
        }
        alt={user.name}
      />
      <h2>
        {user.name} ({getInitials()})
      </h2>
      <p className="title">{user.title}</p>
      <p>
        <a href={`mailto:${user.email}`}>{user.mail}</a>
      </p>
    </article>
  );
}
