import { Link } from "react-router-dom";

export default function ListItem({name, id }) {
    return (
        <>
            <li className="d-flex justify-content-around align-items-center">
                <p className="w-50"> {name}</p>
                <p><Link to={`/people/${id}`}
                    className="btn btn-warning">Details</Link></p>
            </li>

        </>
    );
}