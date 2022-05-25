import { useEffect, useId, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PeopleService from "../../Services/PeopleService";
import Person from '../../Model/Person';

function ListPeople() {

    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const people: Array<Person> = await PeopleService.fetchPeople();
                setPeople(people);
            } catch (err) {
                setPeople([]);
            }
        })();
    }, []); // inital load


    return <>
        <div className="container d-flex justify-content-evenly ">
            <div className="w-50 d-flex flex-column justify-content-center bg-light border border-dark">
                <ul className="list-unstyled py-5 px-3" >
                    {
                        people.map(({ name }: Person, index: number) => <li key={index}>
                            <div className="d-flex justify-content-around align-items-center">
                                <p className="w-50"> {name}</p>
                                <p><Link to={`/people/${index + 1}`}
                                    className="btn btn-warning">Details</Link></p>
                            </div>
                        </li>)
                    }

                </ul>
            </div >
            <div className="w-50">
                <Outlet></Outlet>
            </div>

        </div >
    </>;
}


export default ListPeople;

