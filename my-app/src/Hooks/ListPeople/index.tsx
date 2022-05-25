import { useEffect, useId, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PeopleService from "../../Services/PeopleService";
import Person from '../../Model/Person';
import ListItem from "./components/ListItem";
import Loading from '../../Components/Loading';
import List from "./components/List";

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
            <div className="w-50  d-flex flex-column justify-content-center align-items-center bg-light border border-dark">
               {(people.length) ? <List people={people}/> : <Loading/>}
            </div >
            <div className="w-50">
                <Outlet></Outlet>
            </div>

        </div >
    </>;
}


export default ListPeople;

