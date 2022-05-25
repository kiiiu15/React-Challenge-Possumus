import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleService from "../../Services/PeopleService";
import Person from '../../Model/Person';
import DisplayAttributes from './components/ListAttributes';

const empty: Person = {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    url: ""
};

function DetailPerson() {

    const { id } = useParams();

    const [person, setPerson]
        : [person: Person, setPerson: Dispatch<SetStateAction<Person>>] = useState<Person>(empty);

    useEffect(() => {
        (async () => {
            try {
                const personData: Person = await PeopleService.fetchPerson(id);
                setPerson(personData);
            } catch (err) {
                setPerson(empty);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const personData: Person = await PeopleService.fetchPerson(id);
                setPerson(personData);
            } catch (err) {
                setPerson(empty);
            }
        })();
    }, [id]);


    return <>
        <div className="p-5  bg-light border border-dark">
            <div className="container-fluid d-flex flex-column justify-content-center py-5">
                <h1 className="display-5 fw-bold">{person.name}</h1>               
                <DisplayAttributes title="Details: " person={person}/>
            </div>
        </div>
    </>;
}


export default DetailPerson;