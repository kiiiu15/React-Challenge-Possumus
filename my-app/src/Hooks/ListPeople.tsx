import { useEffect, useId, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PeopleService from "../Services/PeopleService";




function ListPeople() {


    const personAtributes = ["name",
        "height",
        "mass",
        "hair_color",
        "skin_color",
        "eye_color",
        "birth_year",
        "gender"
    ];



    const [people, setPeople] = useState<any>([]);

    useEffect(() => {

        (async () => {


            try {
                const people = await PeopleService.fetchPeople();

                setPeople(people);

            } catch (err) {
                setPeople([]);
            }

        })();

    }, []); // inital load


    return <div className="container d-flex justify-content-evenly">
            <ul className="p-3">
                {
                    people.map((person: any, index: number) => <li key={index}>
                        <div className="d-flex justify-content-between">
                            <p> {person.name}</p>         
                            <p><Link to={`${index + 1}`} className="btn btn-warning">Details</Link></p>
                        </div>
                    </li>)
                }
            
            </ul>

        <Outlet></Outlet>
    </div>;
}


export default ListPeople;

