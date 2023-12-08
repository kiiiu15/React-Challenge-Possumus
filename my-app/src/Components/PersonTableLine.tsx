import { Link } from "react-router-dom";
import { Person } from "../Model/Person";

export default function PersonTableLine(person: Person) {
  const { id, name, height, mass } = person;
  return (
    <>
      <tr>
        <td className="w-50"> {name}</td>
        <td className="w-50"> {height}</td>
        <td className="w-50"> {mass}</td>
        <td>
          <Link to={`/people/${id}`} className="btn btn-warning">
            Details
          </Link>
        </td>
      </tr>
    </>
  );
}
