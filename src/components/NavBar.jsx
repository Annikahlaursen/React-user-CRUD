import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">Create User</NavLink>
    </nav>
  );
}
