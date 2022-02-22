
import { Link } from "react-router-dom";

export default function ListUser() {
  return (
    <Link to="/add">
      <button type="button">Add User</button>
    </Link>
  );
}
