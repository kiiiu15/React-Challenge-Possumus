import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
}
export default function PersonTableLine(person: Props) {
  const { id, name } = person;
  return (
    <>
      <li className="d-flex justify-content-around align-items-center">
        <p className="w-50"> {name}</p>
        <p>
          <Link to={`/people/${id}`} className="btn btn-warning">
            Details
          </Link>
        </p>
      </li>
    </>
  );
}
