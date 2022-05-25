import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleService from "../../Services/PeopleService";
import Person from '../../Model/Person';

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
                <h2>Details:</h2>
                <ul className="list-unstyled col-md-8 fs-4 d-flex flex-column flex-wrap">
                    <li>{`Eye color: ${person.eye_color}`}</li>
                    <li>{`Films: ${person.films.length}`}</li>
                    <li>{`Gender: ${person.gender}`}</li>
                    <li>{`Hair color: ${person.hair_color}`}</li>
                    <li>{`Heigth:${person.height} cm`}</li>
                    <li>{`Homeworld: Planet ${person.homeworld.split("/")[5]}`}</li>
                    <li>{`Mass: ${person.mass} kg`}</li>
                    <li>{`Skin: ${person.skin_color}`}</li>
                    <li>{`Species: ${person.species.length || "n/a"}`}</li>
                    <li>{`Startships: ${person.starships.length}`}</li>
                    <li>{`Vehicles: ${person.vehicles.length}`}</li>
                </ul>
            </div>
        </div>
    </>;
}


export default DetailPerson;