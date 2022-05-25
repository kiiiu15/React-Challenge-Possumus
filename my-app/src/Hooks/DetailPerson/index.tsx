import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleService from "../../Services/PeopleService";
import Person from '../../Model/Person';
import DisplayAttributes from './components/ListAttributes';
import Loading from '../../Components/Loading';
import { emptyPerson } from "../../Config/Constants";


function DetailPerson() {

    const { id } = useParams();

    const [person, setPerson]
        : [person: Person, setPerson: Dispatch<SetStateAction<Person>>] = useState<Person>(emptyPerson);

    useEffect(() => {
        (async () => {
            try {
                const personData: Person = await PeopleService.fetchPerson(id);
                setPerson(personData);
            } catch (err) {
                setPerson(emptyPerson);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const personData: Person = await PeopleService.fetchPerson(id);
                setPerson(personData);
            } catch (err) {
                setPerson(emptyPerson);
            }
        })();
    }, [id]);


    return <>
        <div className="p-5  bg-light border border-dark">
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-5">

                {(person == emptyPerson) ? <Loading /> : <>
                    <h1 className="display-5 fw-bold">{person.name}</h1>
                    <DisplayAttributes title="Details: " person={person} />
                </>}
            </div>
        </div>
    </>;
}


export default DetailPerson;